import { createContext, useReducer } from 'react';
import cartReducer from '../reducers/cartReducer';

const CartDataContext = createContext();
const initialState = [];

function CartDataContextProvider({ children }) {
  const [cartItems, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartDataContext.Provider value={[cartItems, dispatch]}>
      {children}
    </CartDataContext.Provider>
  );
}

export { CartDataContext, CartDataContextProvider };
