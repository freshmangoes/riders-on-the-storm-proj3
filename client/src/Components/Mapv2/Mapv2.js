import React, { Component } from 'react';
import ReactMapGL, { GeolocateControl } from 'react-map-gl';
import Geocoder from 'react-map-gl-geocoder';
import 'mapbox-gl/dist/mapbox-gl.css';
import 'react-map-gl-geocoder/dist/mapbox-gl-geocoder.css';

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
	state = {
		viewport: {
			latitude: 37.8715,
			longitude: -122.273,
			zoom: 12
		}
	};

	// map reference for other map features
	//	geocoder, geolocation, nav
	mapRef = React.createRef();

	handleViewportChange = viewport => {
		const {width, height, ...etc} = viewport;
		this.setState({
			viewport: etc
		});
	};

	handleGeocoderViewportChange = viewport => {
		const geocoderDefaultOverrides = { transitionDuration: 1000 };

		return this.handleViewportChange({
			...viewport,
			...geocoderDefaultOverrides
		});
	};

	render() {
		// NOTE debug
		// console.log(this.state.viewport);
		const {viewport} = this.state;
		return (
			<div className='container-fluid'>
				<ReactMapGL
					ref={this.mapRef}
					width='100vw'
					height='100vh'
					{...viewport}
					onViewportChange={viewport => this.handleViewportChange(viewport)}
					mapStyle='mapbox://styles/mapbox/streets-v11'
					mapboxApiAccessToken={TOKEN}
				>
					<Geocoder
						mapRef={this.mapRef}
						mapboxApiAccessToken={TOKEN}
						onViewportChange={this.handleGeocoderViewportChange}
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
