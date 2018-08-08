import { COUNTER_INCREMENT } from "../actions/counter-increment";

export default function (state = {}, action) {
  switch (action.type) {
    case COUNTER_INCREMENT:
      return {
        count: state.count + 1
      };

    default:
      return state;
  }
}