const Container = ({ children }) => {
  return (
    <div className="flex flex-col w-1/2 lg:w-1/3  items-center">{children}</div>
  );
};

export default Container;
