import Product from "../Product/home";
import { getProductByCategory } from "../../api/helper";
import { getMediaUrl } from "../../api/functions";
import { useState, useEffect, Fragment } from "react";
import Carousel from "react-multi-carousel";

function Products({ category }) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProductByCategory(category._id)
      .then((prod) => {
        setProducts(prod);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

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
    <Fragment>
      <span>
        {products && products.length > 0 && (
          <Carousel {...sliderOptions}>
            {products.map((product, index) => (
              <Product
                key={index}
                id={product._id}
                discount={product.discount}
                title={product.eng_name}
                price={product.price}
                image={product.images}
                rating={5}
              ></Product>
            ))}
          </Carousel>
        )}
      </span>
    </Fragment>
  );
}
export default Products;
