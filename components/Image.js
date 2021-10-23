import { useState } from 'react';
import NextImage from 'next/image';

const Image = props => {
	const [isLoaded, setIsLoaded] = useState(false);

	const {
		css,
		noRound = null,
		gradientFrom = null,
		gradientTo = null,
		...rest
	} = props;

	const round = noRound ? '' : 'rounded-lg';

	let style = '';

	if (gradientFrom && gradientTo) {
		style = {
			background: `linear-gradient(135deg, ${gradientFrom} 0%, ${gradientTo} 100%)`,
		};
	} else {
		style = { ...css, filter: 'blur(60px)' };
	}

	return (
		<div
			pos="relative"
			display="block"
			overflow="hidden"
			border={round}
			className={`image-wrapper ${isLoaded ? 'is-image-loaded' : ''}`}
		>
			<div
				pos="inset-0 absolute"
				w="full"
				h="full"
				border={round}
				style={{ ...style }}
				aria-hidden="true"
				className="image-placeholder"
			/>
			<NextImage
				alt=""
				quality="100"
				{...rest}
				border={round}
				onLoadingComplete={() => setIsLoaded(true)}
			/>
		</div>
	);
};

export default Image;
