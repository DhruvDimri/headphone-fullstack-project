import React from "react";
import "./navbar.css";
import { useNavigate, useLocation, Link, NavLink } from "react-router-dom";



const Navbar = () => {

    const location = useLocation();
    const navigate = useNavigate();
    async function handleSubmit() {
      try {
        const response = await fetch("https://headphone-fullstack-project-1.onrender.com/users/logout", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        });

        if (response.ok) {
          console.log("Logout successfully");
          alert('Logged out successfully')
          navigate("/login");
        } else {
          alert('Logout failed')
          console.log('logout failed because of backend')
        }
      } catch (error) {
        console.log("Error h fetch mai", error.message);
        alert('Logout failed due to network error')
      }
    };
    

  return (
    <nav className={location.pathname === "/registration" || location.pathname === "/login" || location.pathname === "/" ? "navigation-display" :  "navbar navbar-expand-lg py-3 navigation"}>
      <div className="container">
        <Link className="navbar-brand logo text-uppercase" to="/about">
          Brand
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/home">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                About Us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/product">
                Products
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">
                Contact
              </NavLink>
            </li>
            <li className="nav-item">
              <Link className="btn btn-outline-success fw-bold" onClick={handleSubmit}>
                Logout
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
