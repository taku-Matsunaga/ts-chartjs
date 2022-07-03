import React from "react";
import { Bubble } from "react-chartjs-2";

const data = {
  datasets: [
    {
      label: "react",
      backgroundColor: "#4169el",
      borderColor: "transparent",
      data: [{ x: 20, y: 866, r: 6350000 / 100000 }],
    },
    {
      label: "angular",
      backgroundColor: "#c71585",
      borderColor: "transparent",
      data: [{ x: 30, y: 389, r: 410000 / 100000 }],
    },
    {
      label: "vue",
      backgroundColor: "#008080",
      borderColor: "transparent",
      data: [{ x: 10, y: 749, r: 1320000 / 100000 }],
    },
  ],
};

const options = {
  plugins: {
    title: {
      display: true,
      text: "NPM downloads comparison (global)",
      font: { size: 18 },
    },
  },
  scales: {
    y: {
      title: {
        display: true,
        text: "Number of job offer in LinkedIn (Japan)",
        font: { size: 18 },
      },
      ticks: {
        font: { size: 14 },
      },
      min: 0,
      max: 1300,
    },
    x: {
      title: {
        display: true,
        text: "Learning Cost",
        font: { size: 18 },
      },
      ticks: {
        font: { size: 14 },
      },
      min: 5,
      max: 35,
    },
  },
};

const BubblePlot: React.FC = () => {
  return (
    <div>
      <Bubble data={data} type="bubble" options={options} />
    </div>
  );
};

export default BubblePlot;
