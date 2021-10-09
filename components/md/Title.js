const Title = ({ text, sub }) => (
	<div
		p="x-5 y-7.5 lg:x-22.5 lg:y-32"
		m="x-5 b-5 lg:x-0"
		grid="~ cols-12 gap-5"
		border="rounded-lg"
		bg="bg02"
		className="md-title"
	>
		<h3
			font="questrial"
			grid="col-span-12 md:col-span-9 lg:col-span-7"
			className="text-6xl"
		>
			{text}
		</h3>
		<h4 font="worksans" m="b-10" grid="col-span-12" className="text-xl">
			{sub}
		</h4>
	</div>
);

export default Title;
