import { currentYear } from 'utils/time';
import meta from 'meta.json';

const Button = props => {
	const { text } = props;
	return (
		<button class="primary border px-6 py-2 rounded-md" type="button">
			{text}
		</button>
	);
};

export default Button;
