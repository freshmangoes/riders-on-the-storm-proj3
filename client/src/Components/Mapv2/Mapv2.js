import React, {Component} from 'react';
import ReactMapGL, { GeolocateControl, NavigationControl } from 'react-map-gl';
import Geocoder from 'react-map-gl-geocoder';
import 'mapbox-gl/dist/mapbox-gl.css';

const TOKEN = 'pk.eyJ1IjoiZnJlc2hndWF2YXMiLCJhIjoiY2szM3k3Y2tmMHJmYTNjczJiNDVnZzhvOCJ9.Ry3fBcfenPpbHq86OrbN0Q';

class Mapv2 extends Component {
	state = {
		viewport: {
			width: '800px',
			height: '600px',
			latitude: 37.8715,
			longitude: -122.273,
			zoom: 12
		}
	};

	// map reference for other map features
	//	geocoder, geolocation, nav
	map = React.createRef();

	handleViewportChange = viewport => {
		// const oldviewport = this.state.viewport;
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
					// width='100vw-80px'
					// height='100vh-80px'
					onViewportChange={this.handleViewportChange}
					mapStyle='mapbox://styles/mapbox/streets-v11'
					mapboxApiAccessToken = {TOKEN}
				>
					<Geocoder mapRef={this.map} mapboxApiAccessToken={TOKEN}/>
					<GeolocateControl />
					<NavigationControl />
				</ReactMapGL>
			</div>
		)
	}
}

export default Mapv2;