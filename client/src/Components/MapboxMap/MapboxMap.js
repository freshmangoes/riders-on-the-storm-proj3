import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
// import { Geocoder } from '@mapbox/react-geocoder';
import 'mapbox-gl/dist/mapbox-gl.css';

const styles = {
	// sets viewport to entire width, and -80px from height
	width: '100vw',
	height: 'calc(100vh - 80px)',
	position: 'absolute'
};

const MapboxMap = () => {
	// state for map to store in
	// using a state makes setting up the map easier
	const [map, setMap] = useState(null);

	// initial map data:: Berkeley, CA
	const [mapOptions, setMapOptions] = useState({
		lat: 37.8715,
		lng: -122.273,
		zoom: 12
	});

	const mapContainer = useRef(null);

	// loads map, updates map state as the user pans the map (i think?)
	useEffect(() => {
		mapboxgl.accessToken =
			process.env.REACT_APP_MAP_TOKEN;

		const initializeMap = (setMap, mapContainer) => {
			// makes a mapbox map for the map state
			const newMap = new mapboxgl.Map({
				container: mapContainer.current,
				style: 'mapbox://styles/mapbox/streets-v11',
				center: [mapOptions.lng, mapOptions.lat],
				zoom: mapOptions.zoom
			});

			// once the map is loaded, sets map state to newMap
			newMap.on('load', () => {
				setMap(newMap);
				newMap.resize();
			});
		};
		console.log('map', map);
		if (!map) initializeMap(setMap, mapContainer);
	}, [map]);

	return <div ref={el => (mapContainer.current = el)} style={styles} />;
};

export default MapboxMap;
