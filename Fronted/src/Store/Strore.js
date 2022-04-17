import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {productReducer , productDetailsReducer , userLoginReducer} from '../Features/Product/reducer';

const reducer = combineReducers({
      productsState : productReducer,
      productDetailsState:productDetailsReducer,
      userLoginState : userLoginReducer
});

let initialState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
