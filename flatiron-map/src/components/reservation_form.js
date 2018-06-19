import React, { Component } from 'react';

export default class ReservationForm extends Component {
  render(){
    return(
      <form>
        <label>Event Title</label>
        <input type='text' id='event-title'/><br/>
        <label>Time</label>
        <input type='time' id='time'/><br/>
        <label>Room</label>
        <select id='room'>
          <option value="phone-booth-1">Phone Booth 1</option>
          <option value="phone-booth-2">Phone Booth 2</option>
          <option value="phone-booth-3">Phone Booth 3</option>
          <option value="phone-booth-4">Phone Booth 4</option>
          <option value="phone-booth-5">Phone Booth 5</option>
          <option value="phone-booth-6">Phone Booth6</option>
          <option value ="turing">Turing</option>
          <option value ="kay">Kay</option>
          <option value ="babbage">Babbage</option>
        </select>
      </form>
    )
  }
}
