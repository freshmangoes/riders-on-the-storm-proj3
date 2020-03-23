import React, { useState } from 'react';
import API from '../../utils/API';
import './style.css';
import Directions from '../../utils/Directions';
// import { Row, Col, InputGroup, InputGroupAddon, Button } from "reactstrap";

const Input = props => {
	const [inputData, setInputData] = useState({
		startPoint: 'San Francisco, CA',
		endPoint: 'Santa Cruz, CA'
	});
	const handleInputChange = event => {
		const { name, value } = event.target;

		setInputData({
			...inputData,
			[name]: value
		});
	};

	const handleSearch = async event => {
		event.preventDefault();

		const start = await Directions.getCoords(inputData.startPoint);
		const end = await Directions.getCoords(inputData.endPoint);
		const route = await Directions.getRoute(start, end);

		//--------------------------
		// NOTE debug
		console.log(inputData);
		console.log('start', start);
		console.log('end', end);
		console.log('route', route);
		//--------------------------

		API.userInput(inputData)
			.then(data => {
				if (data.data.message === 'Success') {
					alert(`Added to search history`);
				} else {
					alert(data.data.message);
				}
				console.log(data.data.message);
			})
			.catch(err => console.log(err));
	};

	return (
		<div {...props} id="inputForm">
			<form className="form-inline mb-4">
				<div className='form-group'>
					<label>
						Start
					</label>
				<input
					type='text'
					className="form-control"
					aria-label='Start'
					aria-describedby='basic-addon1'
					name='startPoint'
					defaultValue='Address'
					onChange={handleInputChange}
				></input>
				</div>
				<div className='form-group'>
					<label>
						End
					</label>
				<input
					type='text'
					className='form-control'
					aria-label='End'
					aria-describedby='basic-addon1'
					name='endPoint'
					defaultValue='Address'
					onChange={handleInputChange}
				></input>
				</div>
				<button
					type='button'
					className='btn btn-secondary text-body'
					onClick={handleSearch}
				>
					Search
				</button>	
					
				</form>
		</div>
	);
};

export default Input;
