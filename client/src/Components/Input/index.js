import React, { useState, useContext, useEffect } from 'react';
import API from '../../utils/API';
import './style.css';
import Directions from '../../utils/Directions';

import { CurrentUserIdContext } from '../../Context/CurrentUserIdContext';
import { UserLoggedInContext } from '../../Context/UserLoggedInContext';
import { RouteContext } from '../../Context/RouteContext';
import { SearchInputContext } from '../../Context/SearchInputContext';

const Input = (props) => {
	const { currentUserId } = useContext(CurrentUserIdContext);
	const { userLoggedIn } = useContext(UserLoggedInContext);
	const { setRoute } = useContext(RouteContext);
	const { searchInput, setSearchInput } = useContext(SearchInputContext);

	const [inputData, setInputData] = useState(searchInput);
	const handleInputChange = (event) => {
		const { name, value } = event.target;

		setSearchInput({
			...inputData,
			[name]: value
		});

		setInputData(searchInput);
	};
	useEffect(() => setInputData(searchInput));

	const handleSearch = async (event) => {
		event.preventDefault();

		const start = await Directions.getCoords(inputData.startPoint);
		const end = await Directions.getCoords(inputData.endPoint);
		const newRoute = await Directions.getRoute(start, end);
		setRoute(newRoute);

		if (userLoggedIn) {
			const apiInputData = {
				start: inputData.startPoint,
				end: inputData.endPoint,
				userId: currentUserId
			};

			API.userInput(apiInputData)
				.then((data) => {
					if (data.data.message === 'Success') {
						console.log(`Added to search history`);
					} else if (data.data.message === 'Search exists!') {
						console.log(data.data.message);
					} else {
						console.log(data.data.message);
						console.log(data.data.message);
					}
				})
				.catch((err) => console.log(err));
		}
	};

	return (
		<div {...props} id="inputForm">
			<form className="form-inline mb-4">
				<div className="form-group">
					<label>Start</label>
					<input
						type="text"
						className="form-control "
						aria-label="Start"
						aria-describedby="basic-addon1"
						name="startPoint"
						value={inputData.startPoint}
						onChange={handleInputChange}
					></input>
				</div>
				<div className="form-group" id="endInput">
					<label>End</label>
					<input
						type="text"
						className="form-control "
						aria-label="End"
						aria-describedby="basic-addon1"
						name="endPoint"
						value={inputData.endPoint}
						onChange={handleInputChange}
					></input>
				</div>
				<button
					type="button"
					className="btn btn-secondary text-body"
					onClick={handleSearch}
				>
					Search
				</button>
			</form>
		</div>
	);
};

export { Input };
export { RouteContext };
