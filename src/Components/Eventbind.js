import React, { Component } from 'react'

export default class Eventbind extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         messege:"hello"
      }
    }
    clickhandler=()=>{
        this.setState({messege:"goodbye"})
    }
  render() {
    return (
      <div>
        <div>{this.state.messege}</div>
        <button onClick={this.clickhandler}>click</button>
      </div>
    )
  }
}
