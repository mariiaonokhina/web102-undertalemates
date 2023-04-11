import React from 'react';
import { Link } from "react-router-dom";

const Card = ({userName, character, age, mood}) => {
    return (
        <div className='card-outside-container'>
            
            <div className='card-inside-container'>
                <h2>Name: {userName}</h2>
                <h2>Character: {character}</h2>
                <h2>Age: {age}</h2>
                <h2>Mood: {mood}</h2>
            </div>
            
            <div className='action-div'>
                <Link className='card-link-details' to={`/undertalemates/gallery/${userName}`} >View details</Link>
                <Link className='card-link-edit' to={`/undertalemates/gallery/${userName}/edit`} >Edit</Link>
            </div>
        </div>
    )
}

export default Card;