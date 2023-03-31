import { FETCH_USER_FAILURE, FETCH_USER_REQUEST, FETCH_USER_SUCCESS } from "../actionTypes";
import { userDataType } from "../types/user";

const initialState: userDataType = {
  userData: [],
  userDataError: null,
};
export default (state = initialState, action: any) => {
  
    switch (action.type) {
      case FETCH_USER_REQUEST:
        return {
          ...state,
        };
      case FETCH_USER_SUCCESS:
        return {
          ...state,
          userData: action.payload.data,
        };
      case FETCH_USER_FAILURE:
        return {
          ...state,
          userDataError: action.payload.error,
        };
      default:
        return {
          ...state,
        };
    }
  };
  