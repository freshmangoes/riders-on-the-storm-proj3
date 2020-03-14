import React, {Component} from 'react';
import ReactMapGL, { GeolocateControl, NavigationControl } from 'react-map-gl';
import Geocoder from 'react-map-gl-geocoder';
import 'mapbox-gl/dist/mapbox-gl.css';
import 'react-map-gl-geocoder/dist/mapbox-gl-geocoder.css'

/*
TODO :: in no particular order, but definitely matters which one comes first
	- Get ReactMapGL controls working
	- Get drawing routes working
		- GeoJSON, deck.gl, react-leaflet???
	- Get custom data overlays working (for weather API)
*/

const TOKEN = 'pk.eyJ1IjoiZnJlc2hndWF2YXMiLCJhIjoiY2szM3k3Y2tmMHJmYTNjczJiNDVnZzhvOCJ9.Ry3fBcfenPpbHq86OrbN0Q';
const geolocateStyle = {
	position: 'absolute',
	top: 0,
	left: 0,
	margin: 10
}

class Mapv2 extends Component {
	state = {
		viewport: {
			// TODO :: Currently does not adjust viewport width and height with window. FIX THAT SOMEHOW ;)
			width: '100vw',
			height: '100vh',
			latitude: 37.8715,
			longitude: -122.273,
			zoom: 12
		}
	};

	// map reference for other map features
	//	geocoder, geolocation, nav
	map = React.createRef();

	handleViewportChange = viewport => {
		this.setState({
			viewport: {...viewport}
		});
	}

	render() {
		console.log(this.state.viewport);
		return(
			<div className='container-fluid'>
				<ReactMapGL
					ref={this.map}
					{...this.state.viewport}
					onViewportChange={this.handleViewportChange}
					mapStyle='mapbox://styles/mapbox/streets-v11'
					mapboxApiAccessToken = {TOKEN}
				>
					<Geocoder mapRef={this.map} mapboxApiAccessToken={TOKEN}/>
					<GeolocateControl 
						style={geolocateStyle}
						positionOptions={{enableHighAccuracy: true}}
						tracUserLocation={true}
						/>
					{/* FIXME :: Things get ugly when this line is uncommented. */}
					{/* <NavigationControl /> */}
				</ReactMapGL>
			</div>
		)
	}
}

export default Mapv2;