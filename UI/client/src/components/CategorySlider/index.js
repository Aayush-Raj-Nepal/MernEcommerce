import React, { useState, useEffect } from "react";
import { getCategory } from "../../api/helper";
import { getMediaUrl } from "../../api/functions";
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const Responsive = {
  desktop: {
    breakpoint: {
      max: 3000,
      min: 1024,
    },
    items: 6,
  },
  mobile: {
    breakpoint: {
      max: 464,
      min: 0,
    },
    items: 2,
  },
  tablet: {
    breakpoint: {
      max: 1024,
      min: 464,
    },
    items: 5,
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
  minimumTouchDrag: 50,
  renderButtonGroupOutside: false,
  renderDotsOutside: false,
  responsive: Responsive,
  showDots: false,
  sliderClass: "",
  slidesToSlide: 1,
  swipeable: true,
};
let imageStyle = {
  height: "55px",
};

function CustomLeftArrow() {
  return (
    <button type="button" role="presentation" className="cate-slider-next">
      <i className="fa fa-angle-right"></i>
    </button>
  );
}
function CustomRightArrow() {
  return (
    <button type="button" role="presentation" className="cate-slider-prev">
      <i className="fa fa-angle-left"></i>
    </button>
  );
}
function CategorySlider() {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    getCategories();
  }, []);
  const getCategories = () => {
    return getCategory().then((res) => {
      console.log(res);
      setCategory(res);
    });
  };
  return (
    <div>
      {category && category.length > 0 && (
        <div className="section145">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="main-title-tt">
                  <div className="main-title-left">
                    <span>Shop By</span>
                    <h2>Categories</h2>
                  </div>
                </div>
              </div>
              <div className="col-md-12">
                <Carousel {...sliderOptions}>
                  {category?.length > 0 ? (
                    category?.map((cat, index) => (
                      <div className="item" key={index}>
                        <Link
                          to={`/category/${cat._id}`}
                          className="category-item"
                        >
                          <div className="cate-img1">
                            <img
                              style={imageStyle}
                              src={getMediaUrl("product/" + cat?.image)}
                              alt=""
                            />
                          </div>
                          <h4>{cat.eng_name}</h4>
                        </Link>
                      </div>
                    ))
                  ) : (
                    <p>fetching categories..</p>
                  )}
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CategorySlider;
