function sumItemCost(cartData) {
  return (cartData.price * cartData.quantity).toFixed(2);
}

function sumCartCosts(cartData) {
  const totalCost = cartData.map((cartItem) => {
    return cartItem.quantity * cartItem.price;
  });

  const summedCost = totalCost.reduce((total, current) => total + current, 0);

  return summedCost.toFixed(2);
}

function sumQuantities(cartData) {
  const totalQuantity = cartData.map((cartItem) => {
    return cartItem.quantity;
  });

  return totalQuantity.reduce((total, current) => total + current, 0);
}

export { sumCartCosts, sumItemCost, sumQuantities };
