import { cloneElement } from 'react';

const ThreeColumns = ({ children }) => (
  <section grid="~ gap-5 cols-4 sm:cols-12" className="md-three-columns">
    {children.map((child, index) => (
      <div
        key={index}
        grid="col-span-2 sm:col-span-4"
        className={`col-start-${index + 1} sm:col-start-auto`}
      >
        {cloneElement(child)}
      </div>
    ))}
  </section>
);

export default ThreeColumns;
