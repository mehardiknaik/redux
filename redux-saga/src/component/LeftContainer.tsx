import React from "react";
import { useDispatch } from "react-redux";
import { setCounter, setIncrement } from "../store/action";

const LeftContainer = () => {
  const dispatch = useDispatch();
  return (
    <div className="flex-1">
      <button
        onClick={() => {
          dispatch(setCounter(2));
        }}
      >
        LeftContainer
      </button>
      <button
        onClick={() => {
          dispatch(setIncrement());
        }}
      >
        INCREMENT
      </button>
    </div>
  );
};

export default LeftContainer;
