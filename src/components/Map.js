import React, { Component } from 'react';

class Map extends Component{
    markers = [];
    addMarkers = locations => {
        if (window.google) {
            let infowindow = new window.google.maps.InfoWindow();
            if(locations){
            for(let i = 0; i < locations.length; i++){
                let marker = new window.google.maps.Marker({
                position: {
                   lat: locations[i].venue.location.lat, 
                   lng: locations[i].venue.location.lng
                },
                map: window.mapObject,
                title: locations[i].venue.id,
                animation: window.google.maps.Animation.DROP
                });
                marker.addListener('click', () => {
                    for(let i = 0; i < window.markers.length; i++){
                        window.markers[i].setAnimation(null);
                        
                    }
                    let content = this.props.contentLocation(locations[i]);
                    infowindow.setContent(content);
                    infowindow.open(window.mapObject,marker);
                    window.markers[i].setAnimation(window.google.maps.Animation.BOUNCE);
                });
                this.markers.push(marker);
            }
        }else{
            console.log("");

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
            <div role="application" aria-label="Map os neighboorhood" id="map"></div>
        )
    }
}

export default Map;