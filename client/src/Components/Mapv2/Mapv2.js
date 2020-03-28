import React, { Component } from 'react';
// import { Button } from 'reactstrap';
import ReactMapGL, {
	GeolocateControl,
	FlyToInterpolator,
	WebMercatorViewport
} from 'react-map-gl';
import { DeckGL, GeoJsonLayer } from 'deck.gl';
import API from '../../utils/API';
import { RouteContext } from '../../Context/RouteContext';
import 'mapbox-gl/dist/mapbox-gl.css';
import 'react-map-gl-geocoder/dist/mapbox-gl-geocoder.css';
import WeatherCard from '../WeatherCard/index.js';

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
		route: this.context.route,
		// itemArray: []
	};

	componentDidMount() {
		this.setState({
			...this.state,
			route: this.context.route
		});
	}

	componentDidUpdate() {
		if (
			this.context.route &&
			this.context.route.coordinates &&
			this.state.route !== this.context.route
		) {
			const first = this.context.route.coordinates[0];
			const last = this.context.route.coordinates[
				this.context.route.coordinates.length - 1
			];

			const midX = first[0] + (last[0] - first[0]) * 0.5;
			const midY = first[1] + (last[1] - first[1]) * 0.5;

			this.state.route = this.context.route;
			this.flyToRoute(midX, midY, first, last);
		}
	}

	mapRef = React.createRef();

	handleViewportChange = (viewport) => {
		const { width, height, ...etc } = viewport;
		this.setState({
			...this.state,
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

	showWeather = (latLongObj) => {
		return API.getWeather(latLongObj);
	};

	flyToRoute = (long, lat, first, last) => {
		const { longitude, latitude, zoom } = new WebMercatorViewport({
			width: 800,
			height: 600,
			longitude: long,
			latitude: lat
		}).fitBounds([first, last], {
			padding: 20,
			offset: [0, -100]
		});
		const viewport = {
			...this.state.viewport,
			longitude,
			latitude,
			zoom,
			transitionDuration: 1000,
			transitionInterpolator: new FlyToInterpolator()
		};

		this.setState({
			...this.state,
			viewport
		});
	};

	renderTooltip = () => {
		const { hoveredObject, pointerX, pointerY } = this.state || {};
		return hoveredObject && (
			<div style={{ position: 'absolute', zIndex: 1, pointerEvents: 'none', left: pointerX, top: pointerY }}>
				<WeatherCard weatherObj={hoveredObject.data.data} />
			</div>
		);
	}

	render() {
		const { viewport } = this.state;
		const geoJsonData = this.state.route;

		const layer = new GeoJsonLayer({
			id: 'geojson-layer',
			data: geoJsonData,
			pickable: true,
			stroked: false,
			filled: true,
			extruded: true,
			lineWidthScale: 90,
			lineWidthMinPixels: 2,
			getFillColor: [160, 160, 180, 200],
			getLineColor: [255, 0, 0, 255],
			getRadius: 100,
			getLineWidth: 20,
			getElevation: 30,
			// onClick: (info, event) => {
			// 	// info houses the coordinates
			// 	// console.log('info', info);
			// 	// console.log('event', event);
			// 	this.showWeather({ lat: info.lngLat[1], lon: info.lngLat[0] }).then(data => {
			// 		const newArr = this.state.itemArray;
			// 		console.log(data, 'data')
			// 		newArr.push({ style: { left: info.x, top: info.y, display: "block", position: "absolute" }, value: <WeatherCard weatherObj={data.data} /> }


			// 		)
			// 		this.setState({
			// 			...this.state,
			// 			itemArray: newArr
			// 		})
			// 	});
			// }
			onHover: (info, event) => {
				// console.log('hover', info, event)
				this.showWeather({ lat: info.lngLat[1], lon: info.lngLat[0] }).then(data => {
					console.log(data)
					this.setState(
						{
							...this.state,
							hoveredObject: { data },
							pointerX: info.x,
							pointerY: info.y
						}
					)
				})

			}
		});

		return (
			<div className="container-fluid p-10">
				<ReactMapGL
					ref={this.mapRef}
					width="78.5vw"
					height="80vh"
					{...viewport}
					onViewportChange={(viewport) => this.handleViewportChange(viewport)}
					mapStyle="mapbox://styles/mapbox/streets-v11"
					mapboxApiAccessToken={TOKEN}
				>
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
				{
					this
						.renderTooltip()
				}
			</div >
		);
	}
}

export default Mapv2;
