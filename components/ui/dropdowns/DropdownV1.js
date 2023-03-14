import { useState } from "react";

const DropdownV1 = ({ items, defaultDisplay, setter, success }) => {
  const [selectedItem, setSelectedItem] = useState(defaultDisplay);
  const [toggle, setToggle] = useState(false);
  return (
    <div className="relative">
      <div className="flex gap-4">
        <button
          className={`w-[300px] py-2 text-sm  bg-white ${
            success ? "border-4 border-green-400" : ""
          }   rounded-md shadow-md  hover:bg-black hover:text-white transition-all duration-150  `}
          onClick={() => {
            setToggle(!toggle);
          }}
        >
          {selectedItem}
        </button>
        {toggle && (
          <div className="absolute top-12 left-0 rounded-lg">
            {items.map((item, index) => (
              <button
                className="py-1 text-sm w-[300px] bg-slate-600 hover:bg-black hover:text-white "
                key={index}
                onClick={() => {
                  setSelectedItem(item);
                  setter(item);
                  setToggle(false);
                }}
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default DropdownV1;
