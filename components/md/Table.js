const Table = props => {
	const {
		title01 = '',
		title02 = '',
		items01 = [],
		items02 = [],
		textColor01 = '#FFF',
		textColor02 = '#FFF',
	} = props;

	return (
		<div p="10" border="rounded-lg ~ bc03" grid="~ cols-1 lg:cols-2" gap="10">
			<div>
				<h4 font="medium" text="4xl" m="b-10">
					{title01}
				</h4>
				<ul style={{ color: textColor01 }} font="medium" text="xl">
					{items01.map((item, index) => (
						<li
							key={index}
							border="not-first-of-type:(t bc03)"
							p="not-first-of-type:not-last-of-type:(y-5) last-of-type:(t-5) first-of-type:(b-5)"
						>
							{item}
						</li>
					))}
				</ul>
			</div>
			<div>
				<h4 font="medium" text="4xl" m="b-10">
					{title02}
				</h4>
				<ul style={{ color: textColor02 }} font="medium" text="xl">
					{items02.map((item, index) => (
						<li
							key={index}
							border="not-first-of-type:(t bc03)"
							p="not-first-of-type:not-last-of-type:(y-5) last-of-type:(t-5) first-of-type:(b-5)"
						>
							{item}
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default Table;
