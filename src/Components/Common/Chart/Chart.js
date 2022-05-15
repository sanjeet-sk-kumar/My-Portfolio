import React from "react";
import "./Chart.scss";

const Chart = ({ title, color, fill }) => {
  return (
    <div className="chart">
      <div className="info">
        <span>{title}</span>
      </div>
      <div className="progress-line html">
        <span
          data-descr={fill}
          //   style="--bgcolor:red"
          bcolor={color}
          style={{
            background: color,
            width: fill + "%",
            "--bgcolor": color,
          }}
        ></span>
      </div>
    </div>
  );
};

export default Chart;
