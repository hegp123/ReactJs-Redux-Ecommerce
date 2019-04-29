import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";

const products = (state = [], action) => {
  if (action.type === "REPLACE_PRODUCTS") {
    return action.products;
  }
  return state;
};

const cart = (state = [], action) => {
  if (action.type === "ADD_TO_CART") {
    return addToCart(state, action);
  } else if (action.type === "REMOVE_FROM_CART") {
    return removeFromCart(state, action);
  }
  return state;
};

const addToCart = (state, action) => {
  return state.concat(action.product);
};

const removeFromCart = (state, action) => {
  return state.filter(pro => pro.id !== action.product.id);
};
const logger = store => next => action => {
  console.log("dispatching", action);
  let result = next(action);
  console.log("next state", store.getState());
  return result;
};
export default createStore(
  combineReducers({ cart, products }),
  applyMiddleware(logger, thunk)
);
