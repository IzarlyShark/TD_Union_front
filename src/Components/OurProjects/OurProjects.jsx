import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import mezonin from '../../Assets/Images/Мезонинные.jpg'; 
import style from './OurProjects.module.css';

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 1, // Отображаем только 1 элемент
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1, // Отображаем только 1 элемент
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1, // Отображаем только 1 элемент
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1, // Отображаем только 1 элемент
  },
};

const OurProjects = () => {
  const images = [
    { src: mezonin, alt: 'Проект 1', caption: 'Описание проекта 1' },
    { src: mezonin, alt: 'Проект 2', caption: 'Описание проекта 2' },
    { src: mezonin, alt: 'Проект 3', caption: 'Описание проекта 3' },
    { src: mezonin, alt: 'Проект 4', caption: 'Описание проекта 4' },
  ];

  return (
    <div className={`${style.container} content`}>
      <div className={style.ourProjects}>
        <h1>Наши проекты</h1>
        <Carousel
          responsive={responsive}
          swipeable={false}
          draggable={false}
          showDots={true}
          ssr={true}
          infinite={true} // Позволяет зацикливать карусель
          autoPlay={true}
          autoPlaySpeed={3000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass={style.carouselContainer}
          removeArrowOnDeviceType={["tablet", "mobile"]}
          dotListClass={style.customDotListStyle}
          itemClass={style.carouselItemPadding}
          arrows={true} // Убедитесь, что стрелки включены
        >
          {images.map((image, index) => (
            <div key={index} className={style.carouselItem}>
              <img src={image.src} alt={image.alt} className={style.carouselImage} />
              <div className={style.carouselCaption}>{image.caption}</div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default OurProjects;
