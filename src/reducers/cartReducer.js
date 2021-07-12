function searchForItemIndex(dataToSearch, itemId) {
  let itemIndex;

  dataToSearch.forEach((item, index) => {
    if (item.id === itemId) {
      itemIndex = index;
    }
  });

  return itemIndex;
}

const cartReducer = (state, action) => {
  const { payload, type } = action;
  const itemInCart = searchForItemIndex(state, action.payload.id);

  switch (type) {
    case 'ADD_ITEM':
      if (itemInCart >= 0) {
        const newQuantity = state[itemInCart].quantity + payload.quantity;

        const cartAfterQuantityAdd = state.map((item) => {
          if (item.id === payload.id) {
            return { ...item, quantity: newQuantity };
          }
          return item;
        });

        return [...cartAfterQuantityAdd];
      } else {
        return [...state, payload];
      }
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
