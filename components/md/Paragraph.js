const Paragraph = ({ children }) => (
	<div
		key={4}
		p="x-5 y-5 lg:x-10 lg:y-10"
		grid="~ cols-12 gap-5"
		m="b-5"
		className="md-paragraph"
	>
		<div grid="lg:col-span-8 lg:col-start-3 md:col-span-8 md:col-start-3 sm:col-span-12">
			<div
				className="text-center text-xl"
				space="y-5"
				font="worksans children:worksans lg:medium"
			>
				{children}
			</div>
		</div>
	</div>
);

export default Paragraph;
