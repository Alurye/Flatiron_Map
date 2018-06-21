import React, { Component } from 'react';
// impsort Leaflet from 'leaflet';

import logo from './logo.svg';
import './App.css';
import FIMap from './components/fimap.js';
import Schedule from './components/schedule.js';
import Sidebar from './components/sidebar';
import SplashScreen from './components/splashscreen.js';


class App extends Component {
  constructor(){
    super()
    this.state = {
      rooms: [],
      splashClicked: false
    }
  }


  roomFetch = () => {
    fetch('http://localhost:3000/api/v1/rooms')
      .then(res => res.json())
      .then(json => this.setState({
        rooms: json
      }, console.log("room state", this.state.rooms)))
  }

  closeSplashScreen = () => {
    this.setState({
      splashClicked: true
    })
  }

  componentDidMount(){
    this.roomFetch()
  }

  render() {
    return (
      <div className="App">
        {this.state.splashClicked ? <React.Fragment><Sidebar rooms={this.state.rooms}/><FIMap /></React.Fragment>: <SplashScreen clickHandler={this.closeSplashScreen} />}
      </div>
    );
  }
}

export default App;
