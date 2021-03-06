import React, { Component } from 'react';
import { Icon, Label, Menu, Table } from 'semantic-ui-react'

export default class Schedule extends Component {
  render(){
    console.log("schedule level", this.props.events)
    return(
      <div>
        {this.props.events.length === 0 ? null : <div>
          <h2>{this.props.events[0].room_name}</h2>
          <Table celled>
            <Table.Header>
            <Table.Row>
          <Table.HeaderCell>Event Name</Table.HeaderCell>
          <Table.HeaderCell>Event Time</Table.HeaderCell>
        </Table.Row>
        </Table.Header>
        {this.props.events.map(ev => {
          let datetime = new Date(ev.time).toLocaleString()
          return <Table.Row>
            <Table.Cell>{ev.title}</Table.Cell>
            <Table.Cell>{datetime}</Table.Cell>
          </Table.Row>
        })}</Table></div>}
      </div>
    )
  }
}
