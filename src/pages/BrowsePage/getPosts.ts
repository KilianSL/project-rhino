import {api_root} from '../../utils';
import {Post} from '../../interfaces';


export default async function getPosts(){
    console.log("Getting Posts")
    var options = {
        headers : {
            'Content-Type' : 'application/json'
        }
    }
    var posts : any;
    var data = await fetch(api_root + "/posts", options)
    data = await data.json();
    console.log(data);
    return data.body;
}