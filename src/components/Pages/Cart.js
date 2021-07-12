import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartDataContext } from '../../context/CartDataContext';

export default function Cart() {
  const [cartItems] = useContext(CartDataContext);

  useEffect(() => {
    document.title = 'Shopping Cart | Enbious';
  }, []);

  return cartItems.length ? (
    <div>You have {cartItems.length} items in your cart.</div>
  ) : (
    <div>
      Your cart is empty. <Link to='/shop'>Continue shopping</Link>.
    </div>
  );
}
