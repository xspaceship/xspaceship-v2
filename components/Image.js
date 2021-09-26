/* eslint-disable @next/next/no-img-element */
import { forwardRef, useState } from 'react';
import NextImage from 'next/image';
import meta from 'meta.json';

const Image = forwardRef((props, ref) => {
	const [isLoaded, setIsLoaded] = useState(false);

	const { width = 900, height = 600, color = meta.default_image_color } = props;

	return (
		<div
			pos="relative"
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
				layout="responsive"
				quality="100"
				width={width}
				height={height}
				onLoadingComplete={() => setIsLoaded(true)}
			/>
		</div>
	);
});

export default Image;
