import React, { Component } from 'react';
const axios = require('axios');

const TOKEN = process.env.REACT_APP_MAP_TOKEN;
class TestDirs extends Component {
	getDirections = async () => {
		try {
			const data = await axios.get(
				`https://api.mapbox.com/directions/v5/mapbox/driving/-122.50613655471308%2C37.538928163554345%3B-122.43398868283435%2C37.4615039973351?alternatives=true&geometries=geojson&steps=true&access_token=${TOKEN}`
			);
      console.log('data', data);

      // array of arrays containing coordinate pairs
      console.log('routes', data.data.routes[0].geometry.coordinates);
		} catch (error) {
			console.log('error', error);
		}
	};

	render() {
		this.getDirections();
		return <div></div>;
	}
}

export default TestDirs;
