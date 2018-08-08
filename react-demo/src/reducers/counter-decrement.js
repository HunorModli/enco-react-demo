import { COUNTER_DECREMENT } from "../actions/counter-decrement";

export default function (state = {}, action) {
  switch (action.type) {
    case COUNTER_DECREMENT:
      return {
        count: state.count - 1
      };
    default:
      return state;
  }
}