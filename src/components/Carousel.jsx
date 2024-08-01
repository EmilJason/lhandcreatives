import style from "./Carousel.module.css";
import img1 from "../assets/img/carousel-img01.png";
import img2 from "../assets/img/carousel-img02.png";
import img3 from "../assets/img/carousel-img03.png";
import img4 from "../assets/img/carousel-img04.png";
import img5 from "../assets/img/carousel-img05.png";
import img6 from "../assets/img/carousel-img06.png";

import nextIcon from "../assets/img/carousel-arrow-next.svg";
import prevIcon from "../assets/img/carousel-arrow-prev.svg";
import { useState, useRef, useEffect } from "react";

const carouselData = [
  {
    id: 1,
    imageSrc: img1,
    alt: "Image 1",
  },
  {
    id: 2,
    imageSrc: img2,
    alt: "Image 2",
  },
  {
    id: 3,
    imageSrc: img3,
    alt: "Image 3",
  },
  {
    id: 4,
    imageSrc: img4,
    alt: "Image 4",
  },
  {
    id: 5,
    imageSrc: img5,
    alt: "Image 5",
  },
  {
    id: 6,
    imageSrc: img6,
    alt: "Image 6",
  },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showButtons, setShowButtons] = useState(false);
  const carouselRef = useRef(null);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? carouselData.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === carouselData.length - 1 ? 0 : prevIndex + 1
    );
  };

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     handleNext();
  //   }, 5000);

  //   return () => clearInterval(interval);
  // }, []);

  useEffect(() => {
    const checkCarouselWidth = () => {
      if (carouselRef.current) {
        const carouselWidth = carouselRef.current.offsetWidth;
        const totalImagesWidth = carouselData.reduce((total, item) => {
          const img = new Image();
          img.src = item.imageSrc;
          return total + img.naturalWidth;
        }, 0);
        setShowButtons(totalImagesWidth > carouselWidth);
      }
    };

    const loadImages = () => {
      Promise.all(carouselData.map(item => {
        return new Promise((resolve) => {
          const img = new Image();
          img.onload = () => resolve();
          img.src = item.imageSrc;
        });
      })).then(() => {
        checkCarouselWidth();
      });
    };

    loadImages();
    window.addEventListener('resize', checkCarouselWidth);

    return () => {
      window.removeEventListener('resize', checkCarouselWidth);
    };
  }, [carouselData]);
  return (
    <div className={style.carousel} ref={carouselRef}>
      {showButtons && (
        <button className={style.prev} onClick={handlePrev}>
          <img src={prevIcon} alt="prev" width="50" />
          <span>{showButtons}</span>
        </button>
      )}
      <div className={style.carouselWrapper}>
        {carouselData.map((item, index) => (
          <div
            key={item.id}
            className={`${style.carouselItem} ${index === currentIndex ? style.active : ''}`}
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
              transition: 'transform 0.3s ease-in-out',
            }}
          >
            <img src={item.imageSrc} alt={item.alt} />
          </div>
        ))}
      </div>
      {showButtons && (
        <button className={style.next} onClick={handleNext}>
          <img src={nextIcon} alt="next" width="50" />
        </button>
      )}
    </div>
  );
};

export default Carousel;