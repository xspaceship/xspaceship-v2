const Caption = ({ children }) => (
	<div
		className="md-caption"
		key={1}
		grid="~ cols-12 gap-5"
		m="b-5"
		p="x-5 lg:x-10"
	>
		<div grid="col-span-12 md:col-span-8 md:col-start-3">
			<div
				className="text-center text-sm"
				space="y-5"
				font="worksans children:worksans"
			>
				{children}
			</div>
		</div>
	</div>
);

export default Caption;
