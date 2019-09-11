import React from "react";
import "./App.css";
import {DateMod} from "./MyDatePicker";
import APOD from "./APOD";
import {FooterMod} from "./Footer"

function App() {
  return (
    <div className="App">
      <DateMod />
      <APOD />
      <FooterMod />
    </div>
  );
}

export default App;
