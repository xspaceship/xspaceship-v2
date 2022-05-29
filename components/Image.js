import NextImage from 'next/image';
import { useState } from 'react';

const Image = props => {
  const [isLoaded, setIsLoaded] = useState(false);

  const {
    css,
    noRound,
    gradientFrom,
    gradientTo,
    caption,
    captionAlignment = 'center',
    className = '',
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
    <div flex="~ col" h="full">
      <div
        pos="relative"
        display="block"
        overflow="hidden"
        h="full"
        border={round}
        className={`image-wrapper ${round ? 'is-rounded' : ''} ${
          isLoaded ? 'is-image-loaded' : ''
        } ${className}`}
      >
        <div
          aria-hidden="true"
          pos="inset-0 absolute"
          w="full"
          h="full"
          border={round}
          {...rest}
          className={`${className} image-placeholder`}
          style={{ ...style }}
        />
        <NextImage
          alt=""
          quality="100"
          border={round}
          {...rest}
          className={className}
          onLoadingComplete={() => setIsLoaded(true)}
        />
      </div>
      {caption && (
        <figcaption m="y-5" className={`text-${captionAlignment} text-sm`}>
          {caption}
        </figcaption>
      )}
    </div>
  );
};

export default Image;
