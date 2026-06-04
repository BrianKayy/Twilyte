import { useState } from "react";
import { NavLink } from "react-router-dom";
import twlyt from './images/twlyt.jpeg';
import { Menu, X } from "lucide-react";
import "./index.css";

function Navbar() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header className="navbar">
      <div className="nav-container">

        <NavLink to="/" className="logo">
          <img
            src={twlyt}
            alt="twlyt Logo"
          />
          <h2>
            Twi<span>lyte</span>
          </h2>
        </NavLink>

        <nav className={`nav-links ${open ? "active" : ""}`}>
          <NavLink to="/" onClick={closeMenu}>
            Home
          </NavLink>

          <NavLink to="/services" onClick={closeMenu}>
            Services
          </NavLink>

          <NavLink to="/contact" onClick={closeMenu}>
            Contact
          </NavLink>
        </nav>

        <button
          className="menu-btn"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
    </header>
  );
}

export default Navbar;