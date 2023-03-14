import { useEffect, useState } from "react";
import DataPill from "../../ui/pills/DataPill";
import TelemetryComponentSetup from "../../ui/grids/TelemetryComponentSetup";
const DataKeyGrid = ({ data, iotElements }) => {
  const [telemetryData, setTelemetryData] = useState([]);
  useEffect(() => {
    if (data) {
      const telemKeys = Object.keys(data);
      setTelemetryData(telemKeys);
    }
  }, [data]);
  return (
    <div className="flex w-full justify-between  px-8 py-8">
      <div className="flex gap-2 items-center">
        <p className="font-black text-white text-[10px]">Telemetry data :</p>
        {telemetryData &&
          telemetryData.map((telemKey, index) => (
            <DataPill text={telemKey} key={index} />
          ))}
      </div>
    </div>
  );
};

export default DataKeyGrid;
