const ThreeColumns = ({ children }) => (
	<section
		grid="~ cols-12 gap-5 children:col-span-12 lg:children:col-span-4"
		className="md-three-columns"
	>
		{children}
	</section>
);

export default ThreeColumns;
