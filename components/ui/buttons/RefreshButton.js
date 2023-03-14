import { TfiReload } from "react-icons/tfi";
const RefreshButton = () => {
  return (
    <button className="p-3 bg-white rounded-full shadow-md">
      <TfiReload className={"animate-spin h-8 w-8"} />
    </button>
  );
};

export default RefreshButton;
