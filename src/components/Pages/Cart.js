/* eslint-disable jsx-a11y/no-redundant-roles */
import React, { useEffect, useContext, useState } from 'react';
import { CartDataContext } from '../../context/CartDataContext';
import { sumCartCosts } from '../../scripts/utilities';
import CartCard from '../Cart/CartCard';

export default function Cart() {
    const [cartItems, dispatch] = useContext(CartDataContext);
    const [isCheckedOut, setIsCheckedOut] = useState(false);
    const totalCost = sumCartCosts(cartItems);

    useEffect(() => {
        document.title = 'Shopping Cart | Enbious';
    }, []);

    const checkoutCart = () => {
        setIsCheckedOut(true);

        return dispatch({
            type: 'CLEAR_CART',
        });
    };

    return !isCheckedOut ? (
        <div>
            {cartItems.length ? (
                <div>
                    <ul role='list' aria-label='Shopping cart'>
                        {cartItems.map((cartItem, cartIndex) => {
                            return (
                                <li key={cartIndex}>
                                    <CartCard cartItem={cartItem} />
                                </li>
                            );
                        })}
                    </ul>
                    <div>Total: ${totalCost}</div>
                    <button onClick={checkoutCart}>Place Order</button>
                </div>
            ) : (
                <div>
                    <div className='empty-cart-msg'>Your cart is empty.</div>
                </div>
            )}
        </div>
    ) : (
        <div>Your order has been placed!</div>
    );
}
