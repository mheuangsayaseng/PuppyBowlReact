import React, { useState } from "react";
import { newPlayer } from "../api";
import { useNavigate } from "react-router-dom";

export default function NewDogForm() {
    const [newName, setNewName] = useState("");
    const [newBreed, setNewBreed] = useState("");
    const navigate = useNavigate();

    return (
        <div>
            <h2>Add your puppy to the team!</h2>
            <br></br>
            <form onSubmit={async (e)=>{
                e.preventDefault();
                await newPlayer(newName, newBreed);
                navigate('/');
                }}>

                <label>Name:</label>
                <input type="text" onChange={(e) => setNewName(e.target.value)}/>
                <label>Breed:</label>
                <input type="text" onChange={(e) => setNewBreed(e.target.value)}/>
                <button>Join!</button>
            </form>
        </div>
    )
}