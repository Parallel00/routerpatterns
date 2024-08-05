import React, { useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import ColMain from "./colorMain";
import ColAdd from "./addColor";

function SiteRoutes(){
	const [cols, setCols] = useState([
		{name: "red", color: "#ff0000"},
		{name: "green", color: "#0000ff"},
		{name: "blue", color: "#00ff00"},
	]);
	
	const colCreate = (newCol) => {
		setCols([...cols, newCol]);
	};
	
	return (
		<div className="Routes">
			<Switch>
				<Route exact to="/cols" />
					<ColMain colors={cols}>
				</Route>
				<Route exact to="/cols/new" />
					<ColAdd colCreate={colCreate} />
				</Route>
				<Route exact to="/cols/:col"></Route>
				<Redirect to="cols" />
			</Switch>
		</div>
	);
}

export default SiteRoutes;