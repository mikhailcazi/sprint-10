import "./App.css";
import "./css/styles.css";
import Game from "./components/w2/Game";
import { Provider } from "react-redux";
import { store } from "./state/store";
import CharacterCreator from "./components/CharacterCreator";
import CharacterForm from "./components/CharacterForm";
import Pokedex from "./components/w2/Pokedex";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Game />
      </Provider>
    </div>
  );
}

export default App;
