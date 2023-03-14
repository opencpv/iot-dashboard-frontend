import { useState } from "react";
import AddComponentButton from "../buttons/AddComponentButton";
import DisplayComponentSelector from "../dropdowns/DisplayComponentSelector";

const TelemetryComponentSetup = ({ iotElements }) => {
  const [selectedComponent, setSelectedComponent] = useState(false);
  const [addButtonState, setAddButtonState] = useState(false);

  const handleButtonClick = () => {
    setAddButtonState(!addButtonState);
  };

  return (
    <div className="absolute top-10 right-12">
      <AddComponentButton onClick={handleButtonClick} />
      {addButtonState && <DisplayComponentSelector />}
    </div>
  );
};

export default TelemetryComponentSetup;
