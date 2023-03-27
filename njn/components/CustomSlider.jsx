import { useState } from 'react';
import Image from 'next/image';
import styles from '../styles/Slider.module.css';

const images = [
  { src: '/../public/res/banner1.jpg', alt: 'Image 1' },
  { src: '/../public/res/banner3.jpg', alt: 'Image 2' },
  { src: '/../public/res/banner4.jpg', alt: 'Image 3' },
];

const CustomSlider = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const changeImage = () => {
    setCurrentImageIndex((currentImageIndex + 1) % images.length);
  };

  // Change image every 5 seconds
  setTimeout(changeImage, 5000);

  return (
    <div className={styles.slider}>
      <div className={styles.slide}>
        <Image
          src={images[currentImageIndex].src}
          alt={images[currentImageIndex].alt}
          layout="fill"
          objectFit="cover"
          priority={true}
        />
      </div>
    </div>
  );
};

export default CustomSlider;
