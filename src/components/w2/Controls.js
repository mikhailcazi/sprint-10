import React from "react";
import { useDispatch } from "react-redux";
import { accelerate, changeLane, decelerate } from "../../state/carSlice";

export default function Controls() {
  const dispatch = useDispatch();

  return (
    <>
      <button
        onClick={() => {
          dispatch(accelerate());
        }}
      >
        Faster
      </button>
      <button
        onClick={() => {
          dispatch(decelerate());
        }}
      >
        Slower
      </button>
      <button
        onClick={() => {
          dispatch(changeLane());
        }}
      >
        Switch Lane
      </button>
    </>
  );
}
