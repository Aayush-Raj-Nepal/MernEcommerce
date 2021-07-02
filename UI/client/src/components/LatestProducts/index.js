import Carousel from "react-multi-carousel";
import { useState, useEffect, setState } from "react";
import { useStateValue } from "../../StateProvider";
import Product from "../Product/home";
import "react-multi-carousel/lib/styles.css";
import { getLatestProducts } from "../../api/helper";
import { getMediaUrl } from "../../api/functions";
import { Link } from "react-router-dom"

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

function LatestProducts() {
  // const [state,dispatch]=useStateValue();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    (async () => {
      return getLatestProducts().then((res) => {
        console.log(res);
        setProducts(res);
      });
    })();
  }, 
[]);
  return (
    <div>
      {products && (
        <div className="section145">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="main-title-tt">
                  <div className="main-title-left">
                    <span>For You</span>
                    <h2>Added New Products</h2>
                  </div>
                  <Link to={`/newproduct`} className="see-more-btn">
                    See All
                    </Link>
                </div>
              </div>
              <div className="col-md-12">
                <Carousel {...sliderOptions}>
                  {products.map((product, index) => (
                    <Product
                      key={index}
                      id={product._id}
                      discount={product.discount}
                      title={product.eng_name}
                      price={product.price}
                      image={getMediaUrl("product/" + product.images[0])}
                      rating={5}
                    ></Product>
                  ))}
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default LatestProducts;