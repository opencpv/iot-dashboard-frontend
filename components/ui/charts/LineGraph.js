import { useEffect, useState } from "react";

import {
  VictoryChart,
  VictoryLine,
  VictoryTheme,
  VictoryAxis,
  VictoryLabel,
} from "victory";

const LineGraph = ({ data, properties }) => {
  const [buffer, setBuffer] = useState([]);

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
    <div className="p-4">
      <p className="text-center mb-2 text-sm text-white font-mono">
        {properties.title}
      </p>
      <div className="-mt-8">
        <VictoryChart theme={VictoryTheme.material} width={400} height={300}>
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
    </div>
  );
};
export default LineGraph;
