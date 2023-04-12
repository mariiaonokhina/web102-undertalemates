import React from 'react';
import { Link } from "react-router-dom";

const Card = ({userName, character, age, mood}) => {
    const images = {
        'Frisk': 'frisk.png', 
        'Chara': 'chara.png', 
        'Flowey': 'flowey.png', 
        'Toriel': 'toriel.png', 
        'Sans': 'sans.png', 
        'Papyrus': 'papyrus.png', 
        'Napstablook': 'napstablook.webp', 
        'Asriel': 'asriel.png', 
        'Annoying Dog': 'annoying_dog.png', 
        'Temmie': 'temmie.webp', 
        'Asgore': 'asgore.png'
    };

    return (
        <div className='card-inside-container'>
            <img className='char-img-small' src={images[character]}></img>
            <h3 className='card-item'>Name: {userName}</h3>
            <h3 className='card-item'>Character: {character}</h3>
            <h3 className='card-item'>Age: {age}</h3>
            <h3 className='card-item'>Mood: {mood}</h3>
            <div className='action-div'>
                <Link className='card-link-details link-item' to={`/undertalemates/gallery/${userName}`} >View details</Link>
                <Link className='card-link-edit link-item' to={`/undertalemates/gallery/${userName}/edit`} >Edit</Link>
            </div>
        </div>
    )
}

export default Card;