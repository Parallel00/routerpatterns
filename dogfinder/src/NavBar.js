import { NavLink } from "react-router-dom";

function NavBar({ dg }) {
  return (
    <nav>
      <NavLink to="/dogs" end>
        Home
      </NavLink>
      {dg.map(dog => (
        <NavLink 
          key={dg.name} 
          to={`/dogs/${dg.name.toLowerCase()}`} 
        >
          {dg.name}
        </NavLink>
      ))}
    </nav>
  );
}

export default NavBar;

