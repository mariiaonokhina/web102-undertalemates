import React, { Component, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {supabase} from '../client';

const EditPage = () => {
    const [details, setDetails] = useState(null);
    const [entry, setEntry] = useState(null);
    const params = useParams();

    const getDetail = async () => {
        const { data, error } = await supabase
        .from('Undertalemates')
        .select()
        .eq('name', params.name)
    
        setDetails({"name": data[0].name, 
                    "character": data[0].character, 
                    "age": data[0].age, 
                    "mood": data[0].mood});
        
        getDetail().catch(error);
    };

    useEffect(() => {
        getDetail();
    }, [])

    const updateEntry = async (event) => {
        event.preventDefault();

        // Some error checking
        if (entry == null) {
            alert('Please, fill out all the fields below.');
        }

        else if (entry.name == null) {
            alert('Please, fill out your name.');
        }

        else if (entry.character == null) {
            alert('Please, choose a character.');
        }

        else if (entry.age == null) {
            alert('Please, fill out your age.');
        }

        else if (entry.age < 0) {
            alert('The age needs to be a positive number.');
        }

        else if (entry.mood == null) {
            alert('Please, fill out your mood.');
        }

        else {
            await supabase
            .from('Undertalemates')
            .update({name: entry.name, character: entry.character, age: entry.age, mood: entry.mood})
            .eq('name', `${details.name}`)
            .select()

            setDetails({name: entry.name, character: entry.character, age: entry.age, mood: entry.mood})

            window.location = "/undertalemates/gallery";
        }
    }

    const handleChange = (event) => {
        setEntry({...entry, 
            [event.target.name]: event.target.value,
            [event.target.character]: event.target.value, 
            [event.target.age]: event.target.value, 
            [event.target.mood]: event.target.value
        })
    }

    const deleteEntry = async() => {
        const { error } = await supabase
        .from('Undertalemates')
        .delete()
        .eq('name', `${details.name}`)

        window.location = "/undertalemates/gallery";
    }

    return (
        <div className="edit-container">
            {details != null? 
                <div className="edit-inner-wrapper">
                    <h1>Edit Your Undertale-<i>mate</i></h1>

                    <div className="curr-info-wrapper">
                        <h2>Current Info:</h2>
                        <h2>Name: {details.name}, Character: {details.character}, Age: {details.age}, Mood: {details.mood}</h2>
                    </div>

                    <form className='form-container' onSubmit={updateEntry}>
                        <label htmlFor='name'>Name: </label>
                        <input className="create-char-input" name='name' type='text' onChange={handleChange}></input>

                        <label htmlFor='character'>Character: </label>
                        <select className='create-char-input' name='character' onChange={handleChange} defaultValue={'None'}>
                            <option value='None' disabled hidden>Select a character</option>
                            <option value='Frisk'>Frisk</option>
                            <option value='Chara'>Chara</option>
                            <option value='Flowey'>Flowey</option>
                            <option value='Toriel'>Toriel</option>
                            <option value='Sans'>Sans</option>
                            <option value='Papyrus'>Papyrus</option>
                            <option value='Napstablook'>Napstablook</option>
                            <option value='Asriel'>Asriel</option>
                            <option value='Mettaton'>Mettaton</option>
                            <option value='Temmy'>Temmy</option>
                            <option value='Asgore'>Asgore</option>
                        </select>

                        <label htmlFor='age'>Age: </label>
                        <input className="create-char-input" name='age' type='number' onChange={handleChange}></input>

                        <label htmlFor='mood'>Mood: </label>
                        <input className="create-char-input"
                                name='mood' 
                                type='text' 
                                placeholder="Angry, happy, etc..." 
                                onChange={handleChange}
                        ></input>

                        <div className="update-btn-div">
                            <button className='update-btn' type='submit'>Update Undertale-<i>mate</i></button>
                            <button className='delete-btn' type='button' onClick={deleteEntry}>Delete Undertale-<i>mate</i></button>
                        </div>
                    </form>
                </div>
                : ''}
        </div>
    )
}

export default EditPage;
