import React from "react";
import "./App.css";
import BarPlot from "./components/BarPlot";
import BubblePlot from "./components/BubblePlot";
import LinePlot from "./components/LinePlot";
import PiePlot from "./components/PiePlot";
import RaiderPlot from "./components/RaiderPlot";

function App() {
  return (
    <div className="App">
      <LinePlot />
      <PiePlot />
      <BarPlot />
      <RaiderPlot />
      <BubblePlot />
    </div>
  );
}

export default App;
