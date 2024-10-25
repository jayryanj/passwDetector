import logo from './logo.svg';
import './App.css';
import TopBar from "./components/TopBar";
import PasswordChecker from "./components/PasswordChecker";
import React from "react";

function App() {
  return (
    <div className="App">
      <TopBar />
        <PasswordChecker />
    </div>
  );
}

export default App;
