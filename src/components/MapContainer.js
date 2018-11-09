import React from "react";
import { GoogleApiWrapper, Map, InfoWindow, Marker } from "google-maps-react";

export class MapContainer extends React.Component {
  

  render() {
	
	if (!this.props.loaded) {
		return <div>Loading...</div>
	}
	

    return (
    	<div className="map-container" >
			<Map google={this.props.google} zoom={14}>
	 
	        <Marker onClick={this.onMarkerClick}
	                name={'Current location'} />
	 
	        <InfoWindow onClose={this.onInfoWindowClose}>
	            <div>
	              <h1>Candy Shop</h1>
	            </div>
	        </InfoWindow>
	      </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
	apiKey: "AIzaSyCWSOC0yBETlxi2CaHga4MonDI1tm48PJ0"
})(MapContainer)