import React, { Component } from 'react'

class Messege extends Component {
    constructor(props) {
        super(props)

        this.state = {
            messege: "welcome all visitor"
        }
    }
    changemessege=()=>{
        this.setState({
            messege:"thanks for subscribing"
        })
    }
    render() {
        return (
            <div>
                <h1>
                {this.state.messege}
                </h1>
                <button onClick={this.changemessege}>subscribe</button>
            </div>

        )
    }
}
export default Messege