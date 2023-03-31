import { createSelector } from "reselect";

const counter = (state: any) => state.counter;

export const counterSelector = createSelector(
  counter,
  (counter: any) => counter.count
);
