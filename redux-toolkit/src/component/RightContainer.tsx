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
  //@ts-ignore
  if (error) return error?.status;

  return (
    <div className="flex-1">
      <div>{count}</div>
      <div>
        {!!allData?.results?.length &&
          allData?.results?.map((e: any) => <div key={e.name}>{e.name}</div>)}
      </div>
    </div>
  );
};

export default RightContainer;
