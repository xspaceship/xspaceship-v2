const Title = ({ text, sub }) => (
	<section
		p="lg:x-22.5 lg:y-20"
		m="x-5 b-10 lg:x-10 lg:b-5"
		grid="~ cols-12 gap-5"
		border="rounded-lg"
		bg="lg:bg02"
		className="md-title"
	>
		<h3
			font="questrial children:questrial"
			grid="col-span-12 md:col-span-9 lg:col-span-9"
			className="text-fs01 lg:text-6xl"
		>
			{text}
		</h3>
		<h4
			font="worksans children:worksans"
			m="lg:b-10"
			grid="col-span-12"
			className="text-xl"
		>
			{sub}
		</h4>
	</section>
);

export default Title;
