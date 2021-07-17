import React from 'react';
import QuantitySelect from '../Inputs/QuantitySelect';

export default function CartItem({
    name,
    quantity,
    stock,
    itemCost,
    changeEvent,
    removeEvent,
}) {
    return (
        <div>
            <div>{name}</div>
            <div>{quantity}</div>
            <QuantitySelect
                changeEvent={changeEvent}
                inputId='quantity'
                stock={stock}
                quantity={quantity}
            />
            <div>${itemCost}</div>
            <button onClick={removeEvent}>Delete</button>
        </div>
    );
}
