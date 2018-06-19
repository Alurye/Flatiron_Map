import React, { Component } from 'react';
// impsort Leaflet from 'leaflet';

import logo from './logo.svg';
import './App.css';
import FIMap from './components/fimap.js';
import Schedule from './components/schedule.js';
import Sidebar from './components/sidebar';


class App extends Component {
  constructor(){
    super()
    this.state = {
      rooms: []
    }
  }

  roomFetch = () => {
    fetch('http://localhost:3000/api/v1/rooms')
      .then(res => res.json())
      .then(json => console.log(json))
  }

  componentDidMount(){
    this.roomFetch()
  }

  render() {
    return (
      <div className="App">
        <Sidebar />
        <FIMap />
      </div>
    );
  }
}

export default App;
