import React from "react";
import logo from "../../assets/img/logo.png";
import "../header/index.css";

const Header = () => {
  return (
    <div className="container-fluid">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <img src={logo} className="logo" alt="logo" />
        <div className="m-1 ms-auto">
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav right-nav text-black">
              <a className="nav-item nav-link mx-2" href="#">
                Home
              </a>
              <a className="nav-item nav-link mx-2" href="#">
                Services
              </a>
              <a className="nav-item nav-link mx-2" href="#">
                About us
              </a>
              <a className="nav-item nav-link mx-2 ">Extra salsepage</a>
              <button className="btn navbar-button mx-2">
                Get your free guid now
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
