const FullWidth = props => {
  const { children, ...rest } = props;
  return (
    <section
      className="md-fullwidth"
      m="lg:x-10"
      space="y-5"
      border="<lg:all:rounded-none"
      {...rest}
    >
      {children}
    </section>
  );
};

export default FullWidth;
