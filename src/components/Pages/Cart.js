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

    // Scroll back to top of page after checking out
    useEffect(() => {
        window.scrollTo({
            top: 0,
        });
    }, [isCheckedOut]);

    const handleCheckOut = () => {
        setIsCheckedOut(true);

        return dispatch({
            type: 'CLEAR_CART',
        });
    };

    return !isCheckedOut ? (
        <>
            <h1>Shopping Cart</h1>
            <div>
                {cartItems.length ? (
                    <div className='cart-container'>
                        <ul role='list' aria-label='Shopping cart'>
                            {cartItems.map((cartItem, cartIndex) => {
                                return (
                                    <li className='cart-item' key={cartIndex}>
                                        <CartCard cartItem={cartItem} />
                                        <div className='cart-divider'></div>
                                    </li>
                                );
                            })}
                        </ul>
                        <div className='checkout-container'>
                            <div className='total-cost'>
                                Total: ${totalCost}
                            </div>
                            <button
                                className='button-contained order-button'
                                onClick={handleCheckOut}
                            >
                                Place Order
                            </button>
                        </div>
                    </div>
                ) : (
                    <div>
                        <h2 className='empty-cart-msg'>Your cart is empty.</h2>
                    </div>
                )}
            </div>
        </>
    ) : (
        <h1>Your order has been placed!</h1>
    );
}
