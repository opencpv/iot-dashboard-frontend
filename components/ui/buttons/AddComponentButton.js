import { IoMdAdd } from "react-icons/io";

const AddComponentButton = ({ onClick }) => {
  return (
    <button
      className="p-1 bg-white rounded-sm active:translate-y-1"
      onClick={onClick}
    >
      <IoMdAdd className="text-slate-800" />
    </button>
  );
};

export default AddComponentButton;
