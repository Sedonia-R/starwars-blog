import React, { useContext } from "react";
import { Link } from "react-router-dom";
import star_wars_logo from "../../img/starWarsLogo.png";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
    const handleClick = (favoriteData) => {
        actions.removeFavorite(favoriteData);
    }

	return (
		<nav className="navbar navbar-light bg-black">
			<img className="img-fluid m-4" alt="Star Wars Logo" src={star_wars_logo}/>
			<div className="m-4">
				<div className="dropdown">
					<button className="btn btn-warning text-black dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
						Favorites
					</button>
					<ul className="dropdown-menu dropdown-menu-end">
						<button className="dropdown-item favorites" type="button">
                        {store.favorites.map(favorite => {
                            return (
								<li>
									{favorite}
										<i className="fas fa-trash-alt" 
											onClick={
												() => {
													handleClick(`${favorite.uid}`);
												}
											}
										>
										</i>
								</li>
							)
                        })}
						</button>
					</ul>
				</div>
			</div>
		</nav>
	);
};
