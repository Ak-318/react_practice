import React, {Component} from 'react'
import ChildComponent from './ChildComponent'

class Parent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            parentName: 'Parent'
        }

        this.greetParent = this.greetParent.bind(this)
    }

    greetParent(child) {
        alert(`Hello ${this.state.parentName} from ${child}`)
    }

    render() {
        return(
            <div>
                <ChildComponent greetParents={this.greetParent}/>
            </div>
        ) 
    }
}

export default Parent