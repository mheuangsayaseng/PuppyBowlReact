import React from "react";
import {useState, useEffect} from "react";
import { fetchSingleDog } from "../api";
import { useParams } from "react-router-dom";

export default function SingleDog() {
    const [singlePlayer, setSinglePlayer] = useState({});
    const {dogId} = useParams ();

    useEffect(() => {
        async function playerDetails(){
            setSinglePlayer(await fetchSingleDog(dogId));
        }
        playerDetails()
    },[]);

    return (
        <div>
            <h2>ID NO. {singlePlayer.id}</h2>
            <img style={{height: '300px', borderRadius: '5%', margin: '5px'}} src={singlePlayer.imageUrl}/>
            <h2>Name: {singlePlayer.name}</h2>
            <h2>Breed: {singlePlayer.breed}</h2>
        </div>
    )
}

