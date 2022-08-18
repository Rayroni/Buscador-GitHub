import React from "react";
import logo from "./logo.png";
import Beep from "./Beep.png"
import "./App.css";
import Profile from "./components/Profile";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <img src={Beep} className="Beep" alt="beep"/>
      </header>
      <Profile />
    </div>
  );
}

export default App;