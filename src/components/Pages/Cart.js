/* eslint-disable jsx-a11y/no-redundant-roles */
import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartDataContext } from '../../context/CartDataContext';
import { sumCartCosts, sumItemCost } from '../../scripts/utilities';

export default function Cart() {
  const [cartItems, dispatch] = useContext(CartDataContext);
  const totalCost = sumCartCosts(cartItems);

  useEffect(() => {
    document.title = 'Shopping Cart | Enbious';
  }, []);

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
                  <div>${itemCost}</div>
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
