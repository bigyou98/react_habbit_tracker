import "./app.css";
import React from "react";
import { Habits } from "./components";

const app = ({ presenter }) => {
  return <Habits presenter={presenter} />;
};

export default app;
