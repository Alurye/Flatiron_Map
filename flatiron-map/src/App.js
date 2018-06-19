import React, { Component } from 'react';
// impsort Leaflet from 'leaflet';

import logo from './logo.svg';
import './App.css';
import FIMap from './components/fimap.js';
import Schedule from './components/schedule.js';
import ReservationForm from './components/reservation_form.js';


class App extends Component {
  render() {
    return (
      <div className="App">
        <ReservationForm />
        <FIMap />
      </div>
    );
  }
}

export default App;
