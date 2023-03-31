import { DECREMENT, INCREMENT, UPDATE_COUNT } from "../actionTypes/counter";

export const setCounter = (payload: number) => ({
  type: UPDATE_COUNT,
  payload,
});
export const setIncrement = () => ({
  type: INCREMENT,
});
export const setDecrement = () => ({
  type: DECREMENT,
});
