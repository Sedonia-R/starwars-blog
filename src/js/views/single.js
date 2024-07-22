import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	return (
		<>
			<div className="container-fluid top-banner">
				<div className="row justify-contents-center mt-3 ml-2 mr-2 bg-secondary">
					<img src="https://starwars-visualguide.com/assets/img/characters/1.jpg" className="col-4 picture" alt="..." />
						<div className="col-8 pt-4 pb-4 border-start border-warning">
							<h1 className="text-warning">Luke Skywalker</h1>
							<p className="text-white">Luke Skywalker is a fictional character in the Star Wars franchise. He was introduced in the original film trilogy and also appears in the sequel trilogy. Raised as a moisture farmer on the planet Tatooine, Luke joins the Rebel Alliance and becomes a pivotal figure in the struggle against the Galactic Empire. He trains as a Jedi under Obi-Wan Kenobi and Yoda, and eventually confronts his father, the Sith Lord Darth Vader. Years later, Luke trains his nephew Ben Solo and mentors the scavenger Rey. Luke is the twin brother of Leia Organa.</p>
						</div>
					{/* <h1 className="display-4 text-warning">This will show the demo element: {store.demo[params.theid].title}</h1> */}
				</div>
			</div>
			<div className="row container-fluid single-details">
				<div className="col-2 text-warning">
					APPEARANCES
					<ul className="text-wrap single-links p-0 text-white">
						<li>Star Wars: Episode III Revenge of the Sith,</li>
						<li>Star Wars: Episode VI A New Hope,</li>
						<li>Star Wars: Episode V The Empire Strikes Back,</li>
					</ul>
				</div>
				<div className="col text-warning border-start border-secondary">AFFILIATIONS</div>
				<div className="col text-warning border-start border-secondary">LOCATIONS</div>
				<div className="col text-warning border-start border-secondary">GENDER</div>
				<div className="col text-warning border-start border-secondary">DIMENSIONS</div>
				<div className="col text-warning border-start border-secondary">SPECIES</div>
				<div className="col text-warning border-start border-secondary">VEHICLES</div>
				<div className="col text-warning border-start border-secondary">WEAPONS</div>
				<div className="col text-warning border-start border-secondary">TOOLS</div>
			</div>
		</>
	);
};

Single.propTypes = {
	match: PropTypes.object
};
