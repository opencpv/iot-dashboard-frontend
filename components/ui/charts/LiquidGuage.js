import { color } from "d3-color";
import { interpolateRgb } from "d3-interpolate";
import { memo, useState } from "react";
import LiquidFillGauge from "react-liquid-gauge";

const LiquidGuage = memo(({ data, properties }) => {
  const [value, setValue] = useState(10);
  const startColor = "#6495ed"; // cornflowerblue
  const endColor = "#dc143c"; // crimson
  const radius = 100;
  const interpolate = interpolateRgb(startColor, endColor);
  const fillColor = properties.color;

  const gradientStops = [
    {
      key: "0%",
      stopColor: color(fillColor).darker(0.5).toString(),
      stopOpacity: 1,
      offset: "0%",
    },
    {
      key: "50%",
      stopColor: fillColor,
      stopOpacity: 0.75,
      offset: "50%",
    },
    {
      key: "100%",
      stopColor: color(fillColor).brighter(0.5).toString(),
      stopOpacity: 0.5,
      offset: "100%",
    },
  ];

  return (
    <div className="border-2 border-white px-8 h-fit  rounded-md py-4">
      <p className="text-center w-[200px] inline text-sm text-white font-mono">
        {properties.title}
      </p>
      <LiquidFillGauge
        style={{ width: "200px", marginTop: "0.5em" }}
        width={radius * 2}
        height={radius * 2}
        value={data[properties.attribute]}
        percent="%"
        textSize={1}
        textOffsetX={0}
        textOffsetY={0}
        textRenderer={(props) => {
          const value = Math.round(data[properties.attribute]);
          const radius = Math.min(props.height / 2, props.width / 2);
          const textPixels = (props.textSize * radius) / 2;
          const valueStyle = {
            fontSize: textPixels,
          };
          const percentStyle = {
            fontSize: textPixels * 0.6,
          };

          return (
            <tspan>
              <tspan className="value font-mono  font-black text-3xl">
                {value}
              </tspan>
              <tspan className="font-mono" style={percentStyle}>
                {props.percent}
              </tspan>
            </tspan>
          );
        }}
        riseAnimation
        waveAnimation
        waveFrequency={2}
        waveAmplitude={1}
        gradient
        // gradientStops={gradientStops}
        circleStyle={{
          fill: fillColor,
        }}
        waveStyle={{
          fill: fillColor,
        }}
        textStyle={{
          fill: color("#444").toString(),
          fontFamily: "Arial",
        }}
        waveTextStyle={{
          fill: color("#fff").toString(),
          fontFamily: "Arial",
        }}
        onClick={() => {
          setValue(Math.random() * 100);
        }}
      />
      <div
        style={{
          margin: "20px auto",
          width: 120,
        }}
      ></div>
    </div>
  );
});

export default LiquidGuage;
