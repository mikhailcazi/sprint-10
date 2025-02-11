import { useContext, useReducer, useState } from "react";
import { CharContext } from "../context/charContext";
import { useDispatch, useSelector } from "react-redux";
import { changeName } from "../state/simSlice";

export default function CharacterForm({ handleChange }) {
  const name = useContext(CharContext);

  // const [name, setName] = useState("Maxime");
  const [char, setChar] = useState({
    head: 0,
    torso: 0,
    shoes: 0,
  });

  return (
    <div style={{ padding: 100 }}>
      <h4>These are {name}'s properties:</h4>
      <div className="char-form-div">
        <label>Head type:</label>
        <span>{char.head}</span>
      </div>
      <div className="char-form-div">
        <label>Torso type:</label>
        <span>{char.torso}</span>
      </div>
      <div className="char-form-div">
        <label>Shoe type:</label>
        <span>{char.shoes}</span>
      </div>

      <button
        onClick={() => {
          handleChange((Math.random() + 1).toString(36).substring(7));
        }}
      >
        Randomize name
      </button>
    </div>
  );
}
