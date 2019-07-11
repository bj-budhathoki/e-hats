import { combineReducers } from "redux";
import user from "./userReducer";
import cart from './cartReducer'
export default combineReducers({
  user,
  cart
});
