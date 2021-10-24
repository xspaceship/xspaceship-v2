const Paragraph = ({ children }) => (
	<section
		key={4}
		p="x-5 y-5 lg:x-10 lg:y-10"
		grid="~ cols-12 gap-5"
		m="b-5"
		className="md-paragraph"
	>
		<div grid="col-span-8 md:col-span-8 md:col-start-3">
			<p
				className="text-center lg:text-xl"
				space="y-5"
				font="worksans children:worksans lg:medium"
			>
				{children}
			</p>
		</div>
	</section>
);

export default Paragraph;
