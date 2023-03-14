import Satelite from "../../public/assets/json/satellite.json";
import Nocon from "../../public/assets/json/nocon.json";
import Success from "../../public/assets/json/success.json";
const useAssets = () => {
  return { json: { Satelite, Nocon, Success } };
};

export default useAssets;
