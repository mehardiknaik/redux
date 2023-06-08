import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { amount, decrement, increment } from "../features/counter/counterSlice";
import {
  useGetAllPokemonQuery,
  useGetPokemonByNameQuery,
} from "../services/pokemon";

const LeftContainer = () => {
  const dispatch = useDispatch();
  const { refetch } = useGetAllPokemonQuery();
  return (
    <div className="flex-1 ">
      <div className="flex gap">
        <button
          onClick={() => {
            dispatch(increment());
          }}
        >
          Increment
        </button>
        <button
          onClick={() => {
            dispatch(amount(2));
          }}
        >
          Set to 2
        </button>
        <button
          onClick={() => {
            dispatch(decrement());
          }}
        >
          Decrement
        </button>
      </div>
      <div>
        <button onClick={refetch}>Refeatch data</button>
      </div>
    </div>
  );
};

export default LeftContainer;
