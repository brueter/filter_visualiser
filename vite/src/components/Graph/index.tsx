import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
} from "chart.js";
import ZoomPlugin from "chartjs-plugin-zoom";
import "./styles.css";
import { useDataState } from "../../context/DataContext";
import DataFilter from "../DataFilter";

ChartJS.register({
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  ZoomPlugin,
});

const Graph = () => {
  const { state } = useDataState();

  const labels: number[] = [...Array(state.raw.data.length).keys()];

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Gaussian",
        data: state.gaussian.data,
        backgroundColor: "red",
        borderColor: "red",
        pointBorderColor: "red",
        borderWidth: 2,
      },
      {
        label: "Butterworth",
        data: state.butterworth.data,
        backgroundColor: "orange",
        borderColor: "orange",
        pointBorderColor: "orange",
        borderWidth: 2,
      },
      {
        label: "Raw",
        data: state.raw.data,
        backgroundColor: "black",
        borderColor: "black",
        pointBorderColor: "black",
        borderWidth: 0.5,
      },
    ],
  };

  const options = {
    elements: {
      point: {
        radius: 0,
      },
    },
    plugins: {
      legend: {
        display: true,
      },
      zoom: {
        pan: {
          enabled: true,
          mode: "x" as "xy",
          rangeMin: { x: null },
          rangeMax: { x: null },
          speed: 10,
        },
        zoom: {
          wheel: {
            enabled: true,
          },
          pinch: {
            enabled: true,
          },
          mode: "x" as "xy",
        },
      },
    },
  };

  return (
    <>
      <div className="graph">
        <Line data={data} options={options}></Line>
      </div>
      <DataFilter filterType={"gaussian"} />
    </>
  );
};

export default React.memo(Graph);
