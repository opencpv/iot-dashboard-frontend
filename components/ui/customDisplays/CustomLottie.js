import Lottie from "lottie-react";
import useAssets from "../../../lib/customHooks/useAssets";

const CustomLottie = ({ file, style = {}, loop = true }) => {
  const assets = useAssets();
  return <Lottie animationData={assets.json[file]} style={style} loop={loop} />;
};

export default CustomLottie;
