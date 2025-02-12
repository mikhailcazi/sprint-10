import { useContext, useReducer, useState } from "react";
import { formReducer } from "../state/formReducer";
import { ThemeContext } from "../context/themeContext";

export default function Form() {
  const initState = {
    name: "",
    email: "",
    password: "",
    colour: "",
  };

  const [state, dispatch] = useReducer(formReducer, initState);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted!", state);
  };

  const setInput = (key, value) =>
    dispatch({ type: "SET_INPUT", payload: { key, value } });

  const theme = useContext(ThemeContext);
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <p>Theme: {theme}</p>
        <label>Name:</label>
        <input
          className={theme === "dark" ? "input-dark" : "input-light"}
          type="text"
          value={state.name}
          onChange={(e) => setInput("name", e.target.value)}
        ></input>
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={state.email}
          onChange={(e) => setInput("email", e.target.value)}
        ></input>
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={state.password}
          onChange={(e) => setInput("password", e.target.value)}
        ></input>
      </div>

      <div>
        <label>Favourite Colour:</label>
        <input
          type="text"
          value={state.colour}
          onChange={(e) => setInput("colour", e.target.value)}
        ></input>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}
