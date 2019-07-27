import React, { Component } from 'react';
import Map from "./Map";

class List extends Component{
    render(){
        const locations = this.props.locations;
        return(
            <aside id="list">
                <h2>Locations</h2>
                <input type="text" value={this.props.queryString} onChange={e => this.props.handleChange(e.target.value)}/>
                <ol>
                    {locations.map(loc => (
                        <li key={loc.venue.id}>
                            <div>
                                <p className="title">
                                    Name:<a href="#" onClick={()=> this.props.infoContent(loc)}>{loc.venue.name}</a>
                                </p>
                                <p>Address: {loc.venue.location.address}</p>
                            </div>
                        </li>
                    ))}
                </ol>
            </aside>
        );
    }
}

export default List;