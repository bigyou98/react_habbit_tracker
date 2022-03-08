import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app";
import "@fortawesome/fontawesome-free/js/all.js";
import HabitPresenter from "./habits_presenter";

const habitPresenter = new HabitPresenter([
  {
    id: 1,
    text: "Red",
    count: 1,
  },
  {
    id: 2,
    text: "Yellow",
    count: 1,
  },
  {
    id: 3,
    text: "Green",
    count: 0,
  },
]);

ReactDOM.render(
  <React.StrictMode>
    <App presenter={habitPresenter} />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
