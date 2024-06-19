import React from 'react';

const AnimalProfile = ({animal}) => {
    
    const { name, type, age, description, image } = animal;

    return (
        <div className="animal-profile">
            <img src={image} alt={name} />
            <h2>{name}</h2>
            <p>Type: {type}</p>
            <p>Age: {age}</p>
            <p>Description: {description}</p>
        </div>
    );
};

export default AnimalProfile;
