import React, { useContext, useState } from 'react';
import './style.css';
import { UserLoginModal } from '../UserLoginModal/index';
import { PastSearchesModal } from '../PastSearchesModal/index';
import { CurrentUserIdContext } from '../../Context/CurrentUserIdContext';
import { UserLoggedInContext } from '../../Context/UserLoggedInContext';
import { Button } from 'reactstrap';
import MotoWeather from './MotoWeather.png';
import SweetAlert from 'sweetalert2-react';

function Nav() {
	const { currentUserId, setCurrentUserId } = useContext(CurrentUserIdContext);
	const { userLoggedIn, setUserLoggedIn } = useContext(UserLoggedInContext);

	const [swalState, setSwalState] = useState(false);
	const [swalMessage, setSwalMessage] = useState('');

	const handleLogout = (event) => {
		event.preventDefault();
		setUserLoggedIn(false);
		setCurrentUserId('');
		setSwalMessage('You are now logged out');
		setSwalState(true);
	};


	return (
		<nav className="navbar  navbar-dark  bg-dark">
			<a className="navbar-brand" href="/">
				<img src={MotoWeather} alt="MotoWeather"></img>
			</a>

			{userLoggedIn ? (
				<div>
					<Button color="dark" onClick={handleLogout}>
						Log Out
					</Button>
					<PastSearchesModal
						buttonLabel="Search History"
						currentUserId={currentUserId}
					/>
				</div>
			) : (
					<UserLoginModal buttonLabel="Sign In / Register" />
				)}
			<SweetAlert
				show={swalState}
				title="Message"
				text={swalMessage}
				onConfirm={() => setSwalState(false)}
			/>
		</nav>
	);
}

export default Nav;
