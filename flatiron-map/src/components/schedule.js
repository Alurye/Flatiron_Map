import React, { Component } from 'react';

export default class Schedule extends Component {
  render(){
    console.log("schedule level", this.props.events)
    return(
      <div>
        {this.props.events.length === 0 ? null : <table><tr><th></th><th>{this.props.events[0].room_name}</th><th></th></tr><tr>
          <th>Event Name</th>
          <th>Event Time</th>
        </tr>{this.props.events.map(ev => {
          let datetime = new Date(ev.time).toLocaleString()
          return <tr>
            <td>{ev.title}</td>
            <td>{datetime}</td>
          </tr>
        })}</table>}
      </div>
    )
  }
}


<table>


</table>
