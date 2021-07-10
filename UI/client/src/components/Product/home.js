import React from "react";
import { useStateValue } from "../../StateProvider";
import "./home.css";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { getMediaUrl } from "../../api/functions";

import { toast } from "react-toastify";
export default function Product({
  id = "12234",
  title = "asdad",
  image = ["asdad"],
  price = "adasd",
  rating = 5,
  discount = "abcd",
}) {
  const [state, dispatch] = useStateValue();
  const getPlaceholder = getMediaUrl(
    "product/" + image[0] + "?placeholder=true"
  );
  const getImage = getMediaUrl("product/" + image[0]);
  const addToBasket = () => {
    // dispatch the item insto the data-layer

    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: getImage,
        price: price,
        rating: rating,
        discount: discount,
        count: 1,
      },
    });

    toast.info("Added to Cart", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  const addToWishlist = () => {
    // dispatch the item insto the data-layer

    dispatch({
      type: "ADD_TO_WISHLIST",
      item: {
        id: id,
        title: title,
        image: getImage,
        price: price,
        rating: rating,
        discount: discount,
      },
    });

    toast.info("Added to Wishlist", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  return (
    <div className="product-item">
      <Link to={"/product/" + id} className="product-img">
        {/* <img className="product_img" src={image} alt=""/> */}
        <LazyLoadImage
          alt={title}
          className="product_img"
          placeholderSrc={getImage}
          src={getPlaceholder}
        />
      </Link>
      <div className="product-absolute-options">
        <span className="offer-badge-1">-{discount}% off</span>
        <span
          className="like-icon"
          onClick={addToWishlist}
          title="wishlist"
        ></span>
      </div>
      <div className="product-text-dt">
        <p>
          Available<span>(In Stock)</span>
        </p>
        <h4>{title}</h4>
        <div className="product-price">
          Rs{price}
          <span>Rs{price}</span>
        </div>
        <div className="qty-cart text-center">
          {/* <div className="quantity buttons_added">
                    <input type="button"  className="minus minus-btn"/>
                    <input type="number" step="1" name="quantity"  className="input-text qty text"/>
                    <input type="button"  className="plus plus-btn"/>
                </div> */}
          <span className="btn " onClick={addToBasket}>
            Add to cart <i className="fa fa-shopping-cart"></i>
          </span>
        </div>
      </div>
    </div>
  );
}
