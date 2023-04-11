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

    return (
        <div className="detail-container">
            {fullDetails != null? 
                <div className="details-inner-wrapper">
                    <h1 id='details-name'>{fullDetails.name}</h1>
                    <h2 id='details-character'>{fullDetails.character}</h2>
                    <h2 id='details-age'>{fullDetails.age}</h2>
                    <h2 id='details-mood'>{fullDetails.mood}</h2>
                </div>
                : ''}
        
        </div>
    )
}

export default DetailPage;
