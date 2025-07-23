import React from 'react'
// testing

function ChildComponent(props) {
    return (
        <div>
            <button onClick = {() => props.greetParents('AK')}>Greet Parent</button>
        </div>
    )
}

export default ChildComponent