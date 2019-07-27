import React, { Component } from 'react';

class List extends Component{
    render(){
        const locations = this.props.locations;
        return(
            <aside id="list">
                <h2>Locations</h2>
                <input role="input" aria-label="type the place" type="text" value={this.props.queryString} onChange={e => this.props.handleChange(e.target.value)}/>
                <ol>
                    {locations.map(loc => (
                        <li aria-label="item from list of places" className="item-list" key={loc.venue.id}>
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