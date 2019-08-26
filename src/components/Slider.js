import React, { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Slider = props => {
  const [activeIndex, setActiveIndex] = useState(0);

  const Slide = props.items.map((item, i) => (
    <img
      style={{ height: 100, width: 100 }}
      key={i}
      src={item.src}
      alt={item.altText}
    />
  ));

  // useEffect(() => {
  //   let interval = setInterval(() => {
  //     setActiveIndex(
  //       activeIndex >= props.items.length - 1 ? 0 : activeIndex + 1
  //     );
  //   }, 1000);

  //   return () => {
  //     clearInterval(interval);
  //   };
  // });

  return (
    <>
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlay
        autoPlaySpeed={100}
        centerMode={false}
        containerClass="container-with-dots"
        customTransition="all 1s linear"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024
            },
            items: 3,
            partialVisibilityGutter: 40
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0
            },
            items: 1,
            partialVisibilityGutter: 30
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464
            },
            items: 2,
            partialVisibilityGutter: 30
          }
        }}
        showDots={false}
        sliderClass=""
        slidesToSlide={2}
        swipeable
        transitionDuration={1000}
      >
        {Slide}
      </Carousel>
    </>
  );
};

export default Slider;
