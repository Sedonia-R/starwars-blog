import React from "react";
import { Link } from "react-router-dom";
import star_wars_logo from "../../img/starWarsLogo.png";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-black">
			<img className="img-fluid m-4" alt="Star Wars Logo" src={star_wars_logo}/>
			<div className="m-4">
				<div className="dropdown">
					<button className="btn btn-warning text-black dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
						Favorites
					</button>
					<ul className="dropdown-menu dropdown-menu-end">
						<li><button className="dropdown-item" type="button">Favorites ❤️</button></li>
					</ul>
				</div>
			</div>
		</nav>
	);
};
