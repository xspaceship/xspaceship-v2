const Title = props => {
  const { text, sub, ...rest } = props;
  return (
    <section
      p="y-5 lg:x-22.5 lg:y-20 2xl:x-0"
      m="x-5 b-5 lg:x-10"
      grid="~ cols-12 gap-5 lg:gap-10"
      border="rounded-lg"
      className="md-title"
      {...rest}
    >
      <h1
        font="redhat !leading-lh02 bold"
        grid="col-span-12 md:col-span-9 lg:col-span-9"
        className="text-fs03 lg:text-6xl"
      >
        {text}
      </h1>
      <h2 m="lg:b-10" grid="col-span-12" className="text-xl">
        {sub}
      </h2>
    </section>
  );
};

export default Title;
