import React from 'react'
import { Card, CardBody, CardHeader, CardText } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWind, faTemperatureLow } from '@fortawesome/free-solid-svg-icons';
import './style.css'

const WeatherCard = (props) => {
    // example:
    // 20200323195924
    // // http://api.openweathermap.org/data/2.5/weather?lat=35&lon=-139.345643&appid=64f5f100c1b5dddfe0a28db2cc50e320

    // {
    //     "coord": {
    //       "lon": -139.35,
    //       "lat": 35
    //     },
    //     "weather": [
    //       {
    //         "id": 500,
    //         "main": "Rain",
    //         "description": "light rain",
    //         "icon": "10d"
    //       }
    //     ],
    //     "base": "stations",
    //     "main": {
    //       "temp": 286.55,
    //     },
    //     "wind": {
    //       "speed": 7.91
    //         },
    //     "rain": {
    //       "3h": 0.13
    //     },
    //     "clouds": {
    //       "all": 73
    //     },
    //     "dt": 1585018764,
    //     "sys": {
    //       "sunrise": 1584976549,
    //       "sunset": 1585020693
    //     },
    //     "timezone": -32400,
    //     "id": 0,
    //     "name": "",
    //     "cod": 200
    //   }
    const weatherObj = props.weatherObj
    // This should show human readable data from the json above
    return (
        <div>
            <Card>
            <CardBody className="bg-secondary">
            <CardHeader className="bg-dark text-warning">
               <h3 id="city">{weatherObj.name}</h3>
            </CardHeader>
            <CardText className="text-white">
            <p><strong>Weather Overview</strong>: {weatherObj.weather[0].main}</p>
            <p><strong>Weather Description</strong>: {weatherObj.weather[0].description}</p>
            <p><FontAwesomeIcon className="fa fa-lg" id="icon" icon={faTemperatureLow}></FontAwesomeIcon><strong>Temperature</strong>: {weatherObj.main.temp} F</p>
            <p><FontAwesomeIcon className="fa fa-lg" id="icon" icon={faWind}></FontAwesomeIcon><strong>Wind</strong>: {weatherObj.wind.speed} mph</p>

            </CardText>

            </CardBody>

            </Card>

        </div>
    )
}

export default WeatherCard
