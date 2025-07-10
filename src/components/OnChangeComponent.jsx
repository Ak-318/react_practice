// onChange: event handler used primarily with form elements 
//          ex: <input>, <textarea>, <select>, <radio>
//          Triggers a function every time the value of the input changes

import React, {useState} from 'react';

function OnChangeComponent(){

    const [name, setName] = useState('')
    const [quantity, setQuantity] = useState(0)
    const [text, setText] = useState('')
    const [stype, setType] = useState('')
    const [payment, setPayment] = useState('')


    function handleName(event) {
        setName(event.target.value)
    }

    function handleQuantity(event) {
        setQuantity(event.target.value)
    }

    function handleText(event) {
        setText(event.target.value);
    }

    function handleType(event) {
        setType(event.target.value);
    }

    function handlePayment(event) {
        setPayment(event.target.value);
    }

    return(
        <div>
            <p>Name: <input value={name} onChange={handleName}/></p>
            <p>Name: {name}</p>

            <p>Quantity: <input value={quantity} onChange={handleQuantity} type="number"/></p>
            <p>Quantity: {quantity}</p>

            <p>Comments: <textarea placeholder="Please add comments" value={text} onChange={handleText} /></p>
            <p>Comments: {text}</p>

            <label>
                <input type="radio" value= 'Pick Up' 
                        checked={stype === 'Pick Up'} 
                        onChange={handleType}/>
                Pick Up
            </label>

            <label>
                <input type="radio" value= 'Delivery' 
                        checked={stype === 'Delivery'} 
                        onChange={handleType}/>
                Delivery
            </label> <br/>
            <br/>

            <select value={payment} onChange={handlePayment}>
                <option value="">Select Payment Option</option>
                <option value="Visa">Visa</option>
                <option value="MasterCard">Master Card</option>
                <option value="Rupay">Rupay</option>
            </select>

        </div>
    ); 
}

export default OnChangeComponent