import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter } from "react-router-dom";
import SiteRoutes from "./routes";
import NavBar from "./NavBar";

function App() {
  const [dogs, setDogs] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchDogs = async () => {
      try {
        const response = await axios.get("http://localhost:5001/dogs");
        setDogs(response.data);
      } catch (error) {
        console.error("Cannot fetch data: ", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchDogs();
  }, []);

  if (isLoading) {
    return <h1>Please Wait...</h1>;
  }

  return (
    <div>
      <h1>Welcome!</h1>
      <BrowserRouter>
        <NavBar dogs={dogs} />
        <div className="container">
          <SiteRoutes dogs={dogs} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
