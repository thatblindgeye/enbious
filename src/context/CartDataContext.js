import { createContext, useState } from 'react';

const CartDataContext = createContext();

function CartDataContextProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  return (
    <CartDataContext.Provider value={[cartItems, setCartItems]}>
      {children}
    </CartDataContext.Provider>
  );
}

export { CartDataContext, CartDataContextProvider };
