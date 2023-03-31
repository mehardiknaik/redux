import { FETCH_USER_FAILURE, FETCH_USER_REQUEST, FETCH_USER_SUCCESS } from "../actionTypes";

export const userRequest = () => ({
  type: FETCH_USER_REQUEST,
});

export const userSuccess = (payload: any) => ({
  type: FETCH_USER_SUCCESS,
  payload,
});

export const userFailure = (payload: any) => ({
  type: FETCH_USER_FAILURE,
  payload,
});
