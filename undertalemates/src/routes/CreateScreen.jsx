import React, { Component, useEffect, useState } from "react";
import { supabase } from '../client'

const CreateScreen = () => {
    const [entry, setEntry] = useState(null);

    const createEntry = async (event) => {
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

        else if (entry.mood == null) {
            alert('Please, fill out your mood.');
        }

        else {
            entry.mood == entry.mood.toLowerCase();

            await supabase
            .from('Undertalemates')
            .insert({name: entry.name, character: entry.character, age: entry.age, mood: entry.mood})
            .select();

            window.location = "/undertalemates/";
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

    return (
        <div className="create-screen-container">
            <h1>Create a New Undertale-<i>mate</i></h1>
            <img className='create-screen-img' src='child-all-views.png'></img>

            <form className='form-container' onSubmit={createEntry}>
                <label htmlFor='name'>Name: </label>
                <input className="create-char-input" name='name' type='text' onChange={handleChange}></input>

                <label htmlFor='character'>Character: </label>
                <select className='create-char-input' name='character' onChange={handleChange} defaultValue={'none'}>
                    <option value='none' disabled hidden>Select a character</option>
                    <option value='frisk'>Frisk</option>
                    <option value='chara'>Chara</option>
                    <option value='flowey'>Flowey</option>
                    <option value='toriel'>Toriel</option>
                    <option value='sans'>Sans</option>
                    <option value='papyrus'>Papyrus</option>
                    <option value='napstablook'>Napstablook</option>
                    <option value='asriel'>Asriel</option>
                    <option value='mettaton'>Mettaton</option>
                    <option value='temmy'>Temmy</option>
                    <option value='asgore'>Asgore</option>
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

                <button className='create-btn' type='submit'>Create Undertale-<i>mate</i></button>
            </form>
            
        </div>
    )
}

export default CreateScreen;
