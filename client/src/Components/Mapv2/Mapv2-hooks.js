import React, { useState, useContext } from 'react';
import ReactMapGL, { GeolocateControl } from 'react-map-gl';
import DeckGL, { GeoJsonLayer } from 'deck.gl';
import Geocoder from 'react-map-gl-geocoder';
import 'mapbox-gl/dist/mapbox-gl.css';
import 'react-map-gl-geocoder/dist/mapbox-gl-geocoder.css';

import { RouteContext } from '../../Context/RouteContext';


const TOKEN = process.env.REACT_APP_MAP_TOKEN;
const geolocateStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    margin: 10
};

const Mapv2 = () => {
    const { route } = useContext(RouteContext);

    const [viewport, setViewport] = useState({
        latitude: 37.8715,
        longitude: -122.273,
        zoom: 12
    });


    // map reference for other map features
    //	geocoder, geolocation, nav
    const mapRef = React.createRef();

    const handleViewportChange = (viewport) => {
        // NOTE debug
        // Placed console.log here because it makes it easy to call by moving the map viewport.
        console.log('RouteContext', RouteContext);
        const { width, height, ...etc } = viewport;
        setViewport(etc);
    };

    const handleGeocoderViewportChange = (viewport) => {
        const geocoderDefaultOverrides = { transitionDuration: 1200 };

        return handleViewportChange({
            ...viewport,
            ...geocoderDefaultOverrides
        });
    };


    // NOTE
    // Creates GeoJson line for route when searched, currently only gets updated and drawn on the map when the viewport is updated, currently a WIP.
    const layer = new GeoJsonLayer({
        id: 'geojson-layer',
        data: route,
        pickable: true,
        stroked: false,
        filled: true,
        extruded: true,
        lineWidthScale: 20,
        lineWidthMinPixels: 2,
        getFillColor: [160, 160, 180, 200],
        // getLineColor: d => colorToRGBArray(d.properties.color),
        getRadius: 100,
        getLineWidth: 1,
        getElevation: 30,
        // onHover: ({object, x, y}) => {
        // 	const tooltip = object.properties.name || object.properties.station;
        // }
    });




    return (
        <div className="container-fluid">
            <ReactMapGL
                ref={mapRef}
                width="100vw"
                height="100vh"
                {...viewport}
                onViewportChange={(viewport) => handleViewportChange(viewport)}
                mapStyle="mapbox://styles/mapbox/streets-v11"
                mapboxApiAccessToken={TOKEN}
            >
                <Geocoder
                    mapRef={mapRef}
                    mapboxApiAccessToken={TOKEN}
                    onViewportChange={handleGeocoderViewportChange}
                />
                <DeckGL
                    mapRef={mapRef}
                    layers={layer}
                    viewState={viewport}
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

export default Mapv2;
