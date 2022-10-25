const TwoColumns = ({ children }) => (
  <section
    grid="~ cols-12 gap-5 children:col-span-12 lg:children:col-span-6"
    className="md-two-columns"
  >
    {children}
  </section>
);

export default TwoColumns;
