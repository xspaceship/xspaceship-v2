/* eslint-disable @next/next/no-img-element */
import { forwardRef, useState } from 'react';
import NextImage from 'next/image';
import meta from 'meta.json';

const Image = forwardRef((props, ref) => {
	const [isLoaded, setIsLoaded] = useState(false);

	const { color = meta.default_image_color } = props;

	return (
		<div
			pos="relative"
			display="block"
			overflow="hidden"
			className={`image-wrapper ${isLoaded ? 'is-image-loaded' : ''}`}
		>
			<div
				pos="inset-0 absolute"
				w="full"
				h="full"
				style={{ backgroundColor: color }}
				aria-hidden="true"
				className="image-placeholder"
			/>
			<NextImage
				ref={ref}
				{...props}
				quality="100"
				onLoadingComplete={() => setIsLoaded(true)}
			/>
		</div>
	);
});

export default Image;
