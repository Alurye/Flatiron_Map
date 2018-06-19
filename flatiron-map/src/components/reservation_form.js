import React, { Component } from 'react';

export default class ReservationForm extends Component {
  constructor(props){
    console.log(props)
    super(props)
    this.state = {
      eventName: "",
      time: "",
      room: {}
    }
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTimeChange = this.handleTimeChange.bind(this);
    this.handleRoomChange = this.handleRoomChange.bind(this);
  }

  componentWillReceiveProps(nextProps){
    this.setState({
      room: nextProps.rooms[0]
    })
  }

  handleSubmit(event){
    event.preventDefault()
    console.log('title', this.state.eventName, "time", this.state.time, "room_id", this.state.room.id, "room_name", this.state.room.name)
    fetch('http://localhost:3000/api/v1/events', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title: this.state.eventName,
        time: this.state.time,
        room_name: this.state.room.name,
        room_id: this.state.room.id
      })
    })
    .then(res => res.json)
    .then(json => console.log(json))
  }
  handleNameChange(event){
    this.setState({
      eventName: event.target.value
    }, console.log("eventName is", this.state.eventName))
  }

  handleTimeChange(event){
    this.setState({
      time: event.target.value
    })
  }

  handleRoomChange(event){
    this.setState({
      room: event.target.value
    }, console.log("room is", this.state.room))
  }



  render(){
    // console.log("after props received room is:", this.state.room)
    return(
      <form onSubmit={this.handleSubmit}>
        <label>Title
        <input onChange={this.handleNameChange} value={this.state.eventName} type='text' id='event-title'/>
        </label><br/>
        <label>Time
        <input type='datetime-local' value={this.state.time} onChange={this.handleTimeChange} id='time'/>
        </label><br/>
        <label>Room
        <select id='room' value={this.state.room} onChange={this.handleRoomChange}>
          {this.props.rooms.map(room =>{return <option value={room} key={room.id}>{room.name}</option>})}
        </select>
      </label><br/>
        <input type='submit' />
      </form>
    )
  }
}
