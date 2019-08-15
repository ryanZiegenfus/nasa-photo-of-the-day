import React from "react";
import "./App.css";
import APOD from "./APOD";
import {DateMod} from "./MyDatePicker";

function App() {
  return (
    <div className="App">
      <DateMod />
      <APOD />
    </div>
  );
}

export default App;
