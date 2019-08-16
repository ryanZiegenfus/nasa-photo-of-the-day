import React from "react";
import "./App.css";
import {DateMod} from "./MyDatePicker";
import APOD from "./APOD";

function App() {
  return (
    <div className="App">
      <DateMod />
      <APOD />
    </div>
  );
}

export default App;
