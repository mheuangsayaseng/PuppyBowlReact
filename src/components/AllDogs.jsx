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
                    <div style={{margin: '10px', padding:'5px', borderRadius:'10px', boxShadow: '0 4px 10px black' }} key={dog.id}>
                        <h2 style={{marginTop: '15px', color: 'black'}}>{dog.name}</h2>
                        <img style={{height: '300px', borderRadius: '10px', margin: '10px', border: '1.5pt solid black'}} src={dog.imageUrl}/>
                        <br></br>
                        <button style={{margin: '5px'}} onClick={() => {navigate(`/${dog.id}`);}}>Player Details</button>
                        <br></br>
                        <button onClick={async () => {
                            await removeDog(dog.id);
                            const response = await fetchDogs();
                            if (response.success) {
                                setDogs(response.data.players);
                            } else {
                                setError(response.error);
                            }
                        }}>Remove Player</button>
                    </div>
                )
            })}
        </div>
    )
};
