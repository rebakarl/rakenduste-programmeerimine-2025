import { useState } from "react";
import "./Dice.css";

export default function Dice() {
  const [dice, setDice] = useState<number | null>(null);

  function rollDice() {
    const value = Math.floor(Math.random() * 6) + 1;
    setDice(value);
  }

  return (
    <div className="dice-container">
      <h2>Dice Roller</h2>
      <button onClick={rollDice}>Roll Dice</button>
      <div className="dice-value">
        {dice !== null ? <span>{dice}</span> : <span>Roll to see value</span>}
      </div>
    </div>
  );
}
