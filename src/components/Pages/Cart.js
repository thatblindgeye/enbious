import React, { useEffect } from 'react';

export default function Cart() {
  useEffect(() => {
    document.title = 'Your Cart | Enbious';
  }, []);

  return <div>Shopping Cart</div>;
}
