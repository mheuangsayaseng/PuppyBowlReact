import { useState } from 'react';

const Finder = (props) => {
    
    const [pokemonName, setPokemonName] = useState("");

    return (
        <div className="finder">
            <h1>Search for your favorite Puppy!</h1>
            <input type="text" onChange={(event) => {setPokemonName(event.target.value)}}/>
            <button>Search Player</button>
        </div>
    );
};

export default Finder;  