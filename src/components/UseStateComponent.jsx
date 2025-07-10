//useState: A react hook that allows to the create stateful variable and a setter function to update it's value in the virtual DOM[name, setName]
import React, {useState} from 'react';

function UseStateComponent(){

    const [count, setCount] = useState(0);

    const setIncrement = () => {
        {setCount(count + 1)}
    }

    const setDecrement = () => {
        {setCount(count - 1)}
    }

    const setReset = () => {
        {setCount(0)}
    }

    return( <div className='counter-container'>
                <p className="count-display">{count}</p>
                <button className="button-style" onClick={setIncrement}>Increment</button>
                <button className="button-style" onClick={setReset}>Reset</button>
                <button className="button-style" onClick={setDecrement}>Decrement</button>
            </div>);
}

export default UseStateComponent