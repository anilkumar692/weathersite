import React, { Component } from 'react'

export default class UserGreetings extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: false
        }
    }
    render() {
        if (this.state.isLoggedIn) {
            return <h1>hello anil</h1>
        }
        else {
            return <div>
                <h1>hello guest</h1>
            </div>
        }

    }
}
