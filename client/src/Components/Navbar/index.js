import React from "react";
import "./style.css";
import { UserLoginModal } from "../UserLoginModal/index"

function Nav() {
  return (
    <nav className="navbar  navbar-dark  bg-dark">
      <a className="navbar-brand" href="/">
        Riders on the Storm
      </a>
      <UserLoginModal buttonLabel='Sign In / Register' />

    </nav>
  );
}

export default Nav;