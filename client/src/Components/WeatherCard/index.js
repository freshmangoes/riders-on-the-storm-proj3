import React from 'react';
import { Card, CardBody, CardHeader, CardText } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWind, faTemperatureLow } from '@fortawesome/free-solid-svg-icons';
import './style.css';

const WeatherCard = (props) => {
	const weatherObj = props.weatherObj;
	// This should show human readable data from the json above
	return (
		<div>
			<Card className="rounded">
				<CardBody className="bg-secondary">
					<CardHeader className="bg-dark text-warning">
						<h3 id="city">{weatherObj.name}</h3>
					</CardHeader>
					<CardText className="text-white">
						<p>
							<strong>Weather Overview</strong>: {weatherObj.weather[0].main}
						</p>
						<p>
							<strong>Weather Description</strong>:{' '}
							{weatherObj.weather[0].description}
						</p>
						<p>
							<FontAwesomeIcon
								className="fa fa-lg"
								id="icon"
								icon={faTemperatureLow}
							></FontAwesomeIcon>
							<strong>Temperature</strong>: {weatherObj.main.temp} F
						</p>
						<p>
							<FontAwesomeIcon
								className="fa fa-lg"
								id="icon"
								icon={faWind}
							></FontAwesomeIcon>
							<strong>Wind</strong>: {weatherObj.wind.speed} mph
						</p>
					</CardText>
				</CardBody>
			</Card>
		</div>
	);
};

export default WeatherCard;
