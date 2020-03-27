import React, { useState, useContext, useEffect } from 'react';
import API from '../../utils/API';
import './style.css';
import Directions from '../../utils/Directions';

// importing user log in context things
import { CurrentUserIdContext } from '../../Context/CurrentUserIdContext';
import { UserLoggedInContext } from '../../Context/UserLoggedInContext';
import { RouteContext } from '../../Context/RouteContext';
import { SearchInputContext } from '../../Context/SearchInputContext';

const Input = props => {
	// for user login context:
	const { currentUserId } = useContext(CurrentUserIdContext);
	const { userLoggedIn } = useContext(UserLoggedInContext);
	const { route, setRoute } = useContext(RouteContext);
	const { searchInput, setSearchInput } = useContext(SearchInputContext);

	const [inputData, setInputData] = useState(searchInput);
	const handleInputChange = (event) => {
		const { name, value } = event.target;

		setSearchInput({
			...inputData,
			[name]: value
		});

		setInputData(searchInput)
	};
	useEffect(() => setInputData(searchInput));

	const handleSearch = async (event) => {
		event.preventDefault();

		const start = await Directions.getCoords(inputData.startPoint);
		const end = await Directions.getCoords(inputData.endPoint);
		console.log(start, end, start && end, 'lalala');
		// i don't think this is working properly as validation...

		const newRoute = await Directions.getRoute(start, end);
		setRoute(newRoute);

		//--------------------------
		// NOTE debug
		// console.log(inputData);
		// console.log('start', start);
		// console.log('end', end);
		// console.log('route', newRoute, route);
		// console.log('RouteContext::', RouteContext);
		//--------------------------

		// creating if statement so that searches are only saved if the user is logged in:
		if (userLoggedIn) {
			const apiInputData = {
				start: inputData.startPoint,
				end: inputData.endPoint,
				userId: currentUserId

			}
			API.userInput(apiInputData)
				.then(data => {
					if (data.data.message === 'Success') {
						alert(`Added to search history`);
					} else if (data.data.message === 'Search exists!') {
						console.log(data.data.message);
					} else {
						alert(data.data.message);
						console.log(data.data.message);
					}

				})
				.catch(err => console.log(err));

		}



	};

	return (
		<div {...props}>
			<div className="input-group mb-3">
				<div className="input-group-prepend">
					<span className="input-group-text" id="basic-addon1">
						Start
					</span>
				</div>
				<input
					type="text"
					className="form-control col-4"
					aria-label="Start"
					aria-describedby="basic-addon1"
					name="startPoint"
					value={inputData.startPoint}
					onChange={handleInputChange}
				></input>
				<div className="input-group-prepend">
					<span className="input-group-text" id="basic-addon1">
						End
					</span>
				</div>
				<input
					type="text"
					className="form-control col-4"
					aria-label="End"
					aria-describedby="basic-addon1"
					name="endPoint"
					value={inputData.endPoint}
					onChange={handleInputChange}
				></input>
				<button
					type="button"
					className="btn btn-secondary text-body"
					onClick={handleSearch}
				>
					Search
				</button>
			</div>
		</div>
	);
};

export { Input };
export { RouteContext };
