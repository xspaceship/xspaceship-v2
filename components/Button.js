const Button = props => {
	const { text, url } = props;
	return (
		<form action={url}>
			<button className="primary border px-6 py-2 rounded-md" type="button">
				{text}
			</button>
		</form>
	);
};

export default Button;
