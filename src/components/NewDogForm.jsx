import React, { useState } from "react";
import { newPlayer } from "../api";
import { useNavigate } from "react-router-dom";

export default function NewDogForm() {
    const [newName, setNewName] = useState("");
    const [newBreed, setNewBreed] = useState("");
    const navigate = useNavigate();

    return (
        <div className="newPlayerForm">
            <img style={{height:'200px'}} src="https://cdn.shopify.com/s/files/1/1061/1924/products/Dog_Emoji_large.png?v=1571606065" />
            <h2 style={{marginBottom: '50px'}}>Add your favorite puppy to the team!</h2>
            <div id="playerInput">
                <form onSubmit={async (e)=> {
                    e.preventDefault();
                    await newPlayer(newName, newBreed);
                    navigate('/AllDogs');
                }}>
                    <label>Name:</label>
                    <input type="text" onChange={(e) => setNewName(e.target.value)}/>
                    <label>Breed:</label>
                    <input type="text" onChange={(e) => setNewBreed(e.target.value)}/>
                </form>
                <br></br>
                <button id="joinTeam" style={{width:'150px'}}>Let's Go!</button>
            </div>
        </div>
    )
}