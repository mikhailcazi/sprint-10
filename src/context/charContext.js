import { createContext } from "react";

export const CharContext = createContext();

export const CharProvider = (props) => {
  return (
    <CharContext.Provider value={props.val}>
      {props.children}
    </CharContext.Provider>
  );
};
