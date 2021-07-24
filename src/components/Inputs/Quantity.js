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
            <button
                onClick={decrementEvent}
                disabled={quantity === 1 || !stock}
            >
                -
            </button>
            <input
                id={`quantity-${inputId}`}
                type='number'
                min='1'
                max={stock}
                value={quantity}
                onChange={changeEvent}
                disabled={!stock}
            />
            <button
                onClick={incrementEvent}
                disabled={quantity === stock || !stock}
            >
                +
            </button>
        </div>
    );
}
