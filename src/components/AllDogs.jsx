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
                    <div style={{backgroundColor: 'tan', margin: '10px', borderRadius:'10px'}} key={dog.id}>
                        <h2 style={{marginTop: '15px'}}>{dog.name}</h2>
                        <img style={{height: '300px', borderRadius: '5%', margin: '10px', border: '2pt solid white'}} src={dog.imageUrl}/>
                        <br></br>
                        <button style={{margin: '5px'}} onClick={() => {navigate(`/${dog.id}`);}}>Player Details</button>
                        <br></br>
                        <button style={{marginBottom: '15px'}} onClick={async () => {await removeDog(dog.id); navigate('/')}}>Remove Player</button>
                    </div>
                )
            })}
        </div>
    )
};

