import React from "react";
import { useState, useEffect } from "react";
import {Link} from "react-router-dom"
import { getSingleProduct } from "../../api/helper";
import renderHTML from "react-render-html";
import ImageCarousel from "../ImageCarousel/Index";
import { getDiscountedPrice, getMediaUrl } from "../../api/functions";
import {  toast } from 'react-toastify';
import { useStateValue } from "../../StateProvider";
import SimilarProducts from "./SimilarProducts"
export default function Index({id}) {
  const [product, setProduct] = useState({});
  useEffect(() => {
    fetchProduct(id);
  }, []);
  const [state,dispatch]=useStateValue();
  const addToBasket=(product)=>{
    console.log(product)
    // return
    // dispatch the item insto the data-layer
    dispatch({
        type:'ADD_TO_BASKET',
        item:{
            id:product._id,
            title:product.eng_name,
            image:getMediaUrl("product/" + product.images[0]),
            price:product.price,
            // rating:product.rating,
            count:1
        },
    })
    toast.error('Added to Cart', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        }); 
  };
  const fetchProduct = (id) => {
    getSingleProduct(id)
      .then((resp) => {
        setProduct(resp);
      })
      .catch((err) => {
        console.log(err);
      });
    }
  return (
    <div>
      {product && product.category && (
        <div>
          <div style={{ paddingTop: " 128px", paddingBottom: "2px" }}>
            <div className="gambo-Breadcrumb">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <nav aria-label="breadcrumb">
                      <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                          <Link to="/">Home</Link>
                        </li>
                        <li className="breadcrumb-item">
                          <a>{product.category ? product.category.name : ""}</a>
                        </li>
                        <li
                          className="breadcrumb-item active"
                          aria-current="page"
                        >
                          {product.eng_name}
                        </li>
                      </ol>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
            <div className="all-product-grid">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="product-dt-view">
                      <div className="row">
                        <div className="col-lg-4 col-md-4">
                          <ImageCarousel
                            images={product.images}
                          ></ImageCarousel>
                        </div>
                        <div className="col-lg-8 col-md-8">
                          <div className="product-dt-right">
                            <h2>{product.eng_name}</h2>
                            <div className="no-stock">
                              <p className="pd-no">
                                Product No.<span>{product.productId}</span>
                              </p>
                              <p className="stock-qty">
                                Available :
                                <span
                                  className={
                                    product.stock && Number(product.stock) == 0
                                      ? "text-danger"
                                      : ""
                                  }
                                >
                                  
                                  {product.stock && Number(product.stock) > 0
                                    ? `${product.stock} In Stock`
                                    : "Out Of Stock"}
                                  
                                </span>
                              </p>
                            </div>

                            <p className="pp-descp">
                              {product.short_description}
                            </p>
                            <div className="product-group-dt">
                              <ul>
                                <li>
                                  <div className="main-price color-discount">
                                    Discount Price (- {product.discount}%)
                                    <span>
                                      Rs{" "}
                                      {getDiscountedPrice(
                                        product.price,
                                        product.discount
                                      )}
                                    </span>
                                  </div>
                                </li>
                                <li>
                                  <div className="main-price mrp-price">
                                   <span>Rs{product.price}</span>
                                  </div>
                                </li>
                              </ul>
                              {/* <ul className="gty-wish-share">
                                <li>
                                  <div className="qty-product">
                                    <div className="quantity buttons_added">
                                      <input
                                        type="button"
                                        value="-"
                                        className="minus minus-btn"
                                      />
                                      <input
                                        type="number"
                                        step="1"
                                        name="quantity"
                                        value="1"
                                        className="input-text qty text"
                                      />
                                      <input
                                        type="button"
                                        value="+"
                                        className="plus plus-btn"
                                      />
                                    </div>
                                  </div>
                                </li>
                                <li>
                                  <span
                                    className="like-icon save-icon"
                                    title="wishlist"
                                  ></span>
                                </li>
                              </ul> */}
                              <ul className="ordr-crt-share">
                                <li>
                                  <button className="add-cart-btn hover-btn" onClick={()=>addToBasket(product)}>
                                    <i className="uil uil-shopping-cart-alt"></i>
                                    Add to Cart
                                  </button>
                                </li>
                                {/* <li>
                                  <button className="order-btn hover-btn">
                                    Order Now
                                  </button>
                                </li> */}
                              </ul>
                            </div>
                            {/* <div className="pdp-details">
                              <ul>
                                <li>
                                  <div className="pdp-group-dt">
                                    <div className="pdp-icon">
                                      <i className="uil uil-usd-circle"></i>
                                    </div>
                                    <div className="pdp-text-dt">
                                      <span>Lowest Price Guaranteed</span>
                                      <p>
                                        Get difference refunded if you find it
                                        cheaper anywhere else.
                                      </p>
                                    </div>
                                  </div>
                                </li>
                                <li>
                                  <div className="pdp-group-dt">
                                    <div className="pdp-icon">
                                      <i className="uil uil-cloud-redo"></i>
                                    </div>
                                    <div className="pdp-text-dt">
                                      <span>Easy Returns & Refunds</span>
                                      <p>
                                        Return products at doorstep and get
                                        refund in seconds.
                                      </p>
                                    </div>
                                  </div>
                                </li>
                              </ul>
                            </div> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container mb-4">
            <div className="row">
          
              <div className="col-lg-8 col-md-12">
                <div className="pdpt-bg">
                  <div className="pdpt-title">
                    <h4>Product Details</h4>
                  </div>
                  <div className="pdpt-body scrollstyle_4">
                    <div className="pdct-dts-1">
                      {product.description && renderHTML(product.description)}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-12">
                <SimilarProducts product={product}></SimilarProducts>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
