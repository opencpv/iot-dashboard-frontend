import { AiFillCloseCircle } from "react-icons/ai";
const TextGuage = ({ data, properties }) => {
  return (
    <div className={`font-mono p-4`} style={{ color: properties.color }}>
      <div className="flex justify-center">
        <button className="mb-4">
          <AiFillCloseCircle className="text-red-500 h-6 w-6 hover:text-white transition-all duration-200" />
        </button>
      </div>
      <p className="text-sm text-center">{properties.title}</p>
      <p className="text-center text-6xl font-black mt-12 mb-8">
        {data[properties.attribute]}
      </p>
      <p className="text-center">{properties.symbol}</p>
    </div>
  );
};

export default TextGuage;
