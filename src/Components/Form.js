import React, { Component } from 'react'

 class Form extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         username:'',
         comments:'',
         skill:'react'
      }
    }
    handleusernameChange=(event)=>{
      this.setState({
        username:event.target.value
      })
     
    }
    handlecommentsChange=(event)=>{
        this.setState({
          comments:event.target.value
        })
       
      }
      handleskillChange=(event)=>{
        this.setState({
          skill:event.target.value
        })
       
      }
  render() {
    return (
      <form action="">
        <div>
            <label htmlFor="">USERNAME</label>
            <input type="text"  value={this.state.username} onChange={this.handleusernameChange}/>
        </div>
        <div>
            <label htmlFor="">comments</label>
            <textarea value={this.state.comments} onChange={this.handlecommentsChange}></textarea>

        </div>
    <div>
        <label htmlFor="">topic</label>
        <select name="" id="" value={this.state.skill} onChange={this.handleskillChange}>
            <option value="react">react</option>
            <option value="Angular">Angular</option>
            <option value="Vue">Vue</option>


        </select>
    </div>
      </form>
    )
  }
}
export default Form