import React from 'react';

export default function Quantity({
    changeEvent,
    inputId,
    quantity,
    stock,
    decrementEvent,
    incrementEvent,
}) {
    return (
        <div className='quantity-container'>
            <label htmlFor={`quantity-${inputId}`}>Quantity</label>
            <button onClick={decrementEvent}>-</button>
            <input
                id={`quantity-${inputId}`}
                type='number'
                min='1'
                max={stock}
                value={quantity}
                onChange={changeEvent}
            />
            <button onClick={incrementEvent}>+</button>
        </div>
    );
}
