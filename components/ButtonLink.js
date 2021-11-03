const ButtonLink = props => {
	const { text, url } = props;
	return (
		<a className="primary border px-6 py-2 rounded-md" type="button" href={url}>
			{text}
		</a>
	);
};

export default ButtonLink;
