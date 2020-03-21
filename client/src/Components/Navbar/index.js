import React, { useContext } from "react";
import "./style.css";
import { UserLoginModal } from "../UserLoginModal/index"
import { CurrentUserIdContext } from '../../Context/CurrentUserIdContext';
import { UserLoggedInContext } from '../../Context/UserLoggedInContext';

function Nav() {
  const { currentUserId, setCurrentUserId } = useContext(CurrentUserIdContext);
  const { userLoggedIn, setUserLoggedIn } = useContext(UserLoggedInContext);

  return (
    <nav className="navbar  navbar-dark  bg-dark">
      <a className="navbar-brand" href="/">
        Riders on the Storm
      </a>

      {
        userLoggedIn ? `${currentUserId} is logged in` : <UserLoginModal buttonLabel='Sign In / Register' />
      }


    </nav>
  );
}

export default Nav;