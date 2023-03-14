import CustomLink from "../ui/customLink/CustomLink";
import FooterText from "../ui/text/FooterText";

const Footer = () => {
  const data = [
    {
      organisation: "KNUST COE Innovation Centre",
      url: "https://www.coeic.knust.edu.gh",
    },
    {
      organisation: "XSpace Solutions",
      url: "https://www.XSpaceSolutions.com",
    },
    {
      organisation: "Erictronics",
      url: "https://www.erictronics.com",
    },
  ];
  return (
    <footer className="h-[6vh] flex bg-slate-800 items-center justify-center     ">
      {data &&
        data.map((org, index) => {
          return (
            <div key={index} className="flex items-center">
              <CustomLink url={org.url}>
                <FooterText text={org.organisation} />
              </CustomLink>
              {index < data.length - 1 && (
                <p className="text-white text-xl mx-4 mb-1">[ | ]</p>
              )}
            </div>
          );
        })}
    </footer>
  );
};

export default Footer;
