import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";

export default function User() {
  const { name } = useContext(UserContext);

  return (
    <div>
      <p>User's name is {name}</p>
    </div>
  );
}

export function UserButton() {
  const { setName } = useContext(UserContext);
  const [newName, setNewName] = useState("");

  const handleClick = (e) => {
    setName(newName);
  };

  return (
    <div>
      <input
        type="text"
        value={newName}
        onChange={(e) => setNewName(e.target.value)}
      ></input>
      <button onClick={handleClick}>Change Name</button>
    </div>
  );
}
