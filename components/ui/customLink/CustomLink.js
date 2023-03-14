import Link from "next/link";

const CustomLink = ({ children, url }) => {
  return <Link href={url}>{children}</Link>;
};

export default CustomLink;
