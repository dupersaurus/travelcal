import React, { Component } from 'react'

export default class Destination extends Component {
  render() {
    return (
      <div className="destination" style={{backgroundColor: this.props.destination.color}}>
        {this.props.destination.name}
      </div>
    )
  }
}
