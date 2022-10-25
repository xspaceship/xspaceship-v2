const Paragraph = props => {
  const { children, ...rest } = props;
  return (
    <div
      key={4}
      p="b-5 lg:x-10 lg:b-10 lg:t-5"
      m="b-5"
      grid="~ cols-12 gap-5"
      className="md-paragraph"
      {...rest}
    >
      <div grid="col-span-12 md:col-span-8 md:col-start-3">
        <div className="text-center text-xl" space="y-5" font="medium">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Paragraph;
