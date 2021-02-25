import React from "react";
import ReactDOM from "react-dom";
//import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// Needed for onTouchTap
//import injectTapEventPlugin from "react-tap-event-plugin";
import App from "./components/App.js";
import { useState } from "react";

const root = document.querySelector(".container");

//injectTapEventPlugin();

ReactDOM.render(<App />, root);
