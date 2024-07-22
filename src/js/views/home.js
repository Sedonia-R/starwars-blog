import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Characters } from "../component/Characters";
import { Planets } from "../component/Planets";

export const Home = () => (
	<div className="bg-dark">
		<div className="p-5">
			<h1 className="text-warning">Characters</h1>
			<Characters/>
			<p className="m-6">" "</p>
			<h1 className="text-warning mt-20px">Planets</h1>
			<Planets />
		</div>
	</div>
);
