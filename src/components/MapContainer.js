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
			const styles = [
                    {
                        "featureType": "administrative",
                        "elementType": "labels.text.fill",
                        "stylers": [
                            {
                                "color": "#444444"
                            }
                        ]
                    },
                    {
                        "featureType": "administrative.country",
                        "elementType": "geometry.stroke",
                        "stylers": [
                            {
                                "color": "#ffffff"
                            },
                            {
                                "weight": "3.44"
                            },
                            {
                                "gamma": "1.12"
                            }
                        ]
                    },
                    {
                        "featureType": "administrative.country",
                        "elementType": "labels",
                        "stylers": [
                            {
                                "visibility": "simplified"
                            },
                            {
                                "color": "#c36990"
                            }
                        ]
                    },
                    {
                        "featureType": "administrative.province",
                        "elementType": "all",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "administrative.locality",
                        "elementType": "all",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "landscape",
                        "elementType": "all",
                        "stylers": [
                            {
                                "color": "#eca9c6"
                            }
                        ]
                    },
                    {
                        "featureType": "poi",
                        "elementType": "all",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "road",
                        "elementType": "all",
                        "stylers": [
                            {
                                "saturation": -100
                            },
                            {
                                "lightness": 45
                            },
                            {
                                "color": "#ce96ae"
                            }
                        ]
                    },
                    {
                        "featureType": "road.highway",
                        "elementType": "all",
                        "stylers": [
                            {
                                "visibility": "simplified"
                            }
                        ]
                    },
                    {
                        "featureType": "road.arterial",
                        "elementType": "labels.icon",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "transit",
                        "elementType": "all",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "water",
                        "elementType": "all",
                        "stylers": [
                            {
                                "color": "#ffffff"
                            },
                            {
                                "visibility": "on"
                            }
                        ]
                    }
                ];
			const center = new maps.LatLng(lat, long);
			const mapConfig = Object.assign({}, {
				center,
				zoom, 
				styles
			});
			this.map = new maps.Map(node, mapConfig);

		}
	};

  render() {
	
	if (!this.props.loaded) {
		return <div>Loading...</div>
	}

    return (
    	<div className="map-container" ref="map" >
			Map is loading...<span role="img" aria-label="globe">🌍</span>
      	</div>
    );
  }
}

export default GoogleApiWrapper({
	apiKey: "AIzaSyCWSOC0yBETlxi2CaHga4MonDI1tm48PJ0"
})(MapContainer)