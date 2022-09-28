import React, { useState } from "react";
import {
  CarouselItemStyle,
  CarouselStyle,
  IndicatorStyle,
  IndicatorBtn,
  Inner,
} from "./styles/carouselStyles";

export const CarouselItem = ({ children, width }) => {
  return (
    <CarouselItemStyle style={{ width: width }}>{children}</CarouselItemStyle>
  );
};

const Carousel = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= React.Children.count(children)) {
      newIndex = React.Children.count(children) - 1;
    }

    setActiveIndex(newIndex);
  };

  return (
    <CarouselStyle>
      <Inner style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
        {React.Children.map(children, (child, index) => {
          return React.cloneElement(child, { width: "100%" });
        })}
      </Inner>
      <IndicatorStyle>
        <IndicatorBtn
          onClick={() => {
            updateIndex(activeIndex - 1);
          }}
        >
          Prev
        </IndicatorBtn>
        {React.Children.map(children, (child, index) => {
          return (
            <IndicatorBtn
              className={`${index === activeIndex ? "active" : ""}`}
              onClick={() => {
                updateIndex(index);
              }}
            >
              {index + 1}
            </IndicatorBtn>
          );
        })}
        <IndicatorBtn
          onClick={() => {
            updateIndex(activeIndex + 1);
          }}
        >
          Next
        </IndicatorBtn>
      </IndicatorStyle>
    </CarouselStyle>
  );
};

export default Carousel;
