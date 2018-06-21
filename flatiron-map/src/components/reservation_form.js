import React, { Component } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'

export default class ReservationForm extends Component {
  constructor(props){
    console.log(props)
    super(props)
    this.state = {
      eventName: "",
      time: "",
      room: "",
      room_id: ""
    }
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTimeChange = this.handleTimeChange.bind(this);
    this.handleRoomChange = this.handleRoomChange.bind(this);
  }


  handleSubmit(event){

    event.preventDefault()
    console.log('title', this.state.eventName, "time", this.state.time, "room_name", this.state.room)
    fetch('http://localhost:3000/api/v1/events', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title: this.state.eventName,
        time: this.state.time,
        room_name: this.state.room,
        room_id: this.state.room_id
      })
    })
    .then(res => res.json())
    .then(json => console.log(json))
    .then(this.setState({
      eventName: "",
      time: "",
      room: "",
      room_id: ""
    }))
  }
  handleNameChange(event){
    this.setState({
      eventName: event.target.value
    });
  }

  handleTimeChange(event){
    this.setState({
      time: event.target.value
    })
  }

  // handleFormInput = (e) => {
  //   this.setState({
  //     [e.target.name]: e.target.value
  //   });
  // }

  handleRoomChange(event){
    event.preventDefault();
    const idNumber = this.props.rooms.find(aRoom => aRoom.name === event.target.value);

    this.setState({
      room: event.target.value,
      room_id: idNumber.id
    })
  }



  render(){
    return(
      <div>
        <h2>Create Event</h2>
      <Form onSubmit={this.handleSubmit}>
        <Form.Input label="Title" onChange={this.handleNameChange} name="title" value={this.state.eventName} type='text' id='event-title'/>

        <Form.Input label="Time" type='datetime-local' name="datetime" value={this.state.time} onChange={this.handleTimeChange} id='time'/>
        <Form.Field label="Room" control="select" id='room' value={this.state.room} onChange={this.handleRoomChange}>
          {this.props.rooms.map(room =>{return <option value={room.name} id={room.id} key={room.id}>{room.name}</option>})}
        </Form.Field>

        <Button type='submit'>Submit</Button>
      </Form>
    </div>
    )
  }
}
