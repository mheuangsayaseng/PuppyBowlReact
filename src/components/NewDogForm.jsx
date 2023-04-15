import React, { useState } from "react";
import { newPlayer } from "../api";

export default function NewDogForm() {
    const [newName, setNewName] = useState("");
    const [newBreed, setNewBreed] = useState("");

    return (
        <div>
            <h2>Add your puppy to the team!</h2>
            <br></br>
            <form onSubmit={async (e)=>{
                e.preventDefault();
                const newPuppy = await newPlayer(newName, newBreed);
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