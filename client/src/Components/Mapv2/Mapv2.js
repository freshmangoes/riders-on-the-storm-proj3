import React, { Component } from 'react';
import ReactMapGL, { GeolocateControl } from 'react-map-gl';
import DeckGL, { GeoJsonLayer } from 'deck.gl';
import Geocoder from 'react-map-gl-geocoder';
import 'mapbox-gl/dist/mapbox-gl.css';
import 'react-map-gl-geocoder/dist/mapbox-gl-geocoder.css';

import { RouteContext } from '../../Context/RouteContext';

/*
TODO :: in no particular order, but definitely matters which one comes first
	- Get drawing routes working
		- GeoJSON, deck.gl, react-leaflet???
	- Get custom data overlays working (for weather API)
*/

const TOKEN = process.env.REACT_APP_MAP_TOKEN;
const geolocateStyle = {
	position: 'absolute',
	top: 0,
	left: 0,
	margin: 10
};

class Mapv2 extends Component {
	static contextType = RouteContext;



	state = {
		viewport: {
			latitude: 37.8715,
			longitude: -122.273,
			zoom: 12
		},
		route: {}

	};

	componentDidMount() {
		this.state.route = this.context.route

		console.log('mount', this.context) //testing
	}

	componentDidUpdate() {
		console.log('update', this.context)
		this.state.route = this.context.route
		// this.handleGeocoderViewportChange();
	}

	// map reference for other map features
	//	geocoder, geolocation, nav
	mapRef = React.createRef();

	handleViewportChange = (viewport) => {
		// NOTE debug
		// Placed console.log here because it makes it easy to call by moving the map viewport.
		// console.log('RouteContext', RouteContext);
		const { width, height, ...etc } = viewport;
		this.setState({
			viewport: etc
		});
	};

	handleGeocoderViewportChange = (viewport) => {
		const geocoderDefaultOverrides = { transitionDuration: 1200 };

		return this.handleViewportChange({
			...viewport,
			...geocoderDefaultOverrides
		});
	};

	render() {
		const { viewport } = this.state;
		const geoJsonData = this.state.route;

		// NOTE
		// Creates GeoJson line for route when searched, currently only gets updated and drawn on the map when the viewport is updated, currently a WIP.
		const layer = new GeoJsonLayer({
			id: 'geojson-layer',
			data: geoJsonData,
			pickable: true,
			stroked: false,
			filled: true,
			extruded: true,
			lineWidthScale: 20,
			lineWidthMinPixels: 2,
			getFillColor: [160, 160, 180, 200],
			getLineColor: [255, 0, 0, 255],
			getRadius: 100,
			getLineWidth: 1,
			getElevation: 30,
			onClick: (info, event) => {
				// info houses the coordinates
				console.log('info', info);
				console.log('event', event);
			}
		});

		return (
			<div className='container-fluid'>
				<ReactMapGL
					ref={this.mapRef}
					width='100vw'
					height='100vh'
					{...viewport}
					onViewportChange={(viewport) => this.handleViewportChange(viewport)}
					mapStyle='mapbox://styles/mapbox/streets-v11'
					mapboxApiAccessToken={TOKEN}
				>
					<Geocoder
						mapRef={this.mapRef}
						mapboxApiAccessToken={TOKEN}
						onViewportChange={this.handleGeocoderViewportChange}
					/>
					<DeckGL
						mapRef={this.mapRef}
						layers={layer}
						viewState={viewport}
						onClick={this._onClick}
					/>
					<GeolocateControl
						style={geolocateStyle}
						positionOptions={{ enableHighAccuracy: true }}
						trackUserLocation={true}
					/>
				</ReactMapGL>
			</div>
		);
	}
}

export default Mapv2;
