import React, { useContext } from 'react';
import { CartDataContext } from '../../context/CartDataContext';
import Quantity from '../Inputs/Quantity';
import ItemImage from '../Items/ItemImage';
import { sumItemCost } from '../../scripts/utilities';

export default function CartCard({ cartItem, itemCost }) {
    const [, dispatch] = useContext(CartDataContext);
    const { name, id, quantity, image, stock } = cartItem;

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
        return dispatch({
            type: 'UPDATE_QUANTITY',
            payload: {
                ...cartItem,
                quantity: quantity + 1,
            },
        });
    };

    const handleQuantityDecrement = () => {
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
        <div className='cart-item-container'>
            <ItemImage image={image} imageClasses='cart-item-image' />
            <div className='cart-item-name'>{name}</div>
            <div className='cart-item-price'>${sumItemCost(cartItem)}</div>
            <div className='cart-qty-container'>
                <Quantity
                    changeEvent={handleQuantityChange}
                    incrementEvent={handleQuantityIncrement}
                    decrementEvent={handleQuantityDecrement}
                    itemId={id}
                    stock={stock}
                    quantity={quantity}
                />
            </div>
            <button
                className='cart-item-delete button-delete'
                onClick={handleRemoveItem}
            >
                Delete
            </button>
        </div>
    );
}
