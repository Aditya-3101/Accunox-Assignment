import React from "react";
import {
  Chart as Chartjs,
  Tooltip,
  Legend,
  ArcElement,
  LinearScale,
  CategoryScale,
  BarElement,
} from "chart.js";
import { Chart } from "./Chart";
import { IoIosAdd } from "react-icons/io";
import graph from "./graph.jpg";
import { useDispatch } from "react-redux";
import { showAddWidget } from "./actions";

Chartjs.register(
  Tooltip,
  Legend,
  ArcElement,
  BarElement,
  LinearScale,
  CategoryScale
);

export const Card = ({ dashboard }) => {
  // console.log(dashboard);
  const dispath = useDispatch();
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "right",
        labels: {
          Position: "right",
          //   color: "rgb(255, 99, 132)",
          //   name: 'Position: right',
          handler(chart) {
            chart.options.plugins.legend.position = "right";
            chart.update();
          },
        },
      },
    },
  };

  const barOptions = {
    responsive: true,
    indexAxis: "y",
    title: {
      display: true,
      text: "Custom Chart Title",
    },
    scales: {
      x: {
        stacked: true,
        display: false, // show/ hide x-axis
        grid: {
          display: false, // show/hide grid line in x-axis
        },
        // barThickness: 1,
      },
      y: {
        stacked: true,
        display: false, // show/ hide x-axis
        grid: {
          display: false, // show/hide grid line in x-axis
        },
        // barThickness: 1,
      },
    },
    plugins: {
      legend: {
        display: true,
        position: "bottom",
      },
    },
  };

  return (
    <React.Fragment>
      <p className="text-left font-bold font-poopins my-2 px-6">
        {dashboard.header}
      </p>
      <div className="px-4 border-b-2 grid grid-cols-3 justify-between bg-[#f0f0f5] py-4 min-h-56">
        <section className="col-span-2 flex flex-wrap justify-between">
          {dashboard.graphType !== "no_graph"
            ? dashboard.dataCollection.map((para, index) => {
                return (
                  <Chart
                    key={index}
                    options={
                      dashboard.graphType === "Bar" ? barOptions : options
                    }
                    data={para}
                    title={para.title}
                    type={dashboard?.graphType}
                    show={para.removed}
                  />
                );
              })
            : dashboard.dataCollection.map((par, index) => {
                return (
                  <div
                    key={index}
                    className="w-[48%] flex flex-col flex-wrap justify-center items-center py-6 rounded-3xl border-b-2 bg-white min-h-56 relative"
                  >
                    <p className="absolute -top-0 -left-0 font-poopins px-4 py-4 font-bold">
                      {par.title}
                    </p>
                    <img
                      src={graph}
                      className="w-[10%] object-cover aspect-square"
                    />
                    <p>No Graph data available!</p>
                  </div>
                );
              })}
        </section>
        <section className="col-span-1 ">
          <div className="w-[95%] ml-auto bg-white h-[100%] flex justify-center items-center rounded-3xl">
            <p
              className="flex border-[#c8cddc] text-slate-400 font-semibold border-2 p-2 rounded-xl items-center"
              onClick={() => dispath(showAddWidget())}
            >
              <IoIosAdd className="text-xl text-[#c8cddc]" /> Add Widget
            </p>
          </div>
        </section>
      </div>
    </React.Fragment>
  );
};
