import React from 'react';
import { ReactComponent as IncrementIcon } from '../../assets/images/icons/increment.svg';
import { ReactComponent as DecrementIcon } from '../../assets/images/icons/decrement.svg';

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
                className='qty-decrement-button button-quantity'
                onClick={decrementEvent}
                disabled={quantity === 1 || !stock}
                aria-label='decrease quantity'
            >
                <DecrementIcon className='button-icon' />
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
                className='qty-increment-button button-quantity'
                onClick={incrementEvent}
                disabled={quantity === stock || !stock}
                aria-label='increase quantity'
            >
                <IncrementIcon className='button-icon' />
            </button>
        </div>
    );
}
