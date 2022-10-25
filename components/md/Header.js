const Header = props => {
  const { children, ...rest } = props;
  return (
    <h3
      className="text-2xl lg:text-3xl md-header"
      font="redhat"
      p="y-10"
      m="t-5 lg:t-0 lg:b-5"
      border="<lg:t <lg:bc04"
      {...rest}
    >
      {children}
    </h3>
  );
};

export default Header;
