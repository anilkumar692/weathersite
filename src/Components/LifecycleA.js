import React, { Component } from 'react'

export default class LifecycleA extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       name:'anil'
    }
    console.log('lifecycleA constructor')
  }
  static getDerivedStateFromProps(props,state){
    console.log("getderivedstatefromprops")
    return null
  }
  componentDidMount(){
    console.log('lifecycle A component did mount')
  }
  render() {
    console.log('lifecycle a render')
    return (
     
      <div>LifecycleA</div>
    )
  }
}
