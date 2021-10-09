const Paragraph = ({ children }) => (
	<section className="px-5 pt-10 lg:grid lg:grid-cols-12 lg:gap-5 lg:py-10 lg:px-0">
		<div className="col-span-12 lg:col-span-8 lg:col-start-3 lg:col-span-6 lg:col-start-4">
			<h3 className="text-center mb-5 lg:text-xl lg:font-medium">{children}</h3>
		</div>
	</section>
);

export default Paragraph;
