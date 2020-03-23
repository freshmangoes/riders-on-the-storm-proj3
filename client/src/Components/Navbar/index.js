import React from "react";
import "./style.css";
import { UserLoginModal } from "../UserLoginModal/index"
import Logo from "./Logo.png"

function Nav() {
  return (
    <nav className="navbar  navbar-dark  bg-dark">
      <img src={Logo} alt="MotoWeather"></img>
      <a className="navbar-brand" href="/">
      
      </a>
      <UserLoginModal buttonLabel='Sign In / Register' />

    </nav>
  );
}

export default Nav;