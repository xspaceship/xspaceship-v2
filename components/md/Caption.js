const Caption = props => {
	const { children, alignment = 'center', ...rest } = props;
	return (
		<div
			className="md-caption"
			key={1}
			grid="~ cols-12 gap-5"
			m="b-5"
			p="b-5 lg:x-10"
			text={alignment}
			{...rest}
		>
			<div grid="col-span-12 md:col-span-8 md:col-start-3">
				<div className="text-center text-sm">{children}</div>
			</div>
		</div>
	);
};

export default Caption;
