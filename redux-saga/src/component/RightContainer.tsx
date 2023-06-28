import React from "react";
import { counterSelector } from "../store/selector/counter";
import { useSelector } from "react-redux";
import { userSelector } from "../store/selector/user";

const RightContainer = () => {
  const selectedTime = useSelector(counterSelector);
  const user = useSelector(userSelector);

  return (
    <div className="flex-1">
      <div>{selectedTime}</div>
      <div>
        {!!user.length &&
          user.map((e: any) => <div key={e.first_name}>{e.first_name}</div>)}
      </div>
    </div>
  );
};

export default RightContainer;
