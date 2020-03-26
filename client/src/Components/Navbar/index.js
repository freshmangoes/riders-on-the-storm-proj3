import React, { useContext } from "react";
import "./style.css";
import { UserLoginModal } from "../UserLoginModal/index";
import { PastSearchesModal } from "../PastSearchesModal/index";
import { CurrentUserIdContext } from '../../Context/CurrentUserIdContext';
import { UserLoggedInContext } from '../../Context/UserLoggedInContext';
import { Button } from 'reactstrap';
import Logo from './Logo.png';

function Nav() {
  const { currentUserId, setCurrentUserId } = useContext(CurrentUserIdContext);
  const { userLoggedIn, setUserLoggedIn } = useContext(UserLoggedInContext);

  const handleLogout = (event) => {
    event.preventDefault();
    setUserLoggedIn(false);
    setCurrentUserId('');
    alert('You are now logged out');
  }

  return (
    <nav className="navbar  navbar-dark  bg-dark">
      
      <a className="navbar-brand" href="/">
      <img src={Logo} alt="MotoWeather"></img>
      </a>

      {
        userLoggedIn ? <div><Button color='dark' onClick={handleLogout} >Log Out</Button><PastSearchesModal buttonLabel='Search History' currentUserId={currentUserId} /></div> : <UserLoginModal buttonLabel='Sign In / Register' />
      }


    </nav>
  );
}

export default Nav;