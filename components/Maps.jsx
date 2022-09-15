import React, { useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const Maps = ({ latitude, longitude }) => {
	mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAP_API_TOKEN;

	const mapContainer = useRef(null);
	const map = useRef(null);

	useEffect(() => {
		if (map.current) return;

		if (longitude && latitude) {
			map.current = new mapboxgl.Map({
				container: mapContainer.current,
				// style: "mapbox://styles/mapbox/streets-v11",
				style: "https://api.mapbox.com/styles/v1/taurusilver/cl34cjj9y000l15phwgysj2ap.html?title=view&access_token=pk.eyJ1IjoidGF1cnVzaWx2ZXIiLCJhIjoiY2wzNGU0NWZ1MDFzdzNkcnVsMzlyenl0cCJ9.JlOXR9GqoMIawXOSLBa1FQ&zoomwheel=true&fresh=true#10.04/40.7064/-73.9413",
				center: [longitude, latitude],
				zoom: 5,
			});
		}
	}, [longitude, latitude]);

	return (
		<>
			<div ref={mapContainer} className="map" />
		</>
	);
};

export default Maps;
