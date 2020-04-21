import {Auth} from "aws-amplify";
import {api_root} from "./api_config";

export const makeGetRequest = (endpoint : string, callback : Function, handleErr=(err : string)=>{console.log(err)}) => {
    Auth.currentSession()
    .then(
        data => {
            console.log('currentSession:', data)
            var IDToken = data.getIdToken().getJwtToken()
            var options = {
                headers: {
                    "Authorization": IDToken,
                    'Content-Type': 'application/json'
                }
            }
            var url = api_root + endpoint
            console.log('Making request to:', url)
            fetch(url, options)
            .then(
                (data) => {
                    data.json().then(
                        data => callback ? callback(data) : null
                    )
                    .catch(
                        err =>  handleErr(err)
                    )
                }
                
            )
            .catch(
                err =>  handleErr(err)
            )
        },
        err => {
            console.log(endpoint)
            console.log('AN ERROR OCCURED WHILST GETTING THE SESSION')
            console.log(err)
        }
    )
}

export const makePostRequest = (endpoint : string, body : any, callback : Function, handleErr=(err : string)=>{console.log(err)}) => {
    Auth.currentSession()
    .then(
        data => {
            console.log('currentSession:', data)
            var IDToken = data.getIdToken().getJwtToken()
            // console.log(IDToken)
            // console.log(JSON.stringify(body))
            var options = {
                method: 'POST',
                mode: 'cors' as RequestMode,
                body: JSON.stringify(body),
                headers: {
                    "Authorization": IDToken,
                    'Content-Type': 'application/json'
                }
            }
            var url = api_root + endpoint
            console.log('Making request to:', url)
            fetch(url , options) 
            .then(
                (data : Body) => {
                    //console.log(`Response from ${endpoint}:`)
                    //console.log('RAW RESPONSE:', data)
                    data.json().then(
                        data => callback ? callback(data) : null
                    )
                    .catch(
                        err =>  handleErr(err)
                    )
                }
            )
            .catch(
                err =>  handleErr(err)
            )
        }
    )
}