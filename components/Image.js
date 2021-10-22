/* eslint-disable @next/next/no-img-element */
import { forwardRef, useState } from 'react';
import NextImage from 'next/image';
import meta from 'meta.json';

const Image = forwardRef((props, ref) => {
	const [isLoaded, setIsLoaded] = useState(false);

	const { css, noRound = null, gradientFrom = null, gradientTo = null } = props;

	const round = noRound ? '' : 'rounded-lg';

	let style = '';

	console.log(111, gradientFrom, gradientTo);

	if (gradientFrom && gradientTo) {
		style = {
			background: `linear-gradient(135deg, ${gradientFrom} 0%, ${gradientTo} 100%)`,
		};
	} else {
		style = css
			? { ...css, filter: 'blur(60px)' }
			: { backgroundColor: meta.default_image_color };
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
				ref={ref}
				alt=""
				quality="100"
				{...props}
				border={round}
				onLoadingComplete={() => setIsLoaded(true)}
			/>
		</div>
	);
});

export default Image;

Image.defaultProps = {
	noRound: false,
};
