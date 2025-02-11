import React, { useState } from "react";
import car from "../../assets/images/car.png";
import { useSelector } from "react-redux";

export default function Car() {
  const isTopLane = useSelector((store) => store.car.isTopLane);

  return (
    <>
      <img
        style={{ left: 10 }}
        src={car}
        className={"car " + (isTopLane ? "top-lane" : "bot-lane")}
      />
    </>
  );
}
