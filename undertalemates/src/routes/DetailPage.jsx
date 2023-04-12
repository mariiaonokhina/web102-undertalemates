import React, { Component, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {supabase} from '../client';

const DetailPage = () => {
    const [fullDetails, setFullDetails] = useState(null);
    const params = useParams();

    useEffect(() => {
        const getDetail = async () => {
            const {data} = await supabase
            .from('Undertalemates')
            .select()
            .eq('name', params.name)
        
            setFullDetails({"name": data[0].name, 
                            "character" : data[0].character, 
                            "age": data[0].age, 
                            "mood": data[0].mood});
        };

        getDetail().catch(console.error);
    }, []);
    
    const images = {
        'Frisk': '/frisk.png', 
        'Chara': '/chara.png', 
        'Flowey': '/flowey.png', 
        'Toriel': '/toriel.png', 
        'Sans': '/sans.png', 
        'Papyrus': '/papyrus.png', 
        'Napstablook': '/napstablook.webp', 
        'Asriel': '/asriel.png', 
        'Annoying Dog': '/annoying_dog.png', 
        'Temmie': '/temmie.webp', 
        'Asgore': '/asgore.png'
    };

    return (
        <div className="detail-container">
            {fullDetails != null? 
                <div className="details-inner-wrapper">
                    <h1 id='details-name'>Undertale-<i>mate</i> {fullDetails.name}</h1>
                    <h2 id='details-character'>Character: {fullDetails.character}</h2>
                    <h2 id='details-age'>Age: {fullDetails.age}</h2>
                    <h2 id='details-mood'>Mood: {fullDetails.mood}</h2>

                    {fullDetails.age < 18? 
                        <h3 className="description-h3">This undertale-<i>mate</i> is really young. Are you sure they will be able to survive in the world of monsters?</h3>
                        : <h3 className="description-h3">This undertale-<i>mate</i> is old enough to take care of itself. Good job!</h3>
                    }

                    {fullDetails.mood.toLowerCase() == 'happy' || 
                    fullDetails.mood.toLowerCase() == 'good' || 
                    fullDetails.mood.toLowerCase() == 'wonderful' || 
                    fullDetails.mood.toLowerCase() == 'amazing' || 
                    fullDetails.mood.toLowerCase() == 'content' || 
                    fullDetails.mood.toLowerCase() == 'silly'? 
                        <h3 className="description-h3">Happiness of undertale-<i>mates</i> is key to their success. {fullDetails.name}'s mood is amazing. Who made you smile like that?</h3>
                        : <h3 className="description-h3">Unhappy or worried undertale-<i>mates</i> tend to get into fights more often. Would you like to rest and have some snack, so you can continue your journey tomorrow?</h3>
                    }

                    <img className='char-img-big' src={images[fullDetails.character]}></img>
                </div>
                : ''}
        
        </div>
    )
}

export default DetailPage;
