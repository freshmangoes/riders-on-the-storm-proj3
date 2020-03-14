import React from "react";
import "./style.css";
import { UserLogin } from "../UserLogin/index"


function Nav() {
  return (
    <nav className="navbar  navbar-dark  bg-dark">
      <a className="navbar-brand" href="/">
        Riders on the Storm
      </a>
      <UserLogin className='  bg-dark rounded-0 text-light  p-2 text-right' />
    </nav>
  );
}

export default Nav;