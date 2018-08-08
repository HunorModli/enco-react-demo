import { combineReducers } from "redux";
import DecrementReducer from "./counter-decrement";
import IncrementReducer from "./counter-increment";

// const initialState = {
//   count: 0
// };

// function DefaultReducer(state = initialState, action) {
//   return state;
// }

const combined = combineReducers({
  DecrementReducer,
  IncrementReducer
});

export default combined;