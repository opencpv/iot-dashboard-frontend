import { useContext, useState } from "react";
import { UiContext } from "../../../lib/contexts/UiContext";
import { useForm } from "react-hook-form";

const TextUiForm = ({ setter }) => {
  const { addUiElement } = useContext(UiContext);
  const [uiElementSetting, setUiElementSetting] = useState({
    title: "",
    attribute: "",
  });
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const onSubmit = (values) => {
    console.log({ ...values, uiElement: "tguage" });
    addUiElement({ ...values, uiElement: "tguage" });
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        className="px-2 w-[300px] mt-2  rounded-md border-2 border-slate-400 py-2 text-slate-800"
        placeholder="title text"
        {...register("title", {
          required: "Required",
        })}
      />
      <select
        className="w-full p-2 rounded-md mt-2 bg-white border-2 border-slate-400"
        {...register("attribute", {
          required: "Required",
        })}
      >
        <option value={"temperature"}>temperature</option>
        <option value={"humidity"}>humidity</option>
      </select>
      <input
        type="text"
        className="px-2 w-[300px] mt-2  rounded-md border-2 border-slate-400 py-2 text-slate-800"
        placeholder="color"
        {...register("color", {
          required: "Required",
        })}
      />
      <input
        type="text"
        className="px-2 w-[300px] mt-2  rounded-md border-2 border-slate-400 py-2 text-slate-800"
        placeholder="symbol eg. kg or cm"
        {...register("symbol", {
          required: "Required",
        })}
      />
      <button
        className="w-full p-2 font-mono bg-blue-400 rounded-md mt-2 text-white font-black "
        type="submit"
      >
        Add
      </button>
    </form>
  );
};

export default TextUiForm;
