import React, { useContext, useEffect } from 'react';
import { CartDataContext } from '../../context/CartDataContext';
import Quantity from '../Inputs/Quantity';

export default function CartItem({ cartItem, itemCost }) {
    const [, dispatch] = useContext(CartDataContext);
    const { name, quantity, stock } = cartItem;

    const handleUpdateItem = (e) => {
        return dispatch({
            type: 'UPDATE_QUANTITY',
            payload: {
                ...cartItem,
                quantity: Number(e.target.value),
            },
        });
    };

    const handleRemoveItem = (index) => {
        return dispatch({
            type: 'REMOVE_FROM_CART',
            payload: {
                ...cartItem,
            },
        });
    };

    return (
        <div>
            <div>{name}</div>
            <div>{quantity}</div>
            <Quantity
                changeEvent={handleUpdateItem}
                inputId='quantity'
                stock={stock}
                quantity={quantity}
            />
            <div>${itemCost}</div>
            <button onClick={handleRemoveItem}>Delete</button>
        </div>
    );
}
