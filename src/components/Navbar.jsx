import React from "react";
import { FaCartPlus, FaUserPlus, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";


const Navbar = () => {
  const stateItems = useSelector((state) => state.cart);
  // console.log(stateItems)

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-white  shadow-sm mt-1">
        <div className="container">
          <Link className="navbar-brand " to="/">
            Shop-Hub
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0 fw-bold">
              <li className="nav-item">
                <Link className="nav-link " aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/products">
                  Product
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " aria-current="page" to="/contact">
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " aria-current="page" to="/About">
                  About
                </Link>
              </li>
            </ul>
            <div className="buttons">
              <Link to="/login" className="btn btn-outline-dark ms-2 ">
                {" "}
                <FaUser className="me-1 p3" />
                Login
              </Link>
              <Link to="/register" className="btn btn-outline-dark ms-2 ">
                {" "}
                <FaUserPlus className="me-1 p4" />
                Resigter
              </Link>
              <Link to="/cart" className="btn btn-outline-success  ms-2">
                {" "}
                <FaCartPlus className="me-1" />
                Cart ({stateItems.length})
              </Link>
            </div>
          </div>
        </div>
      </nav>
              
    </div>
  );
};

export default Navbar;
