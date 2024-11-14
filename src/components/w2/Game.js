import React from "react";
import Background from "./Background";
import Car from "./Car";
import Controls from "./Controls";

export default function Game() {
  return (
    <>
      <div>
        <Car />
        <Background />
      </div>
      <div style={{ position: "absolute", top: "50%" }}>
        <Controls />
      </div>
    </>
  );
}
