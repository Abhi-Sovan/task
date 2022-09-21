import React from "react";
import "../Style/Navbar.css"
import logo from "../assets/logo.svg"



const Navbar = () => {
  return (
    <>
      <div className="header">
        <nav>
          <img src={logo} alt="logo" className="logo" />
        </nav>
        <div>
          <input type="text" className="form-group-control input" placeholder="Search Movies" />
          <button className="btn new-btn" >
            <i className="fa fa-search text-white"></i>
          </button>
        </div>

      </div>
    </>


  )
}

export default Navbar;