import React from 'react';

export default function Quantity({
    changeEvent,
    itemId,
    quantity,
    stock,
    decrementEvent,
    incrementEvent,
}) {
    return (
        <div className='inputs-container'>
            <button
                className='qty-decrement-button qty-button'
                onClick={decrementEvent}
                disabled={quantity === 1 || !stock}
                aria-label='decrease quantity'
            >
                -
            </button>
            <input
                id={`quantity-${itemId}`}
                className='quantity-input'
                type='number'
                min='1'
                max={stock}
                value={quantity}
                onChange={changeEvent}
                disabled={!stock}
            />
            <button
                className='qty-increment-button qty-button'
                onClick={incrementEvent}
                disabled={quantity === stock || !stock}
                aria-label='increase quantity'
            >
                +
            </button>
        </div>
    );
}
