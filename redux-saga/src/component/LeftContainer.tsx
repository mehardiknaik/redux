import React from "react";
import { useDispatch } from "react-redux";
import { setCounter, setIncrement } from "../store/action";

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
    </div>
  );
};

export default LeftContainer;
