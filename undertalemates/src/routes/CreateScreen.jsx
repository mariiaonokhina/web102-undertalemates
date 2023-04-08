import React, { Component, useEffect, useState } from "react";

const CreateScreen = () => {

    return (
        <div className="create-screen-container">
            <h1>Create a New Undertale-<i>mate</i></h1>
            <img className='create-screen-img' src='child-all-views.png'></img>
            <div className='form-container'>
                <form>
                    <label for='name'>Name: </label>
                    <input className="create-char-input"name='name' type='text'></input>
                </form>

                <form>
                    <label for='character'>Character: </label>
                    <select className="create-char-input" name='character'>
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
                </form>

                <form>
                    <label for='age'>Age: </label>
                    <input className="create-char-input" name='age' type='number'></input>
                </form>

                <form>
                    <label>Mood: </label>
                    <input className="create-char-input"
                            name='mood' 
                            type='text' 
                            placeholder="Angry, happy, etc..." 
                    ></input>
                </form>
            </div>

            <button className='create-btn'>Create Undertale-<i>mate</i></button>
            
        </div>
    )
}

export default CreateScreen;
