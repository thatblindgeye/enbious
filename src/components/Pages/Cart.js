import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Cart({ cartItems }) {
  useEffect(() => {
    document.title = 'Your Cart | Enbious';
  }, []);

  return cartItems.length ? (
    <div>You have {cartItems.length} items in your cart.</div>
  ) : (
    <div>
      Your cart is empty. <Link to='/shop'>Continue shopping</Link>.
    </div>
  );
}
