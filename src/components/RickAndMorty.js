import React from 'react';

const RickAndMorty = ({character}) => {
    const {id, name, status, species, gender, image} = character;
    return (
        <div>
            <h2>{name}</h2>
            <span>{id}</span>
            <b>{status}</b>
            <i>{species}</i>
            <p>{gender}</p>
            <img src={image} alt={name}/>
        </div>
    );
};

export default RickAndMorty;