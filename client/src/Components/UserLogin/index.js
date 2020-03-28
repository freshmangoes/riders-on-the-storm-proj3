import React, { useState, useContext } from 'react';
import API from '../../utils/API';
import { Button, Form, Input } from 'reactstrap';
import { CurrentUserIdContext } from '../../Context/CurrentUserIdContext';
import { UserLoggedInContext } from '../../Context/UserLoggedInContext';
import SweetAlert from 'sweetalert2-react';

export const UserLogin = (props) => {
	const { setCurrentUserId } = useContext(CurrentUserIdContext);
	const { setUserLoggedIn } = useContext(UserLoggedInContext);

	const [formData, setFormData] = useState({
		username: '',
		password: ''
	});

	const [swalState, setSwalState] = useState(false);
	const [swalMessage, setSwalMessage] = useState('');

	const handleInputChange = (event) => {
		const { name, value } = event.target;

		setFormData({
			...formData,
			[name]: value
		});
	};

	const handleFormSubmitLogin = (event) => {
		event.preventDefault();
		// console.log(formData);
		API.userLogin(formData)
			.then((data) => {
				if (
					data.data.message ===
					'The username and password combination is correct!'
				) {
					setSwalMessage(`You are logged in!`);
					setSwalState(true);
					setUserLoggedIn(true);
					setCurrentUserId(data.data.id);
					props.toggle();
				} else {
					setSwalMessage(data.data.message);
					setSwalState(true);
				}
				console.log(data.data.message);
			})
			.catch((err) => console.log(err));
	};
	const handleFormSubmitRegister = (event) => {
		event.preventDefault();
		// console.log(formData);
		API.userRegister(formData)
			.then((data) => {
				if (data.data.message === 'New user has been registered!') {
					console.log(data.data.message);
					console.log(`You are logged in!`);
					setUserLoggedIn(true);
					setCurrentUserId(data.data.id);
					props.toggle();
				} else {
					console.log(data.data.message);

					setSwalMessage(data.data.message);
					setSwalState(true);
				}
			})
			.catch((err) => console.log(err));
	};

	return (
		<div {...props}>
			<Form className="form">
				<div className="form-group">
					<label htmlFor="username">Username</label>
					<Input
						type="text"
						className="form-control rounded-0 "
						id="username"
						aria-describedby="username"
						name="username"
						value={formData.username}
						onChange={handleInputChange}
					/>
				</div>
				<div className="form-group">
					<label htmlFor="password">Password</label>
					<Input
						type="password"
						className="form-control rounded-0"
						id="password"
						name="password"
						value={formData.password}
						onChange={handleInputChange}
					/>
				</div>
			</Form>
			<Button
				type="submitLogin"
				className="btn btn-primary m-2 bg-dark border-0"
				onClick={handleFormSubmitLogin}
			>
				Login
			</Button>
			<Button
				type="submitRegister"
				className="btn btn-primary m-2 bg-dark border-0"
				onClick={handleFormSubmitRegister}
			>
				Register
			</Button>
			<SweetAlert
				show={swalState}
				title="Message"
				text={swalMessage}
				onConfirm={() => setSwalState(false)}
			/>
		</div>
	);
};
