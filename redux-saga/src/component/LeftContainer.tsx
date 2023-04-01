import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCounter, setDecrement, setIncrement } from "../store/action";
import { userRequest } from "../store/action/user";

const LeftContainer = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userRequest());
  }, []);
  return (
    <div className="flex-1 ">
      <div className="flex gap">
        <button
          onClick={() => {
            dispatch(setIncrement());
          }}
        >
          Increment
        </button>
        <button
          onClick={() => {
            dispatch(setCounter(2));
          }}
        >
          Set to 2
        </button>
        <button
          onClick={() => {
            dispatch(setDecrement());
          }}
        >
          Decrement
        </button>
      </div>
      <div>
        <button onClick={() => dispatch(userRequest())}>Refeatch data</button>
      </div>
    </div>
  );
};

export default LeftContainer;
