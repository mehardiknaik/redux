import React from "react";
import { counterSelector } from "../store/selector/counter";
import { useSelector } from "react-redux";

const RightContainer = () => {
  const selectedTime = useSelector(counterSelector);

  return <div className="flex-1">{selectedTime}</div>;
};

export default RightContainer;
