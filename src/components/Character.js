import React from 'react';
import "./Character.css"

function Character({ SimpsonCharacter }) {
    return (
        SimpsonCharacter && (
            <div>
                <img src={SimpsonCharacter.image} alt={SimpsonCharacter.character} />
                <h1>{SimpsonCharacter.character}</h1>
                <p>{SimpsonCharacter.quote}</p>
            </div>
        )
    );
}

export default Character;
