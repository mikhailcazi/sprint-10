import React, { useState } from "react";
import { useSelector } from "react-redux";

export default function Background() {
  const distance = 10;
  const WIDTH = 612;
  const speed = useSelector((state) => state.car.speed);

  const [pos1, setPos1] = useState(0);
  const [pos2, setPos2] = useState(WIDTH);
  const [pos3, setPos3] = useState(WIDTH * 2);

  setTimeout(() => {
    setPos1(pos1 < -WIDTH ? (WIDTH - distance) * 2 : pos1 - distance);
    setPos2(pos2 < -WIDTH ? (WIDTH - distance) * 2 : pos2 - distance);
    setPos3(pos3 < -WIDTH ? (WIDTH - distance) * 2 : pos3 - distance);
  }, 5000 / speed);

  return (
    <>
      <img
        className="bg-image"
        src="images/background.png"
        style={{ left: pos1 + "px" }}
      ></img>
      <img
        className="bg-image"
        src="images/background.png"
        style={{ left: pos2 + "px" }}
      ></img>
      <img
        className="bg-image"
        src="images/background.png"
        style={{ left: pos3 + "px" }}
      ></img>

      <p style={{ position: "absolute", color: "white" }}>Speed: {speed}</p>
    </>
  );
}
