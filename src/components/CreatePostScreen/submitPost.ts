import {PostSubmission} from '../../interfaces';
import {api_root} from '../../utils';

export default function submitPost(title : string, description : string, content : string){
    var body : PostSubmission = {
        title,
        description,
        content,
        timestamp : +new Date() // Timestamp in ms integer
    };

    var request = {
        method : "POST",  
        mode : "cors" as RequestMode,
        body : JSON.stringify(body),
        headers : {
            "Content-Type" : "application/json"
        }
    };

    var url = 'https://6maig9i4c6.execute-api.eu-west-2.amazonaws.com/prod/posts';

    console.log("Requesting ", request, "from ", url);
    fetch(url, request)
    .then(
        (data : Body) => {
            console.log("Got response", data)
        }
    )
    .catch(
        err => console.log(err)
    )
}