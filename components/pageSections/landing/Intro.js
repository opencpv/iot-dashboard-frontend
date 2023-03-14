import CustomLink from "../../ui/customLink/CustomLink";
import BodyText from "../../ui/text/BodyText";
import HeaderText from "../../ui/text/HeaderText";
import Logo from "../../ui/text/Logo";

const Intro = () => {
  return (
    <div className="h-[96vh] flex items-center">
      <div>
        <Logo />
        <HeaderText text={"Open source Ground Control Station for Cansats"} />
        <div className="my-4"></div>
        <BodyText
          text={
            "   Monitor your cansat parameters in realtime and send control events to trigger actions on your cansat"
          }
        />
        <div className="my-4"></div>
        <BodyText text={"Features"} />
        <ul className="list-disc px-4">
          <li>
            <BodyText text={"Single connection"} />
          </li>
          <li>
            <BodyText text={"Local map for tracking GPS"} />
          </li>
          <li>
            <BodyText text={"Gauge and Graph based UI Components"} />
          </li>
          <li>
            <BodyText text={"Customizable dashboard"} />
          </li>
        </ul>
        <div className="my-8"></div>
        <CustomLink url={"/ports"}>
          <button className="border-2 border-slate-800  rounded-full  px-8 py-2 hover:bg-slate-800 hover:text-white transition-all duration-200 ">
            Get Started
          </button>
        </CustomLink>
      </div>
    </div>
  );
};

export default Intro;
