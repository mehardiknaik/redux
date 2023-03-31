import React from "react";
import { useDispatch } from "react-redux";
import { setCounter, setDecrement, setIncrement } from "../store/action";

const LeftContainer = () => {
  const dispatch = useDispatch();
  return (
    <div className="flex-1 flex gap">
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
        Increment
      </button>
    </div>
  );
};

export default LeftContainer;
