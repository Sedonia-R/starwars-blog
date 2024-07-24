import React, { useContext, useEffect } from 'react';
import { Context } from '../store/appContext';
import { useNavigate } from 'react-router';

export const Planets = () => {
    const {store, actions} = useContext(Context);
    const handleClick = (planetData) => {
        actions.setPlanet(planetData);
    }
    const navigate = useNavigate();

    return (
            <div className="card-group card-group-scroll">
                {store.planets.map((planet, index) => {
                    return (
                        <div className="card p-2 rounded" style={{minWidth: "18rem", minHeight: "20rem"}} key={index}>
                            <img 
                                src={`https://starwars-visualguide.com/assets/img/planets/${planet.uid}.jpg`} 
                                className="card-img-top" 
                                alt={`Picture of planet ${planet.properties.name}`}
                                onError={event => {
                                    event.target.src = "https://starwars-visualguide.com/assets/img/big-placeholder.jpg"
                                    event.onerror = null
                                }}
                            />
                            <div className="card-body">
                                <h5 className="card-title"><strong>{planet.properties.name}</strong></h5>
                                <ul className="card-text">
                                    <li>Population: {planet.properties.population}</li>
                                    <li>Terrain: {planet.properties.terrain}</li>
                                    <li>Climate: {planet.properties.climate}</li>
                                </ul>
                                <div className="row">
                                    <button 
                                        className='btn btn-primary col-6 m-auto'
                                        onClick={
                                            () => {
                                                handleClick(`${planet.uid}`);
                                                navigate(`/singlePlanet/${planet.uid}`)
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