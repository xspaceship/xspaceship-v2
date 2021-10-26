import { useState } from 'react';
import NextImage from 'next/image';

const Image = props => {
	const [isLoaded, setIsLoaded] = useState(false);

	const {
		css,
		noRound,
		gradientFrom,
		gradientTo,
		caption,
		captionAlignment = 'center',
		...rest
	} = props;

	const round = noRound ? '' : 'rounded-lg';

	const style =
		gradientFrom && gradientTo
			? {
					background: `linear-gradient(135deg, ${gradientFrom} 0%, ${gradientTo} 100%)`,
			  }
			: { ...css, filter: 'blur(60px)' };

	return (
		<div flex="~ col">
			<div
				pos="relative"
				display="block"
				overflow="hidden"
				h="full"
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
			{caption ? (
				<figcaption
					m="t-5"
					font="worksans"
					className={`text-${captionAlignment} text-sm`}
				>
					{caption}
				</figcaption>
			) : null}
		</div>
	);
};

export default Image;
