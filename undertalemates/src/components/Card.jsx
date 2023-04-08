import React from 'react';

const Card = ({userName, character, age, mood}) => {
    return (
        <div className='card'>
            <h2>Name: {userName}</h2>
            <h2>Character: {character}</h2>
            <h2>Age: {age}</h2>
            <h2>Mood: {mood}</h2>
        </div>
    )
}

export default Card;