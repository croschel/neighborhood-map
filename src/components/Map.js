import React, { Component } from 'react';

class Map extends Component{
    markers = [];
    addMarkers = locations => {
        if (window.google) {
            let infowindow = new window.google.maps.InfoWindow();
            for(let i = 0; i < locations.length; i++){
                let marker = new window.google.maps.Marker({
                position: {
                   lat: locations[i].venue.location.lat, 
                   lng: locations[i].venue.location.lng
                },
                map: window.mapObject,
                title: locations[i].venue.id
                });
                marker.addListener('click', () => {
                    let content = this.props.contentLocation(locations[i]);
                    infowindow.setContent(content);
                    infowindow.open(window.mapObject,marker);
                });
                this.markers.push(marker);
            }
            window.infowindow = infowindow;
            window.markers = this.markers;
        }
    };

    removeMarkers(){
        for (let i = 0;i < this.markers.length;i++){
            this.markers[i].setMap(null);
        }
    }

    render(){
        this.removeMarkers()
        this.addMarkers(this.props.locations);
        return(
            <div role="application" aria-label="Map os neighboor hood" id="map"></div>
        )
    }
}

export default Map;