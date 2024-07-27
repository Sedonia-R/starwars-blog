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
							<p className="text-white">Star Wars is an American epic space opera media franchise created by George Lucas, which began with the eponymous 1977 film[a] and quickly became a worldwide pop culture phenomenon. The franchise has been expanded into various films and other media, including television series, video games, novels, comic books, theme park attractions, and themed areas, comprising an all-encompassing fictional universe.[b] Star Wars is one of the highest-grossing media franchises of all time.

The original 1977 film, retroactively subtitled Episode IV: A New Hope, was followed by the sequels Episode V: The Empire Strikes Back (1980) and Episode VI: Return of the Jedi (1983), forming the original Star Wars trilogy. Lucas later returned to the series to write and direct a prequel trilogy, consisting of Episode I: The Phantom Menace (1999), Episode II: Attack of the Clones (2002), and Episode III: Revenge of the Sith (2005). In 2012, Lucas sold his production company to Disney, relinquishing his ownership of the franchise. This led to a sequel trilogy, consisting of Episode VII: The Force Awakens (2015), Episode VIII: The Last Jedi (2017), and Episode IX: The Rise of Skywalker (2019).

All nine films, collectively referred to as the "Skywalker Saga", were nominated for Academy Awards, with wins going to the first two releases. Together with the theatrical live action "anthology" films Rogue One (2016) and Solo (2018), the combined box office revenue of the films equated to over US$10 billion, making Star Wars the third-highest-grossing film franchise of all time.</p>
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