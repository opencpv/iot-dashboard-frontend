import { useEffect, useState } from "react";

import {
  VictoryChart,
  VictoryLine,
  VictoryTheme,
  VictoryAxis,
  VictoryLabel,
} from "victory";

const LineGraph = ({ data }) => {
  const [buffer, setBuffer] = useState([]);

  const graphdata = [
    { x: 1, y: 20 },
    { x: 2, y: 35 },
    { x: 3, y: 25 },
    { x: 4, y: 40 },
    { x: 5, y: 30 },
    { x: 6, y: 45 },
    { x: 7, y: 35 },
    { x: 8, y: 50 },
    { x: 9, y: 40 },
    { x: 10, y: 55 },
    ,
  ];

  useEffect(() => {
    if (data) {
      const previousBuffer = buffer;
      const now = new Date(); // create a new Date object representing the current time
      const hours = now.getHours(); // get the current hour (0-23)
      const minutes = now.getMinutes(); // get the current minute (0-59)
      const seconds = now.getSeconds(); // get the current second (0-59)
      const timeString = `${hours}:${minutes}:${seconds}`; // create a string representing the current time
      if (previousBuffer.length == 10) {
        previousBuffer.shift();
        previousBuffer.push({ x: timeString, y: data.humidity });
      } else {
        previousBuffer.push({ x: timeString, y: data.humidity });
      }

      setBuffer(previousBuffer);
    }
  }, [data]);

  return (
    <div className="border-2 border-white p-4  rounded-md ">
      <VictoryChart theme={VictoryTheme.material} width={400}>
        <VictoryLabel
          text="Temperature Sensor 1"
          x={225}
          y={30}
          textAnchor="middle"
          style={{
            fill: "#fff",
            color: "#fff",
            fontSize: "17.5px",
            fontFamily: "mono",
          }}
        />
        <VictoryAxis
          tickValues={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]} // an array of values to display on x-axis
          tickFormat={(x) => `${x}h`} // a function to format tick values
          style={{
            tickLabels: { fill: "#fff", angle: 30, textAnchor: "start" }, // customize tick label color
          }}
        />
        <VictoryAxis
          domain={[0, 100]}
          dependentAxis // indicate y-axis
          //   tickFormat={(y) => `$s{y}`} // a function to format tick values
          style={{
            tickLabels: { fill: "#fff" }, // customize tick label color
          }}
        />
        <VictoryLine
          data={buffer}
          x="x"
          y="y"
          style={{
            data: { stroke: "#fff", border: "4px solid #fff" }, // customize line color
          }}
        />
      </VictoryChart>
    </div>
  );
};
export default LineGraph;
