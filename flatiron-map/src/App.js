import React, { Component } from 'react';
// impsort Leaflet from 'leaflet';

import logo from './logo.svg';
import './App.css';
import FIMap from './components/fimap.js';
import Sidebar from './components/sidebar';
import SplashScreen from './components/splashscreen.js';


class App extends Component {
  constructor(){
    super()
    this.state = {
      rooms: [],
      splashClicked: false,
      events: [],
      selectedRoomEvents: [],
      showForm: false
    }
  }


  roomFetch = () => {
    fetch('http://localhost:3000/api/v1/rooms')
      .then(res => res.json())
      .then(json => this.setState({
        rooms: json
      }))
  }

  eventFetch = () => {
    fetch('http://localhost:3000/api/v1/events')
      .then(res => res.json())
      .then(json => this.setState({
        events: json
      }))
  }

  eventFilter = (name) => {
    const filteredEvents = this.state.events.filter(ev => {
      return ev.room_name === name
    })
    this.setState({
      selectedRoomEvents: filteredEvents
    });
  }

  nameGrabber = (name) => {
    this.eventFilter(name);
  }

  closeSplashScreen = () => {
    this.setState({
      splashClicked: true
    })
  }

  openForm = () => {
    this.setState({
      showForm: !this.state.showForm
    })
  }

  componentDidMount(){
    this.roomFetch()
    this.eventFetch()
  }

  render() {
    return (
      <div className="App">
        {this.state.splashClicked ? <React.Fragment><Sidebar showForm={this.state.showForm} events={this.state.selectedRoomEvents} rooms={this.state.rooms}/><FIMap showForm={this.openForm} nameGrabber={this.nameGrabber}/></React.Fragment>: <SplashScreen clickHandler={this.closeSplashScreen} />}
      </div>
    );
  }
}

export default App;
