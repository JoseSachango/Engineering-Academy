import React from "react";
import ReactDOM from "react-dom";
// import { timeDay } from "d3";

import { Chart } from "react-charts";

import useDemoConfig from "./useDemoConfig";


export default function App() {
 

  const { data, randomizeData } = useDemoConfig({
    series: 10,
  });

  const series = React.useMemo(
    () => ({
      showPoints: false,
    }),
    []
  );

  const axes = React.useMemo(
    () => [
      {
        primary: true,
        type: "time",
        position: "bottom",
        // filterTicks: (ticks) =>
        //   ticks.filter((date) => +timeDay.floor(date) === +date),
      },
      { type: "linear", position: "left" },
    ],
    []
  );

  return (
    <>
      <button onClick={randomizeData}>Randomize Data</button>
      <br />
      <br />
   
        <Chart data={data} series={series} axes={axes} tooltip />
     
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);