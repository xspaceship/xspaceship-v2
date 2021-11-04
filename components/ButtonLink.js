import Link from 'components/Link';

const ButtonLink = props => {
	const { text, url } = props;
	return (
		<Link href={url}>
			<a className="border px-6 py-2 rounded-md" type="button">
				{text}
			</a>
		</Link>
	);
};

export default ButtonLink;
