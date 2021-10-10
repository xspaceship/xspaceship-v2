const Header = ({ children }) => (
	<h2
		className="text-2xl lg:text-3xl md-header"
		font="questrial children:questrial"
		m="x-5 b-5 lg:x-10"
		p="lg:x-22.5 lg:y-10"
	>
		{children}
	</h2>
);

export default Header;