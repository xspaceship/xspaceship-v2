const Header = ({ children }) => (
	<>
		<hr className="mx-5 border-t border-bc04 mt-15 mb-5 lg:mb-10 lg:mx-0" />
		<h2 className="mb-10 font-montserrat text-2xl px-5 lg:px-0 lg:text-4xl lg:mb-15">
			{children}
		</h2>
	</>
);

export default Header;
