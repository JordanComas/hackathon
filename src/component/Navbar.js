import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <header className="navbar">
        <h1 className="title">Hackathon Restaraunt</h1>
        <nav className="navitems">
          <Link className="links" to="/about">
            About Us
          </Link>
          <Link className="links" to="/contact">
            Contact
          </Link>
          <Link className="links" to="/RecipeDetails">
            Recipe
          </Link>

        </nav>
      </header>
    </div>
  );
};

export default Navbar;
