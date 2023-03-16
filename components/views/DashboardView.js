import io from "socket.io-client";
import Footer from "../layout/Footer";
import DataKeyGrid from "../pageSections/dashboard/DataKeysGrid";
import { useContext, useEffect, useState } from "react";
import TelemetryComponentSetup from "../ui/grids/TelemetryComponentSetup";
import LiquidGuage from "../ui/charts/LiquidGuage";
import LineGraph from "../ui/charts/LineGraph";
import CircularGuage1 from "../ui/charts/CIrcularGuage1";
import TextGuage from "../ui/charts/TextGuage";
import { UiContext } from "../../lib/contexts/UiContext";

const DashboardView = ({ data, iotElements }) => {
  const SOCKET_SERVER_URL = "http://localhost:8080";
  const [socket, setSocket] = useState(null);
  const [isConnected, setIsConnected] = useState(false);
  const [telem, setTelem] = useState(null);
  const [elements, setElements] = useState({});
  const { uiState } = useContext(UiContext);

  const layout = [
    { i: "a", x: 0, y: 0, w: 1, h: 2, static: true },
    { i: "b", x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4 },
    { i: "c", x: 4, y: 0, w: 1, h: 2 },
  ];

  const properties = [
    {
      title: "Humidity Sensor 1",
      uiElement: "lguage",
      attribute: "humidity",
      color: "#fff",
    },
    {
      title: "Temperature Sensor 1",
      uiElement: "lg",
      attribute: "temperature",
      color: "#fff",
    },

    {
      uiElement: "cguage",
      levels: 10,
      id: "guage-1",
      attribute: "temperature",
      title: "Temperature sensor",
      color: "#fff",
    },
    {
      uiElement: "lgraph",
      attribute: "temperature",
      title: "Temperature sensor",
      color: "#fff",
    },
    {
      uiElement: "tguage",
      attribute: "temperature",
      title: "Temperature sensor",
      color: "#fff",
    },
  ];

  const iotElementsHandler = (data) => {
    setElements(data);
  };

  useEffect(() => {
    const socket_connection = io("http://localhost:8080");
    socket_connection.on("isConnected", (data) => {
      setIsConnected(data);
    });

    socket_connection.on("usb-data", (data) => {
      setTelem(data);
      console.log(data.temperature);
    });

    setSocket(socket_connection);
    console.log(uiState);

    return () => {
      socket_connection.close();
    };
  }, []);

  return (
    <>
      <main className="w-[100vw] h-[100vh]">
        <div className="h-[94vh] w-full bg-slate-900 flex items-center  flex-col relative">
          <DataKeyGrid data={telem} />
          <TelemetryComponentSetup iotElements={iotElementsHandler} />
          {telem && (
            <div className="w-full px-8 flex  flex-wrap gap-4">
              {uiState.map((setting, index) => (
                <>
                  {setting.uiElement == "lguage" ? (
                    <LiquidGuage
                      key={index}
                      data={telem}
                      properties={setting}
                    />
                  ) : null}
                  {setting.uiElement == "cguage" ? (
                    <CircularGuage1
                      data={telem}
                      properties={setting}
                      key={index}
                    />
                  ) : null}
                  {setting.uiElement === "lgraph" ? (
                    <LineGraph data={telem} properties={setting} key={index} />
                  ) : null}
                  {setting.uiElement == "tguage" ? (
                    <TextGuage data={telem} properties={setting} key={index} />
                  ) : null}
                </>
              ))}
            </div>
          )}
        </div>
        <Footer />
      </main>
    </>
  );
};

export default DashboardView;
