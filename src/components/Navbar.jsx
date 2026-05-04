import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="top-nav">
      <div className="nav-inner">
        <div className="logo-box">
          <Link to="/" onClick={closeMenu}>
            <img src="/logo.png" alt="Chicken Hut logo" />
          </Link>
        </div>

        <button
          className="menu-toggle"
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          ☰
        </button>

        <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
          <NavLink to="/contact" className="order-btn" onClick={closeMenu}>
            Order Online
          </NavLink>
          <NavLink to="/about" onClick={closeMenu}>
            About us
          </NavLink>
          <NavLink to="/menu" onClick={closeMenu}>
            Menu
          </NavLink>
          <NavLink to="/login" onClick={closeMenu}>
            Login
          </NavLink>
          <NavLink to="/register" onClick={closeMenu}>
            Register
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
