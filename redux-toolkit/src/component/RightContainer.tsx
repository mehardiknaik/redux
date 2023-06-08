import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import {
  useGetAllPokemonQuery,
  useGetPokemonByNameQuery,
} from "../services/pokemon";

const RightContainer = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const { data } = useGetPokemonByNameQuery("bulbasaur");
  const {
    data: allData,
    error,
    isFetching,
    isLoading,
    ...rest
  } = useGetAllPokemonQuery();
  console.log(rest);

  if (isLoading) return "Loading...";
  if (isFetching) return "Featching...";

  if (error) return error;

  return (
    <div className="flex-1">
      <p>{count}</p>
      <p>
        {!!allData?.results?.length &&
          allData?.results?.map((e: any) => <div>{e.name}</div>)}
      </p>
    </div>
  );
};

export default RightContainer;
