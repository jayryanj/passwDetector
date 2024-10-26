import './App.css';
import TopBar from "./components/TopBar";
import PasswordChecker from "./components/PasswordChecker";
import React from "react";
import {Typography} from "@mui/material";

function App() {
  return (
    <div className="App">
        <TopBar />
        <Typography className={"description-title"} component={"div"} variant={"h4"}>
            With the help of machine learning,
        </Typography>
        <Typography className={"description"} component={"div"} variant={"h6"}>
            detect the strength of your password.
        </Typography>
        <PasswordChecker />
    </div>
  );
}

export default App;
