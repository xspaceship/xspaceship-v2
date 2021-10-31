const Button = props => {
	const { text } = props;
	return (
		<button className="primary border px-6 py-2 rounded-md" type="button">
			{text}
		</button>
	);
};

export default Button;
