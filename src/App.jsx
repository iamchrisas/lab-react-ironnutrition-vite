import React, { useState } from "react";
import "./App.css";
import FoodList from "./components/FoodList";
import { Row, Divider } from "antd";

function App() {
  return <div className="App">{<FoodList />}</div>;
}

export default App;
