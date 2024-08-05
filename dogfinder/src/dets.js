import React from "react";
import { Link, Navigate } from "react-router-dom";


function Dets({ dog }) {

  if (!dog) return <Navigate to="/dogs" />

  return (
    <div className="row Dets">
      <div className="col d-flex flex-column align-items-center">
        <img src={`/${dog.src}.jpg`} alt={dog.name} />
        <h2>Name: {dog.name}</h2>
        <h3>Age: {dog.age}</h3>
        <ul>
          {dog.facts.map((fact, i) => (
            <li key={i}>Fun fact about {dog.name}: {fact}</li>
          ))}
        </ul>
        <Link to="/dogs">Back</Link>
      </div>
    </div>
  );
}

export default Dets;
