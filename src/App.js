import "./App.css";
import "./css/styles.css";
import CharacterCreator from "./components/CharacterCreator";
import Form from "./components/Form";
import { ToDo } from "./components/todolist";
import { ThemeContext } from "./context/themeContext";

function App() {
  return (
    <ThemeContext.Provider value={"DARK"}>
      <div className="App">
        <CharacterCreator />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
