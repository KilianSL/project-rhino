export interface Post{ // Interface for a social media post
    title : string,
    description : string,
    content : string, // link to the content that the user has submitted
    likes : number // number of likes the card has (in case system gets implemented)
    postID : string,
    timestamp : number
}

export interface PostSubmission{
    title : string,
    description : string,
    content : string,
    timestamp : number
}