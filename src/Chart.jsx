import React from "react";
import { Bar, Line, Pie, defaults } from "react-chartjs-2";

const Chart = () => {
  const [charData, _] = React.useState({
    labels: [
      "Boston",
      "Worcester",
      "Springfield",
      "Lowell",
      "Cambrige",
      "New Bedford"
    ],
    datasets: [
      {
        label: "Population",
        data: [617594, 181045, 153060, 106519, 105162, 95072],
        backgroundColor: ["green", "lightgreen", "yellow", "orange", "red"]
      }
    ]
  });

  const [options, __] = React.useState({
    title: {
      display: true,
      text: "Diego drogon",
      fontSize: 50
    },
    legend: {
      display: true,
      position: "bottom",
      labels: {
        fontColor: "blue",
        fontSize: 20
      }
    },
    layout: {
      padding: {
        left: 50,
        right: 50,
        top: 15,
        bottom: 35
      }
    },
    tooltips: {
      enabled: true
    }
  });

  // defaults.global.displayTitle = true;
  // defaults.global.displayLegend = true;
  // defaults.global.legendPositon = "right";

  return (
    <div className="chart">
      <Bar data={charData} options={options} width={250} height={150} />
    </div>
  );
};

export default Chart;
