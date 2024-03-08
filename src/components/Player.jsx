import React, { useState, useRef } from "react";

export default function Player() {
  //   const [playerName, setPlayerName] = useState({ name: 'Unknowed Entity', clicked: false });
  //Initially i did  it using an obejct
  //Max sir did it with an object

  const playerName = useRef();//Very easy and feasibke approach using useRefs
  const [entredValue, setEnteredValue] = useState(null);
  //const [submitted, setSubmitted] = useState(false);

  // function handleChange(event) {
  //   const { value } = event.target;
  //   setEnteredValue((prev) => {
  //     return value
  //   });
  // }

  function handleClick() {
    setEnteredValue((playerName.current.value));
  }

  //   const currentPlayer = playerName;
  return (
    <section id="player">
      <h2>Welcome {entredValue ?? 'Unknown Entity'}</h2>
      <p>
        <input ref={playerName} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
