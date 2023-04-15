import React from "react";
import { useEffect, useState } from "react";
import { fetchDogs } from "../api";
import { removeDog } from "../api";
import { useNavigate } from "react-router-dom";

export default function AllDogs() {
    const navigate = useNavigate();
    const [dogs, setDogs] = useState([]);

    useEffect(() => {
        async function getDogs() {
            const dogList = await fetchDogs();
            setDogs(dogList.data.players);
        }
        getDogs();
    }, []);

    return (
        <div className="playerCards">
            {dogs.map((dog) => {
                return (
                    <div key={dog.id}>
                        <h2>{dog.name}</h2>
                        <img style={{height: '300px', borderRadius: '5%', margin: '5px'}} src={dog.imageUrl}/>
                        <br></br>
                        <button onClick={() => {navigate(`/${dog.id}`);}}>Player Details</button>
                        <br></br>
                        <button onClick={async () =>{await removeDog(dog.id)}}>Remove Player</button>
                    </div>
                )
            })}
        </div>
    )
};