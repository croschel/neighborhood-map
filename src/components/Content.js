import React from 'react';
import Map from "./Map";
import List from "./List";
import * as LocationsAPI from "../api/Locations";

class Content extends React.Component{
    state = {
        locations: [],
        allLocations:[],
        query: ""
    };
    componentDidMount(){
    if(LocationsAPI){
        LocationsAPI.getLocations().then(resp => 
            this.setState({locations:resp, allLocations: resp})
            );
    }else{
        return null;
    }
       
    }

    handleClick = location => {
        for(let i = 0; i < window.markers.length; i++){
            window.markers[i].setAnimation(null);
            if(location.venue.id === window.markers[i].title){ 
                let content = this.contentLocation(location);
                window.infowindow.setContent(content);
                window.infowindow.open(window.mapObject, window.markers[i]);
                window.markers[i].setAnimation(window.google.maps.Animation.BOUNCE);
            }
        }
        
    }
    
    contentLocation = location => {
        return `<div>
            <p className="title">Name: <a href="#">${location.venue.name}</a></p>
            <p>Address: ${location.venue.location.address}</p>
        </div>`
    }

    handleTextChange = query =>{
        this.setState({query});
        if(query){
            this.setState({locations: this.filterLocations(query,this.state.locations)});
        }else{
            this.setState({locations: this.state.allLocations});
        }
        
    }
    
    filterLocations = (query,locations) => {
        return locations.filter(location => location.venue.name.toLowerCase().includes(query.toLowerCase()));
    }

    render(){
        return(
            <div className="content">
                <List locations={this.state.locations} infoContent={this.handleClick} queryString={this.state.query} handleChange={this.handleTextChange}>
                </List>
                <Map locations={this.state.locations} contentLocation={this.contentLocation}></Map>
            </div>
        );
    }
}

export default Content;