import React, { PureComponent } from 'react'

export default class Purecomp1 extends PureComponent {
  constructor(props) {
    super(props)
  
    this.state = {
       count:1
    }
  }
  componentDidMount(){
    setInterval(() => {
      this.setState({count:this.state.count})
    },2000);
 
  }
  render() {
    console.log("cha")
    return (
      <div>
{this.state.count}
      </div>
    )
  }
}
