import React from 'react';

const Character = ({character}) => {
    const {name, surname, age, info, photo} = character;
    return (
        <div>
            <h2>{name} {surname}</h2>
            <span>{age}</span>
            <p>{info}</p>
            <img src={photo} alt={name}/>
        </div>
    );
};

export default Character;