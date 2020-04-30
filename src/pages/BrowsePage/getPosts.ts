import {api_root} from '../../utils';
import {Post} from '../../interfaces';

export default async function getPosts(){
    let res = await fetch(api_root + "/posts")
    if (!res.ok) {
        return Promise.reject(res);
    }
    res = await res.json()
    console.log("Data: ", res)
    return res.body
}
