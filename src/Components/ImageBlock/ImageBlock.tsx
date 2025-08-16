// Components/ImageBlock/ImageBlock.tsx
import React from 'react';
import styles from './ImageBlock.module.css';

type ImageBlockProps = {
  src: string;
  alt?: string;
  width?: number | string;
  height?: number | string;
  rounded?: boolean;
};

export const ImageBlock: React.FC<ImageBlockProps> = ({
  src,
  alt,
  width = 280,
  height = 420,
  rounded = true
}) => {
  return (
    <div className={styles.imageContainer}>
      <img
        src={src}
        alt={alt}
        style={{ width, height }}
        className={rounded ? styles.rounded : ''}
      />
    </div>
  );
};
