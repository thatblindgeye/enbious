/* eslint-disable jsx-a11y/no-redundant-roles */
import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartDataContext } from '../../context/CartDataContext';
import { sumCartCosts, sumItemCost } from '../../scripts/utilities';
import CartItem from '../Cards/CartCard';

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
                            const { name, quantity, stock } = cartItem;

                            return (
                                <li key={cartIndex}>
                                    <CartItem
                                        name={name}
                                        quantity={quantity}
                                        stock={stock}
                                        itemCost={itemCost}
                                        changeEvent={(e) => {
                                            handleUpdateItem(e, cartIndex);
                                        }}
                                        removeEvent={() => {
                                            handleRemoveItem(cartIndex);
                                        }}
                                    />
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
