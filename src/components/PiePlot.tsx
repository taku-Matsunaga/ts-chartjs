import React from "react";
import { Doughnut, Pie } from "react-chartjs-2";

const data = {
  labels: ["win", "mac", "linux"],
  datasets: [
    {
      data: [90, 7, 3],
      backgroundColor: ["#4169e1", "#ff1493", "#ffce56"],
      hoverBackgroundColor: ["#36a2eb", "#ff6384", "#ffce56"],
      borderColor: ["transparent", "transparent", "transparent"],
    },
  ],
};

const PiePlot: React.FC = () => {
  return (
    <div>
      <Pie data={data} />
      <Doughnut data={data} />
    </div>
  );
};

export default PiePlot;
