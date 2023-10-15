import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  ChartConfiguration,
} from "chart.js";
import * as Papa from "papaparse";
import ZoomPlugin from "chartjs-plugin-zoom";
import { useState } from "react";
import "./styles.css";

ChartJS.register({
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  ZoomPlugin,
});

function Graph() {
  const [chartData, setChartData] = useState<{
    labels: string[];
    data: number[];
  }>({
    labels: [],
    data: [],
  });

  function handleFileUpload(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (file) {
      Papa.parse(file, {
        header: true,
        dynamicTyping: true,
        complete: function (
          results: Papa.ParseResult<{ time: string; data: number }>
        ) {
          const timeData = results.data.map((row) => row.time);
          const dataData = results.data.map((row) => row.data);

          setChartData({
            labels: timeData,
            data: dataData,
          });
        },
      });
    }
  }

  const data = {
    labels: chartData.labels,
    datasets: [
      {
        label: "Raw",
        data: chartData.data,
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
      <input type="file" onChange={handleFileUpload} accept=".csv" />
      <div className="graph">
        <Line data={data} options={options}></Line>
      </div>
    </>
  );
}

export default Graph;
