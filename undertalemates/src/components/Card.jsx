import React from 'react';
import { Link } from "react-router-dom";

const Card = ({userName, character, age, mood}) => {
    return (
        <Link className='card-link' to={`/undertalemates/gallery/${userName}`} >
            <div className='card-inside-container'>
                <h2>Name: {userName}</h2>
                <h2>Character: {character}</h2>
                <h2>Age: {age}</h2>
                <h2>Mood: {mood}</h2>
            </div>
        </Link>
    )
}

export default Card;