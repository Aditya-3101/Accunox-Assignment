import React from "react";
import { Doughnut, Bar } from "react-chartjs-2";
import graph from "./graph.jpg";

export const Chart = ({ options, data, title, type, show }) => {
  const textCenter = {
    id: "textCenter",
    beforeDatasetsDraw(chart, args, pluginOptions) {
      const { ctx, data } = chart;

      ctx.save();
      ctx.font = "bold 14px sans-serif";
      ctx.textAlign = "center";
      ctx.textBaseline = "top";
      ctx.fillText(
        `Total`,
        chart.getDatasetMeta(0).data[0].x,
        chart.getDatasetMeta(0).data[0].y
      );
      if (title === "Cloud Accounts") {
        ctx.textBaseline = "bottom";
        ctx.fillText(
          `${
            data.datasets[0].data[0]
            //   data?.datasets[0]?.data[2] +
            //   data?.datasets[0]?.data[3]
          }`,
          chart.getDatasetMeta(0).data[0].x,
          chart.getDatasetMeta(0).data[0].y
        );
      } else {
        ctx.textBaseline = "bottom";
        ctx.fillText(
          `${
            data.datasets[0].data[0] +
            data.datasets[0].data[1] +
            data?.datasets[0]?.data[2] +
            data?.datasets[0]?.data[3]
          }`,
          chart.getDatasetMeta(0).data[0].x,
          chart.getDatasetMeta(0).data[0].y
        );
      }
    },
  };

  return (
    <div
      className={`w-[48%] bg-white p-4 rounded-3xl ${
        show ? "hidden" : "block"
      }`}
    >
      <p className="text-left font-bold font-poopins">{title}</p>
      <div className="w-[100%]">
        {type === "Doughnut" ? (
          <Doughnut options={options} data={data} plugins={[textCenter]} />
        ) : type === "Bar" ? (
          <Bar options={options} data={data} />
        ) : type === "null" ? (
          <div className="w-[2rem] h-[4rem]">
            <img src={graph} alt="no chart" />
          </div>
        ) : null}
      </div>
    </div>
  );
};
