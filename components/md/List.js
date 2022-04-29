const List = props => {
  const {
    title = '',
    items = [],
    bgColor = '#000',
    textColor = '#FFF',
    borderColor = '#000',
  } = props;

  return (
    <div
      border="~ rounded-lg"
      p="10"
      style={{ borderColor, backgroundColor: bgColor, color: textColor }}
      flex="~ col lg:row"
      gap="10"
      m="y-5 !lg:y-10"
    >
      <h3 font="medium" text="4xl" w="lg:400px" min-w="lg:400px">
        {title}
      </h3>
      <div flex="grow">
        {items.map((item, index) => (
          <div
            border="not-first-of-type:(t bc03)"
            p="not-first-of-type:not-last-of-type:(y-5) last-of-type:(t-5) first-of-type:(b-5)"
            key={index}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;
