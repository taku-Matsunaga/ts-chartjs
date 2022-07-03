import React from "react";
import { Radar } from "react-chartjs-2";

const data = {
  labels: [
    "react",
    "vue",
    "angular",
    "javascript",
    "typescript",
    "redux",
    "rest api",
  ],
  datasets: [
    {
      label: "person a",
      backgroundColor: "rgba(179,181,198,0.2)",
      borderColor: "#008b8b",
      pointBackgroundColor: "#008b8b",
      pointBorderColor: "#fff",
      data: [100, 50, 30, 90, 50, 70, 40],
    },
    {
      label: "person b",
      backgroundColor: "rgba(179,181,198,0.2)",
      borderColor: "#ff1493",
      pointBackgroundColor: "#ff1493",
      pointBorderColor: "#fff",
      data: [10, 30, 100, 10, 100, 70, 60],
    },
  ],
};

const RaiderPlot: React.FC = () => {
  return (
    <div>
      <Radar data={data} />
    </div>
  );
};

export default RaiderPlot;
