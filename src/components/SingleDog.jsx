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
        <div className="singlePlayerCard">
            <div style={{padding: '15px', borderRadius:'10px', boxShadow: '0 4px 10px black'}} id="playerInfo">
                <h2 style={{marginTop: '10px'}}>ID NO. {singlePlayer.id}</h2>
                <img style={{height: '400px', borderRadius: '5%', margin: '10px', border: '2pt solid black'}} src={singlePlayer.imageUrl}/>
                <h2 style={{margin: '5px'}}>Name: {singlePlayer.name}</h2>
                <h2>Breed: {singlePlayer.breed}</h2>
            </div>
        </div>
    )
}

