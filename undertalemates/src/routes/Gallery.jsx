import React, { Component, useEffect, useState } from "react";
import Card from "../components/Card";
import {supabase} from '../client';

const Gallery = () => {
    const [entries, setEntries] = useState([]);

    const fetchPosts = async () => {
        const {data} = await supabase
        .from('Undertalemates')
        .select()
    
        // set state of posts
        setEntries(data);
    }

    useEffect(() => {
        fetchPosts();
    }, [])

    return (
        <div className="gallery-screen-container">
                <h1 id='gallery-title'>Gallery</h1>
                {entries.length == 0? <h1>¯\_(ツ)_/¯ <br></br> Nothing yet</h1>: ''}

                <div className="gallery-card-container">
                    {entries && Object.entries(entries).map(([entry]) => 
                        <Card key={entries[entry].name} userName={entries[entry].name} character={entries[entry].character} age={entries[entry].age} mood={entries[entry].mood} />
                    )}
                    
                </div>
        </div>
    )
}

export default Gallery;
