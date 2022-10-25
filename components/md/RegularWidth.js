const RegularWidth = props => {
  const { children, ...rest } = props;
  return (
    <section
      className="md-regular-width"
      key={5}
      m="x-5 lg:x-10"
      p="lg:x-22.5"
      space="y-5"
      {...rest}
    >
      {children}
    </section>
  );
};

export default RegularWidth;
