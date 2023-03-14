const FooterText = ({ text }) => {
  return (
    <p className="font-mono text-sm text-white hover:border-b-2 hover:font-bold transition-all duration-100">
      {text}
    </p>
  );
};

export default FooterText;
