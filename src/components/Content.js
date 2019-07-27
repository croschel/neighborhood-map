import React from 'react';
import Map from "./Map";
import List from "./List";
import * as LocationsAPI from "../api/Locations";


class Content extends React.Component{
    state = {
        locations: []
    };
    componentDidMount(){
    console.log("DATA");
       LocationsAPI.getLocations().then(resp => this.setState({locations:resp}));
    }
    render(){
        console.log("RESPONSE")
        return(
            <div className="content">
                <List locations={this.state.locations}></List>
                <Map locations={this.state.locations}></Map>
            </div>
        )
    }
}

export default Content;