import React from 'react';
import axios from 'axios';

const TOKEN = process.env.REACT_APP_MAP_TOKEN;
const TestDirs = () => {
	// Uses Mapbox directions API to get route
	const getRoute = async (start, end) => {
		const [startLon, startLat] = start;
		const [endLon, endLat] = end;

		const url = `https://api.mapbox.com/directions/v5/mapbox/driving/${startLon},${startLat};${endLon},${endLat}?alternatives=true&geometries=geojson&steps=true&access_token=${TOKEN}`
		try {
			const data = await axios.get(url);
			// console.log('data getRoute::', data);

			// array of arrays containing coordinate pairs
			// console.log('ROUTE::', data.data.routes[0].geometry.coordinates);
			return data.data.routes[0].geometry.coordinates;
		} catch (error) {
			console.log('error', error);
		}
	};

	// Uses Mapbox geocoding API to get coordinates
	const getCoords = async (location) => {
		const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${location}.json?limit=1&access_token=${TOKEN}`;
		try {
			const data = await axios.get(url);
			// console.log('data getCoords::', data)
			// console.log('COORDS::', data.data.features[0].center);
			return data.data.features[0].center;
		} catch (err) {
			console.log('err', err);
		}
	}

	//testing
	const run = async () => {
		const start = await getCoords('Folsom St, San Francisco');
		const end = await getCoords('Ace Hardware, Half Moon Bay, CA');
		const route = await getRoute(start, end);
		console.log('start', start);
		console.log('end', end);
		console.log('route', route);
	}

	run();

	return <div></div>;
};

export default TestDirs;
