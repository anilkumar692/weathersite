import React, { Component } from 'react'
import Childcomponent from './Childcomponent'

export default class ParentComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        parentName:"parent"
      }
    }
    greetparent(){
        alert(`hello ${this.state.parentName}`)
    }
  render() {
    return (
      <div>
        <Childcomponent greethandler={this.greetparent.bind(this)}/>
      </div>
    )
  }
}
