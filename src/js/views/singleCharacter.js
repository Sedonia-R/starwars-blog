import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";

export const SingleCharacter = (props) => {
	const { store, actions } = useContext(Context);
	return (
		<>
			<div className="container-fluid top-banner">
				<div className="row justify-contents-center ml-2 mr-2 bg-secondary">
					<img src={`https://starwars-visualguide.com/assets/img/characters/${store.person.uid}.jpg`} className="col-4 picture" alt="..." />
						<div className="col-8 pt-4 pb-4 border-start border-warning">
							<h1 className="text-warning">{store.person.properties.name}</h1>
							<p className="text-white">Luke Skywalker is a fictional character in the Star Wars franchise. He was introduced in the original film trilogy and also appears in the sequel trilogy. Raised as a moisture farmer on the planet Tatooine, Luke joins the Rebel Alliance and becomes a pivotal figure in the struggle against the Galactic Empire. He trains as a Jedi under Obi-Wan Kenobi and Yoda, and eventually confronts his father, the Sith Lord Darth Vader. Years later, Luke trains his nephew Ben Solo and mentors the scavenger Rey. Luke is the twin brother of Leia Organa.</p>
						</div>
				</div>
			</div>
			<div className="row container-fluid single-details">
				<div className="col-2 text-warning">
					BIRTH YEAR
					<p className="text-white">
						{store.person.properties.birth_year}
					</p>
				</div>
				<div className="col text-warning border-start border-secondary">
					EYE COLOR
					<p className="text-white">
						{store.person.properties.eye_color}
					</p>
				</div>
				<div className="col text-warning border-start border-secondary">
					HAIR COLOR
					<p className="text-white">
						{store.person.properties.hair_color}
					</p>
				</div>
				<div className="col text-warning border-start border-secondary">
					GENDER
					<p className="text-white">
						{store.person.properties.gender}
					</p>
				</div>
				<div className="col text-warning border-start border-secondary">
					HEIGHT
					<p className="text-white">
						{store.person.properties.height}
					</p>
				</div>
				<div className="col text-warning border-start border-secondary">
					MASS
					<p className="text-white">
						{store.person.properties.mass}
					</p>
				</div>
				<div className="col text-warning border-start border-secondary">
					SKIN COLOR
					<p className="text-white">
						{store.person.properties.skin_color}
					</p>
				</div>
			</div>
		</>
	);
};