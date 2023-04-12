import React from "react";
import { useEffect, useState } from "react";
import { fetchDogs } from "../api";
// import { useNavigate } from "react-router-dom";

export default function AllDogs() {

    // const navigate = useNavigate();

    const [dogs,setDogs] = useState([]);

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
                    <h3 key={dog.id}>{dog.name}
                    <img src={dog.imageUrl} alt="puppyPic"></img></h3>
                )
            })}
        </div>
    )

};
