import { useState } from "react";
import IotInput from "../inputs/IoTInput";
import TextUiForm from "../forms/TextUiForm";

const DisplayComponentSelector = ({ setSelectedComponentHandler }) => {
  const [buttonToggle, setButtonToggle] = useState(false);
  const [selected, setSelected] = useState("Select iot element");
  const [title, setTitle] = useState("");
  const [attribute, setAttribbute] = useState("");
  const components = ["Liquid Guage", "Graph", "Guage", "Pill", "Text"];

  return (
    <div className="absolute top-12 right-0 p-4 bg-white rounded-md">
      <button
        className="block  w-[300px] rounded-md shadow-xl bg-slate-800 text-white overflow-hidden py-2 focus:outline-none focus:border-white"
        onClick={() => {
          setButtonToggle(!buttonToggle);
        }}
      >
        {selected}
      </button>
      {components && buttonToggle && (
        <div className="mt-2 w-full p-2  bg-white rounded-lg shadow-xl">
          {components.map((component, index) => (
            <button
              key={index}
              className="block w-full px-4 py-2 text-gray-800 hover:bg-slate-700 hover:text-white"
              onClick={() => {
                setSelected(component);
                setButtonToggle(false);
              }}
            >
              {component}
            </button>
          ))}
        </div>
      )}
      {selected == "Text" ? <TextUiForm /> : null}
    </div>
  );
};

export default DisplayComponentSelector;
