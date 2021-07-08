import React, { useState } from "react";
import { useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import { getMediaUrl } from "../../api/functions";
function Index({ images }) {
  const [index, setIndex] = useState(0);
  const [carImages, setCarImage] = useState([]);
  useEffect(() => {
    if (images && images.length > 0) {
      let imgs = images.map((i) => {
        return getMediaUrl("/product/" + i);
      });
      setCarImage(imgs);
    }
  }, [images]);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  const Responsive = {
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1024,
      },
      items: 5,
      partialVisibilityGutter: 40,
    },
    mobile: {
      breakpoint: {
        max: 464,
        min: 0,
      },
      items: 1,
      partialVisibilityGutter: 30,
    },
    tablet: {
      breakpoint: {
        max: 1024,
        min: 464,
      },
      items: 3,
      partialVisibilityGutter: 30,
    },
  };
  const sliderOptions = {
    additionalTransfrom: 0,
    arrows: true,
    autoPlaySpeed: 3000,
    centerMode: false,
    className: "",
    containerClass: "container-with-dots",
    dotListClass: "",
    draggable: true,
    focusOnSelect: false,
    infinite: true,
    itemClass: "",
    keyBoardControl: true,
    minimumTouchDrag: 80,
    renderButtonGroupOutside: false,
    renderDotsOutside: false,
    responsive: Responsive,
    showDots: false,
    sliderClass: "",
    slidesToSlide: 1,
    swipeable: true,
  };
  return (
    <>
      <Carousel activeIndex={index} onSelect={handleSelect} fade>
        {carImages &&
          carImages.length > 0 &&
          carImages.map((ci, index) => (
            <Carousel.Item>
              <img className="d-block w-100" src={ci} alt="First slide" />
            </Carousel.Item>
          ))}
      </Carousel>
      <div className="d-flex">
        {carImages &&
          carImages.length > 0 &&
          carImages.map((ci, index) => (
            <div className="p-2">
              <img
                src={ci}
                alt=""
                onClick={(e) => handleSelect(index, e)}
                style={{ height: "50px" }}
              />
            </div>
          ))}
      </div>
    </>
  );
}

export default Index;
