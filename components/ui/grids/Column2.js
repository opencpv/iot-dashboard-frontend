const Column2 = ({ children, style = {} }) => {
  return (
    <div className="grid grid-cols-2 gap-x-8" style={style}>
      {children}
    </div>
  );
};

export default Column2;
