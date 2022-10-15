import { CSSProperties, useState } from 'react';

import dynamic from 'next/dynamic';

import { classNames } from '../../utils/helpers';

const Blurhash = dynamic(() => import('./Blurhash'), {
  ssr: false
});

type ImageProps = {
  urls?: {
    [key: string]: any;
  };
  blurHash?: string;
  loading: 'lazy' | 'eager' | undefined;
  alt: string;
  objectFit?: 'fill' | 'contain' | 'cover' | 'none' | 'scale-down';
  className?: string;
  imageCustomStyles?: CSSProperties;
  src: string;
  showBlur?: boolean;
} & Omit<React.HTMLAttributes<HTMLSpanElement>, 'style'>;

const Image = (props: ImageProps) => {
  const {
    urls,
    blurHash,
    loading,
    alt,
    className,
    objectFit = 'cover',
    imageCustomStyles,
    src,
    showBlur = true,
    ...rest
  } = props;

  const [showBlurhash, setShowBlurhash] = useState(showBlur);

  const srcSet: string[] = [];

  for (let [_, value] of Object.entries(urls ?? {})) {
    if (value.includes('w=')) {
      const url = `${value} ${
        (value as string)
          .split('&')
          .find((item) => item.includes('w='))
          ?.split('=')[1]
      }w`;
      srcSet.push(url);
    }
  }

  const showImage = () => {
    setShowBlurhash(false);
  };

  return (
    <span {...rest} style={{ position: 'relative' }} className={className}>
      {showBlurhash && blurHash && (
        <Blurhash
          hash={blurHash}
          style={imageCustomStyles}
          className='absolute inset-0 w-full h-full'
          punch={2}
          height={32}
          width={32}
        />
      )}
      <img
        onLoad={showImage}
        loading={loading}
        style={{ ...imageCustomStyles, objectFit: objectFit }}
        sizes='100vw'
        srcSet={srcSet.join(', ')}
        className={classNames(
          showBlurhash ? 'opacity-0' : 'opacity-100 overflow-hidden',
          'transition-opacity duration-300 h-full w-full'
        )}
        alt={alt}
        src={src}
      />
    </span>
  );
};

export default Image;
