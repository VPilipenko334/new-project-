import React from "react";
import { useState } from "react";
import Vent from "./components/vent";
import Blanket from "./components/blanket";
import './stylesheets/main.css'

function App() {

  const [blanket, setBlanket] = useState();
  const [vent, setVent] = useState();

  const handleVent = () => {
    setVent();
  }

  const handleBlanket = () => {
    setBlanket();
  }

  return (
    <div className="App">
      <div className="outer-container">
        <h1>How would you like to proceed?</h1>
        <h2>Answer a series of questions to figure out a little bit more about yourself</h2>
        <h3>If you were an inanimate object, which one would best describe you?</h3>
          <select>
            <option onClick={handleVent}>{vent}</option>
            <option onClick={handleBlanket}>{blanket}</option>
          </select>
      </div>
    </div>
  );
}

export default App;
