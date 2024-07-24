import React, { useContext, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { Context } from '../store/appContext';

export const Characters = () => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();
    const handleClick = (personData) => {
        actions.setPerson(personData);

    }

    return (
        <div className="card-group card-group-scroll">   
            {store.people.map((person, index) => {
                return (
                    <div className="card p-2 rounded" key={index}>
                        <img 
                            src={`https://starwars-visualguide.com/assets/img/characters/${person.uid}.jpg`} 
                            className="card-img-top" 
                            alt={`Picture of character ${person.properties.name}`}
                            onError={event => {
                                event.target.src = "https://starwars-visualguide.com/assets/img/big-placeholder.jpg"
                                event.onerror = null
                            }}
                        />
                        <div className="card-body">
                            <h5 className="card-title"><strong>{person.properties.name}</strong></h5>
                            <ul className="card-text">
                                <li>Birth Year: {person.properties.birth_year}</li>
                                <li>Height: {person.properties.height}</li>
                                <li>Mass: {person.properties.mass}</li>
                            </ul>
                            <div className="row">
                                <button 
                                    className='btn btn-primary col-6 m-auto'
                                    onClick={
                                        () => {
                                            handleClick(`${person.uid}`);
                                            navigate(`/singleCharacter/${person.uid}`)
                                        }
                                    }
                                >
                                    Learn more!
                                </button>
                                <button className='btn btn-black col-2 m-auto p-auto border border-warning'>💛</button>
                            </div>
                        </div>
                    </div>
                    )
                })}
        </div>
    );
};