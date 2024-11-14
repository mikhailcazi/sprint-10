import React, { useState } from "react";
import { useSelector } from "react-redux";

export default function Car() {
  const isTopLane = useSelector((state) => state.car.isTopLane);

  return (
    <>
      <img
        style={{ left: 10 }}
        src="images/car.png"
        className={"car " + (isTopLane ? "top-lane" : "bot-lane")}
      />
    </>
  );
}
