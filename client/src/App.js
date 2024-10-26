import './App.css';
import TopBar from "./components/TopBar";
import PasswordChecker from "./components/PasswordChecker";
import React from "react";
import {Typography} from "@mui/material";
import Suggestions from "./components/Suggestions";

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
        <Typography className={"disclaimer"} component={"div"} variant={"h7"}>
            Disclaimer: Submitted passwords are not stored, saved, or used for training on the server.
        </Typography>
        <Suggestions />
    </div>
  );
}

export default App;
