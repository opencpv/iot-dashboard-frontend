const IotInput = ({ placeholder, handleOnChange }) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      onChange={(e) => {
        handleOnChange(e.target.value);
      }}
      className="w-[300px] px-2 py-1 border-2 border-slate-800 rounded-md mt-2"
    />
  );
};

export default IotInput;
