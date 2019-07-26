import './App.css';
import React, { Component } from 'react';
import Header from "./components/Header";
import Content from "./components/Content";


class App extends Component {
  initMap(){
      let map = new window.google.maps.Map(document.getElementById('map'), {
      center: {lat: -22.922936, lng: -47.043836},
      zoom: 8
    });
  }

  loadScript(){
    let scriptElement = this.createMapScript();
    let scriptsPage = document.getElementsByTagName('script');
    let script = scriptsPage[0];
    script.parentNode.insertBefore(scriptElement,script);
    window.initMap = this.initMap;
  }

  createMapScript(){
    let mapScript = document.createElement("script");
    const API_KEY = "AIzaSyDjkUnxuYPGTxhF5Zmbu65IN_8RbdRUg3Y";
    mapScript.src = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&callback=initMap`;
    mapScript.async = true;
    mapScript.defer = true;
    return mapScript;
  }

  render(){
    this.loadScript();
    return (
      <div className="App">
        <Header></Header>
        <Content></Content>
      </div>
    );
  }
}
export default App;
