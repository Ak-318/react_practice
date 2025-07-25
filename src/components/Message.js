import React, {Component} from 'react'

class Message extends Component {
    constructor() {
        super()
        this.state = {
            message: 'Welcome to the Channel'
        }

    }

    changeName() {
        this.setState({
            message: 'Thanks for Subscribe'
        })
    }

    render() {
        return (
            <div>
                <h1> {this.state.message}</h1>
                <button onClick = {() => {this.changeName()}}>Subscribe</button>
            </div>
        )
    } 
}

export default Message