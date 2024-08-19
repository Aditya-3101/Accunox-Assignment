import React from "react";
import { SubHeader } from "./SubHeader";
import { CardContainer } from "./CardContainer";
import { OverLay } from "./OverLay";
import { useSelector } from "react-redux";

export const Dashboard = () => {
  const toggle = useSelector((state) => state.toggleReducer);

  return (
    <div className="bg-[#f0f5fa] w-full relative">
      <SubHeader />
      <CardContainer />
      {toggle && <OverLay />}
    </div>
  );
};
