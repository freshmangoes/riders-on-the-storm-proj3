import axios from 'axios';
const TOKEN = process.env.REACT_APP_MAP_TOKEN;

export default {
	getRoute: async (start, end) => {
		const [startLon, startLat] = start;
		const [endLon, endLat] = end;

		// takes in (longitude, latitude) coordinate pairs and returns a list of coordinates for mapping
		const url = `https://api.mapbox.com/directions/v5/mapbox/driving/${startLon},${startLat};${endLon},${endLat}?geometries=geojson&steps=true&access_token=${TOKEN}`;
		try {
			const data = await axios.get(url);
			const route = data.data.routes[0].geometry;

			// NOTE debug
			// -------------------------------------------------
			console.log('directions API data::', data);
			console.log('data.data.routes[0].geometry::', route);
			// -------------------------------------------------
			return route;
		} catch (error) {
			console.log('error', error);
		}
	},

	// Uses Mapbox geocoding API to get coordinates
	// takes in a location search and returns coordinates
	getCoords: async (location) => {
		const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${location}.json?limit=1&access_token=${TOKEN}`;
		try {
			const data = await axios.get(url);
			const coords = data.data.features[0].center;
			// console.log('data getCoords::', data)
			// console.log('COORDS::', data.data.features[0].center);
			return coords;
		} catch (err) {
			console.log('err', err);
		}
	}
};
