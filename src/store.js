import { createStore } from "redux";

const reducer = (state, action) => {
  if (action.type === "ADD_TO_CART") {
    return addToCart(state, action);
  } else if (action.type === "REMOVE_FROM_CART") {
    return removeFromCart(state, action);
  }
  return state;
};

const addToCart = (state, action) => {
  return {
    ...state,
    cart: state.cart.concat(action.product)
  };
};

const removeFromCart = (state, action) => {
  return {
    ...state,
    cart: state.cart.filter(pro => pro.id !== action.product.id)
  };
};

export default createStore(reducer, { cart: [] });
