import React, { Component } from 'react';
import Map from "./Map";

class List extends Component{
    render(){
        const locations = this.props.locations;
        return(
            <div id="list">
                <h2>Locations</h2>
                <input type="text"/>
                <ol>
                    {locations.map(loc => (
                        <li>
                            <div>
                                <h2>{loc.venue.name}</h2>
                            </div>
                        </li>
                    ))}
                </ol>
            </div>
        );
    }
}

export default List;