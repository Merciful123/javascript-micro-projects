import { combineReducers } from "redux";
import catalogReducer from "./catalogReducer";
import cartReducer from "./cartReducer";

export default combineReducers({
  catalog: catalogReducer,
  cart: cartReducer
});
