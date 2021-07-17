/* eslint-disable jsx-a11y/no-redundant-roles */
import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartDataContext } from '../../context/CartDataContext';
import { sumCartCosts, sumItemCost } from '../../scripts/utilities';
import QuantitySelect from '../Inputs/QuantitySelect';

export default function Cart() {
    const [cartItems, dispatch] = useContext(CartDataContext);
    const totalCost = sumCartCosts(cartItems);

    useEffect(() => {
        document.title = 'Shopping Cart | Enbious';
    }, []);

    const handleUpdateItem = (e, index) => {
        return dispatch({
            type: 'UPDATE_QUANTITY',
            payload: {
                ...cartItems[index],
                quantity: Number(e.target.value),
            },
        });
    };

    const handleRemoveItem = (index) => {
        return dispatch({
            type: 'REMOVE_FROM_CART',
            payload: {
                ...cartItems[index],
            },
        });
    };

    return (
        <div>
            {cartItems.length ? (
                <div>
                    <ul role='list' aria-label='Shopping cart'>
                        {cartItems.map((cartItem, cartIndex) => {
                            const itemCost = sumItemCost(cartItem);

                            return (
                                <li key={cartIndex}>
                                    <div>{cartItem.name}</div>
                                    <div>{cartItem.quantity}</div>
                                    <QuantitySelect
                                        changeEvent={(e) => {
                                            handleUpdateItem(e, cartIndex);
                                        }}
                                        inputId='quantity'
                                        stock={cartItem.stock}
                                        quantity={cartItem.quantity}
                                    />
                                    <div>${itemCost}</div>
                                    <button
                                        onClick={() => {
                                            handleRemoveItem(cartIndex);
                                        }}
                                    >
                                        Delete
                                    </button>
                                </li>
                            );
                        })}
                    </ul>
                    <div>Total: ${totalCost}</div>
                </div>
            ) : (
                <div>
                    Your cart is empty.
                    <Link to='/shop'>Continue shopping.</Link>
                </div>
            )}
        </div>
    );
}
