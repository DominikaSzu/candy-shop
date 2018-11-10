import React from "react";
import ReactDOM from 'react-dom';
import { GoogleApiWrapper } from "google-maps-react";

export class MapContainer extends React.Component {
	
	componentDidMount = () => {
		this.loadMap();
	}
	

	loadMap = () => {
		if (this.props && this.props.google) {
			const { google } = this.props;
			const maps = google.maps;
			const mapRef = this.refs.map;
			const node = ReactDOM.findDOMNode(mapRef);
			let zoom = 14;
			let lat = 50.064651;
			let long = 19.944981;
			const center = new maps.LatLng(lat, long);
			const mapConfig = Object.assign({}, {
				center,
				zoom
			});
			this.map = new maps.Map(node, mapConfig);

		}
	}


  render() {
	
	if (!this.props.loaded) {
		return <div>Loading...</div>
	}

    return (
    	<div className="map-container" ref="map">
			Map is loading...<span role="img" aria-label="globe">🌍</span>
      	</div>
    );
  }
}

export default GoogleApiWrapper({
	apiKey: "AIzaSyCWSOC0yBETlxi2CaHga4MonDI1tm48PJ0"
})(MapContainer)