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

        else if (entry.age < 0) {
            alert('The age needs to be a positive number.');
        }

        else if (entry.mood == null) {
            alert('Please, fill out your mood.');
        }

        else {
            await supabase
            .from('Undertalemates')
            .insert({name: entry.name, character: entry.character, age: entry.age, mood: entry.mood})
            .select();

            window.location = "/web102-undertalemates/gallery";
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
                    <option value='Annoying Dog'>Annoying Dog</option>
                    <option value='Temmie'>Temmie</option>
                    <option value='Asgore'>Asgore</option>
                </select>

                <label htmlFor='age'>Age: </label>
                <input className="create-char-input" name='age' type='number' onChange={handleChange}></input>

                <label htmlFor='mood'>Mood: </label>
                <input className="create-char-input"
                        name='mood' 
                        type='text' 
                        onChange={handleChange}
                ></input>

                <button className='create-btn' type='submit'>Create Undertale-<i>mate</i></button>
            </form>
            
        </div>
    )
}

export default CreateScreen;
