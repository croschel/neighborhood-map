import React, { Component } from 'react';

class Header extends Component{
    render(){
        return(
            <header>
<               h1>Neighborhood Map</h1>
                <p className="description">We are using Foursquare and Google Maps API</p>
            </header>
            
        )
    }
}

export default Header;