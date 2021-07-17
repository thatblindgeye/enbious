function searchForItem(cartData, idData) {
  let itemIndex = undefined;

  cartData.forEach((item, index) => {
    if (item.id === idData) {
      itemIndex = index;
    }
  });

  return itemIndex;
}

const cartReducer = (state, action) => {
  const { payload, type } = action;
  const cartItemIndex = searchForItem(state, payload.id);

  switch (type) {
    case 'ADD_ITEM':
      if (cartItemIndex >= 0) {
        const newQuantity = state[cartItemIndex].quantity + payload.quantity;

        const cartAfterQuantityAdd = state.map((item) => {
          if (item.id === payload.id) {
            return { ...item, quantity: newQuantity };
          }
          return item;
        });
        return [...cartAfterQuantityAdd];
      }

      return [...state, payload];
    case 'UPDATE_QUANTITY':
      return [...state, payload];
    case 'REMOVE_FROM_CART':
      const cartAfterRemoval = state.filter((item) => {
        return item.id !== payload.id;
      });

      return [...cartAfterRemoval];
    default: {
      console.log('error');
    }
  }
};

export default cartReducer;
