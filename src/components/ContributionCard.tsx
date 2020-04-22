import React from 'react';

interface props{
    title : string,
    description : string,
    content : string, // link to the content that the user has submitted
    score : number // number of upvotes the card has (in case system gets implemented)
}

export default function ContributionCard(props : props){
    return(
        <h1>This is a contribution card... WIll be</h1>
    )
}