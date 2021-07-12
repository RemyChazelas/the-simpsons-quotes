import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import Character from "./components/Character";

const sampleQuote = {
  quote: "By chilling my loins I increase the chances of impregnating my wife.",
  character: "Apu Nahasapeemapetilon",
  image:
    "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FApuNahasapeemapetilon.png?1497567511629"
};

const SimpsonAPI = "https://simpsons-quotes-api.herokuapp.com/quotes";


function App() {
  const [SimpsonCharacter, setSimpsonCharacter] = useState(sampleQuote);

  const getCharacter = () => {
    axios
      .get(SimpsonAPI)
      .then((response) => response.data)
      .then((data) => {
        setSimpsonCharacter(data[0]);
      });
  };

  return (
    <div className="App">
      <Character SimpsonCharacter={SimpsonCharacter} />
      <button type="button" onClick={getCharacter}>
        Get Simpson character
      </button>
    </div>
  );
}

export default App;
