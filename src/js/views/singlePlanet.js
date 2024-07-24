import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";

export const SinglePlanet = (props) => {
	const { store, actions } = useContext(Context);

	return (
		<>
			<div className="container-fluid top-banner">
				<div className="row justify-contents-center ml-2 mr-2 bg-secondary">
					<img src={`https://starwars-visualguide.com/assets/img/planets/${store.planet.uid}.jpg`} className="col-4 picture" alt="..." />
						<div className="col-8 pt-4 pb-4 border-start border-warning">
							<h1 className="text-warning">{store.planet.properties.name}</h1>
							<p className="text-white">Luke Skywalker is a fictional character in the Star Wars franchise. He was introduced in the original film trilogy and also appears in the sequel trilogy. Raised as a moisture farmer on the planet Tatooine, Luke joins the Rebel Alliance and becomes a pivotal figure in the struggle against the Galactic Empire. He trains as a Jedi under Obi-Wan Kenobi and Yoda, and eventually confronts his father, the Sith Lord Darth Vader. Years later, Luke trains his nephew Ben Solo and mentors the scavenger Rey. Luke is the twin brother of Leia Organa.</p>
						</div>
				</div>
			</div>
			<div className="row container-fluid single-details">
				<div className="col-2 text-warning">
					DIAMETER
					<p className="text-white">
						{store.planet.properties.diameter}
					</p>
				</div>
				<div className="col text-warning border-start border-secondary">
					ROTATION PERIOD
					<p className="text-white">
						{store.planet.properties.rotation_period}
					</p>
				</div>
				<div className="col text-warning border-start border-secondary">
					ORBITAL PERIOD
					<p className="text-white">
						{store.planet.properties.orbital_period}
					</p>
				</div>
				<div className="col text-warning border-start border-secondary">
					GRAVITY
					<p className="text-white">
						{store.planet.properties.gravity}
					</p>
				</div>
				<div className="col text-warning border-start border-secondary">
					POPULATION
					<p className="text-white">
						{store.planet.properties.population}
					</p>
				</div>
				<div className="col text-warning border-start border-secondary">
					CLIMATE
					<p className="text-white">
						{store.planet.properties.climate}
					</p>
				</div>
				<div className="col text-warning border-start border-secondary">
					TERRAIN
                    <p className="text-white">
						{store.planet.properties.terrain}
					</p>
				</div>
                <div className="col text-warning border-start border-secondary">
					SURFACE WATER
                    <p className="text-white">
						{store.planet.properties.surface_water}
					</p>
				</div>
			</div>
		</>
	);
};