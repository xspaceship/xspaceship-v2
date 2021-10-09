const TwoColumns = ({ children }) => (
	<div grid="~ cols-12 gap-5 children:col-span-6">{children}</div>
);

export default TwoColumns;
