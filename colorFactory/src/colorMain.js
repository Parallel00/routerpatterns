import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function ColMain({ color }){
	return(
		<div className="Colors">
			<Link to="/colors/new">Add color</Link>
			<ul>
			{color.map(col => (
				<li>
					<Link to={`/color/${col.name}`}>{col.name}</Link>
				</li>
			))}
			</ul>
		</div>
	);
}

export default ColMain;