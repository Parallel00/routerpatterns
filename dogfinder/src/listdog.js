import React from "react";
import { Link } from "react-router-dom";


function List({ dogs }) {
  return (
    <div className="List">
      <div className="row mt-4">
        <div className="col">
          <h2 className="text-center">
            These are our dogs.
          </h2>
        </div>
      </div>
      <div className="row">
        {dogs.map(dog => (
          <div className="col-3 text-center" key={dog.name}>
            <img src={`/${dog.src}.jpg`} alt={dog.name} />
            <h3 className="mt-3">
              <Link to={`/dogs/${d.name.toLowerCase()}`}>{dog.name}</Link>
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default List;
