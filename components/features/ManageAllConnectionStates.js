import { useEffect, useState } from "react";
import DropdownV1 from "../ui/dropdowns/DropdownV1";
import toast, { Toaster } from "react-hot-toast";
import io from "socket.io-client";
import RefreshButton from "../ui/buttons/RefreshButton";
import CustomLottie from "../ui/customDisplays/CustomLottie";
import { GoDashboard } from "react-icons/go";
import CustomLink from "../ui/customLink/CustomLink";

const ManageAllConnectionStates = () => {
  const [devices, setDevices] = useState([]);
  const baudRates = [9600, 14400, 19200, 28800, 31250, 38400, 57600, 115200];
  const [selectedDevice, setSelectedDevice] = useState("port");
  const [selectedBaudRate, setSelectedBaudRate] = useState("baudrate");
  const [checkClicked, setCheckCLicked] = useState(false);
  const SOCKET_SERVER_URL = "http://localhost:8080";
  const [socket, setSocket] = useState(null);
  const [isConnected, setIsConnected] = useState(false);

  const handleDeviceSelection = (device) => {
    setSelectedDevice(device);
  };

  const handleBaudRateSelection = (rate) => {
    setSelectedBaudRate(rate);
  };

  const connect = () => {
    setCheckCLicked(true);
    socket.emit("connectDevice", {
      device: selectedDevice,
      baudrate: selectedBaudRate,
    });
  };

  const disconnect = () => {
    socket.emit("disconnectDevice");
    setCheckCLicked(false);
  };

  const DashboardLink = () => {
    return (
      <CustomLink url={"/dashboard"}>
        <div className="flex flex-col items-center mt-8 group:">
          <GoDashboard className="h-16 w-16 text-green-400" />
          <p className="text-sm mt-4 text-white hover:border-b-2">
            go to dashboard{"  =>"}
          </p>
        </div>
      </CustomLink>
    );
  };
  useEffect(() => {
    let url = "http://localhost:8080/devices";

    let requestOptions = {
      method: "GET",
      headers: {
        Accept: "*/*",
      },
    };

    fetch(url, requestOptions)
      .then((res) => res.json())
      .then((json) => {
        if (json.data.length == 0) {
          toast.error("no devices detected", {
            id: "errorToast",
          });
        } else {
          setDevices(json.data);
          toast.success(
            `${json.data.length} device${
              json.data.length > 1 ? "s" : ""
            } detected`,
            { id: "successId" }
          );
        }
      })
      .catch((err) => {
        toast.error("unknown error", {
          id: "errorToast",
        });
      });
  }, []);

  useEffect(() => {
    const socket_connection = io("http://localhost:8080");
    socket_connection.on("isConnected", (data) => {
      setIsConnected(data);
    });

    setSocket(socket_connection);
  }, []);

  return (
    <>
      {isConnected ? (
        <CustomLottie
          file={"Success"}
          style={{ height: 300, color: "white" }}
          loop={false}
        />
      ) : (
        <CustomLottie file={"Nocon"} style={{ height: 300 }} loop={false} />
      )}

      <div className="flex gap-4">
        <div
          className="absolute bottom-8 right-10"
          onClick={() => {
            if (isConnected) {
              toast.error("disconnect before refresh", {
                id: "errorId",
              });
            } else {
              window.location.reload();
            }
          }}
        >
          <RefreshButton />
          <p className="text-white text-[11px] text-center mt-2 hover:underline cursor-pointer">
            refresh
          </p>
        </div>
        <DropdownV1
          items={devices}
          defaultDisplay={"< port >"}
          setter={handleDeviceSelection}
          success={isConnected}
        />
        <DropdownV1
          items={baudRates}
          defaultDisplay={"< baudrate >"}
          setter={handleBaudRateSelection}
          success={isConnected}
        />
        <button
          className={`py-1 px-4 bg-green-400 text-sm rounded-md shadow-md hover:bg-green-500 ${
            checkClicked && !isConnected ? "focus:animate-bounce	" : ""
          }`}
          onClick={() => {
            if (selectedDevice == "port") {
              toast.error("select port", {
                id: "errorId",
              });
            } else if (selectedBaudRate == "baudrate") {
              toast.error("select rate", {
                id: "errorId",
              });
            } else {
              if (socket) {
                isConnected ? disconnect() : connect();
              }
            }
          }}
        >
          {isConnected ? "disconnect" : "connect"}
        </button>
      </div>
      {isConnected ? <DashboardLink /> : null}
    </>
  );
};

export default ManageAllConnectionStates;
