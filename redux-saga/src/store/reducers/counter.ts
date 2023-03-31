import { DECREMENT, INCREMENT, UPDATE_COUNT } from "../actionTypes/counter";
import { counterType } from "../types/counter";

const initialState: counterType = {
  count: 0,
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case UPDATE_COUNT:
      return {
        ...state,
        count: action.payload,
      };
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return {
        ...state,
      };
  }
};
