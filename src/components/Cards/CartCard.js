import React, { useContext } from 'react';
import { CartDataContext } from '../../context/CartDataContext';
import Quantity from '../Inputs/Quantity';
import { sumItemCost } from '../../scripts/utilities';

export default function CartItem({ cartItem, itemCost }) {
    const [, dispatch] = useContext(CartDataContext);
    const { name, quantity, stock } = cartItem;

    const handleQuantityChange = (e) => {
        return dispatch({
            type: 'UPDATE_QUANTITY',
            payload: {
                ...cartItem,
                quantity: Number(e.target.value),
            },
        });
    };

    const handleQuantityIncrement = () => {
        if (quantity === stock) return;
        return dispatch({
            type: 'UPDATE_QUANTITY',
            payload: {
                ...cartItem,
                quantity: quantity + 1,
            },
        });
    };

    const handleQuantityDecrement = () => {
        if (quantity === 1) return;
        return dispatch({
            type: 'UPDATE_QUANTITY',
            payload: {
                ...cartItem,
                quantity: quantity - 1,
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
                changeEvent={handleQuantityChange}
                incrementEvent={handleQuantityIncrement}
                decrementEvent={handleQuantityDecrement}
                inputId='quantity'
                stock={stock}
                quantity={quantity}
            />
            <div>${sumItemCost(cartItem)}</div>
            <button onClick={handleRemoveItem}>Delete</button>
        </div>
    );
}
