import React, { useState } from "react";
import { Card } from "./Card";
import { useSelector } from "react-redux";

export const CardContainer = () => {
  const toggle = useSelector((state) => state.toggleReducer);
  const dashboard = useSelector((state) => state.dashReducer);

  return (
    <div>
      <div>
        {dashboard.map((par, index) => {
          return <Card dashboard={par} key={index} />;
        })}
      </div>
    </div>
  );
};
