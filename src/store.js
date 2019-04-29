import { createStore, applyMiddleware } from "redux";

const reducer = (state, action) => {
  if (action.type === "REPLACE_PRODUCTS") {
    return {
      ...state,
      products: action.products
    };
  } else if (action.type === "ADD_TO_CART") {
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
const logger = store => next => action => {
  console.log("dispatching", action);
  let result = next(action);
  console.log("next state", store.getState());
  return result;
};
export default createStore(
  reducer,
  { cart: [], products: [] },
  applyMiddleware(logger)
);
