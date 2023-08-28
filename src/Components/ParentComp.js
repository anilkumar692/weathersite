import React, { Component } from 'react'
import Regcomp from './Regcomp';
import PureComp from './PureComp';

class ParentComp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:'anil'
      }
    }
    componentDidUpdate(){
        setInterval(() => {
           this.setState({
            name:"anil"
           }) 
        }, 2000);
    }
  render() {
    return (
      <div>ParentComp
        <Regcomp names={this.state.name}></Regcomp>
        <PureComp names={this.state.name}></PureComp>
      </div>
    )
  }
}

export default ParentComp