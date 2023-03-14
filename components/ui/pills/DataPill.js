const DataPill = ({ text }) => {
  return (
    <p className="py-1 px-4 shadow-md no-underline rounded-md bg-green-400 text-slate-800 font-sans font-semibold text-[12px] border-blue cursor-pointer  hover:text-white hover:bg-blue-200 focus:outline-none active:shadow-none ">
      {text}
    </p>
  );
};

export default DataPill;
