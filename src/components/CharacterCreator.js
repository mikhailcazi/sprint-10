import { useState } from "react";

export default function CharacterCreator() {
  const [char, setChar] = useState({ head: "1", torso: "1", shoes: "1" });

  return (
    <div>
      <div>
        <button onClick={() => {}}>{"<"}</button>
        <img
          src={`/images/head_${char.head}.jpg`}
          alt={`Head ${char.head}`}
        ></img>
        <button onClick={() => {}}>{">"}</button>
      </div>
      <div>
        <button onClick={() => {}}>{"<"}</button>
        <img
          src={`/images/torso_${char.torso}.jpg`}
          alt={`Torso ${char.torso}`}
        ></img>
        <button onClick={() => {}}>{">"}</button>
      </div>
      <div>
        <button onClick={() => {}}>{"<"}</button>
        <img
          src={`/images/shoes_${char.shoes}.jpg`}
          alt={`Shoes ${char.shoes}`}
        ></img>
        <button onClick={() => {}}>{">"}</button>
      </div>
    </div>
  );
}
