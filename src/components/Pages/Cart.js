/* eslint-disable jsx-a11y/no-redundant-roles */
import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartDataContext } from '../../context/CartDataContext';

export default function Cart() {
  const [cartItems, dispatch] = useContext(CartDataContext);

  useEffect(() => {
    document.title = 'Shopping Cart | Enbious';
  }, []);

  return (
    <div>
      {cartItems.length ? (
        <div>
          <ul role='list' aria-label='Shopping cart'>
            {cartItems.map((cartItem, cartIndex) => {
              return (
                <li key={cartIndex}>
                  <div>{cartItem.name}</div>
                  <div>{cartItem.quantity}</div>
                </li>
              );
            })}
          </ul>
        </div>
      ) : (
        <div>
          Your cart is empty. <Link to='/shop'>Continue shopping</Link>.
        </div>
      )}
    </div>
  );
}
