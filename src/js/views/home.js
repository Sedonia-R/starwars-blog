import React from "react";
import "../../styles/home.css";
import { Characters } from "../component/Characters";
import { Planets } from "../component/Planets";
import { Navbar } from "../component/navbar";
import { Vehicles } from "../component/Vehicles";

export const Home = () => (
	<>
		<Navbar />
		<div className="bg-dark">
			<div className="p-5 flex-nowrap container">
				<h1 className="text-warning">Characters</h1>
				<Characters/>
				<p className="m-6">" "</p>
				<h1 className="text-warning mt-20px">Planets</h1>
				<Planets />
				<p className="m-6">" "</p>
				<h1 className="text-warning mt-20px">Vehicles</h1>
				<Vehicles />
			</div>
		</div>
	</>
);
