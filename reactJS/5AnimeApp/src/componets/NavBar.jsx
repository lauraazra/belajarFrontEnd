import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="nav-bar">
      <div className="logo">
        <span role="img">🍥</span>
        <h1>Farrel WeeBoo</h1>
        <span role="img">🍥</span>
      </div>
      <ul className="nav-links">
        <li>
          <NavLink to="/" className="nav-item" end>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/CharacterList" className="nav-item">
            Character
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
