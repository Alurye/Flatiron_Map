import React, { Component } from 'react';
import { Icon, Label, Menu, Table } from 'semantic-ui-react'

export default class Schedule extends Component {
  render(){
    console.log("schedule level", this.props.events)
    return(
      <div>
        {this.props.events.length === 0 ? null : <Table celled><Table.Row><Table.HeaderCell></Table.HeaderCell><Table.HeaderCell>{this.props.events[0].room_name}</Table.HeaderCell><Table.HeaderCell></Table.HeaderCell></Table.Row><Table.Row>
          <Table.HeaderCell>Event Name</Table.HeaderCell>
          <Table.HeaderCell>Event Time</Table.HeaderCell>
        </Table.Row>{this.props.events.map(ev => {
          let datetime = new Date(ev.time).toLocaleString()
          return <Table.Row>
            <Table.Cell>{ev.title}</Table.Cell>
            <Table.Cell>{datetime}</Table.Cell>
          </Table.Row>
        })}</Table>}
      </div>
    )
  }
}
