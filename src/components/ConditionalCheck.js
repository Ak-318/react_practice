import React, { Component } from 'react'

class ConditionalCheck extends Component {
    constructor() {
        super() 
        this.state = {
            isLoggedIn: true
        }
    }

    isToggled() {
        // console.log(props.isLoggedIn)
        // if (props.isLoggedIn) {
        //    return <div>Hi this is the AK....:)</div>
        // } else {
        //     return <div>Welcome to the WebPage</div>
        // }

        this.setState({ isLoggedIn  : !this.state.isLoggedIn })
        // return (
        //     <div>
        //         if (props.isLoggedIn) {
        //             <h1>Hi this is the AK....:)</h1>
        //         } else {
        //             <p>Welcome to the WebPage</p>
        //         }
        //     </div>
        // )

    }

    render() {
        return(
            <div>
                <button onClick = {() => this.isToggled()}>Toggle</button>
                {this.state.isLoggedIn ? <div>I am in</div> : <div>I am out</div>}
            </div>
        )
    }
}

export default ConditionalCheck;
