import { applyMiddleware, combineReducers, createStore } from "redux";

import CategoryReducer from "./reducers/catregory.reducer";
import ProductReducer from "./reducers/products.reducer";
import thunk from "redux-thunk";

const RootReducer = combineReducers({
  categories: CategoryReducer,
  products: ProductReducer,
});

export default createStore(RootReducer, applyMiddleware(thunk));