import React from "react";
import { counterSelector } from "../store/selector/counter";
import { useSelector } from "react-redux";
import { userSelector } from "../store/selector/user";

const RightContainer = () => {
  const selectedTime = useSelector(counterSelector);
  const user = useSelector(userSelector);

  return (
    <div className="flex-1">
      <p>{selectedTime}</p>
      <p>{!!user.length && user.map((e: any) => <div>{e.first_name}</div>)}</p>
    </div>
  );
};

export default RightContainer;
