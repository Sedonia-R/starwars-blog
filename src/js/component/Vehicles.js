import React, { useContext, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { Context } from '../store/appContext';

export const Vehicles = () => {
    const navigate = useNavigate();
    const { store, actions } = useContext(Context);

    return (
        <div className="card-group card-group-scroll">   
            {store.vehicles.map((vehicle, index) => {
                return (
                    <div className="card p-2 rounded" key={index}>
                        <img 
                            src={`https://starwars-visualguide.com/assets/img/vehicles/${vehicle.uid}.jpg`} 
                            className="card-img-top" 
                            alt={`Picture of vehicle ${vehicle.properties.name}`}
                            onError={event => {
                                event.target.src = "https://starwars-visualguide.com/assets/img/big-placeholder.jpg"
                                event.onerror = null
                            }}
                        />
                            <div className="card-body">
                        <h5 className="card-title"><strong>{vehicle.properties.name}</strong></h5>
                        <ul className="card-text">
                            <li>Model: {vehicle.properties.model}</li>
                            <li>Manufacturer: {vehicle.properties.manufacturer}</li>
                            <li>Class: {vehicle.properties.vehicle_class}</li>
                        </ul>
                        <div className="row">
                            <button 
                                className='btn btn-primary col-6 m-auto'
                                onClick={
                                    () => navigate(`/singleCharacter/${vehicle.uid}`)
                                }
                            >
                                Learn more!
                            </button>
                            <button className='btn btn-black col-2 m-auto p-auto border border-warning'>💛</button>
                        </div>
                    </div>
                </div>
            )})}
        </div>
    );
};