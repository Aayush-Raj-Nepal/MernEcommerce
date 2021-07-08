import React, { useEffect, useState } from "react";
import Header from "../components/Header/index";
import Footer from "../components/Footer/index";
import { API } from "../api/backend";
import axios from "axios";
import { getMediaUrl } from "../api/functions";
import swal from "sweetalert2";
import Product from "../components/Product/home";
import { Link } from "react-router-dom";
function CategoryProduct({ match }) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetchProducts();
  }, []);
  const fetchProducts = () => {
    axios
      .get(API + "/product/category/" + match.params.id)
      .then((resp) => {
        setProducts(resp.data);
        console.log(resp.data);
      })
      .catch((err) => {
        console.log(err);
        swal.fire({
          title: "Error while fetching data",
          icon: "error",
        });
      });
  };
  return (
    <div>
      <Header></Header>
      <div>
        <div>
          {products && products.length > 0 && (
            <div className="wrapper">
              <div className="gambo-Breadcrumb">
                <div className="container">
                  <div className="row">
                    <div className="col-md-12">
                      <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                          <li className="breadcrumb-item">
                            <Link to="/">Home</Link>
                          </li>
                          <li
                            className="breadcrumb-item active"
                            aria-current="page"
                          >
                            {products[0].category.name}
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
                      <div className="product-top-dt">
                        <div className="product-left-title">
                          <h2>{products[0].category.name}</h2>
                        </div>
                        <span className="filter-btn pull-bs-canvas-right">
                          Filters
                        </span>
                        <div className="product-sort">
                          <div className="ui selection dropdown vchrt-dropdown">
                            <input
                              name="gender"
                              type="hidden"
                              value="default"
                            />
                            <i className="dropdown icon d-icon"></i>
                            <div className="text">Popularity</div>
                            <div className="menu">
                              <div className="item" data-value="0">
                                Popularity
                              </div>
                              <div className="item" data-value="1">
                                Price - Low to High
                              </div>
                              <div className="item" data-value="2">
                                Price - High to Low
                              </div>
                              <div className="item" data-value="3">
                                Alphabetical
                              </div>
                              <div className="item" data-value="4">
                                Saving - High to Low
                              </div>
                              <div className="item" data-value="5">
                                Saving - Low to High
                              </div>
                              <div className="item" data-value="6">
                                % Off - High to Low
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product-list-view">
                    <div className="row">
                      {products.map((product, index) => (
                        <div key={index} className="col-lg-3 col-md-6 my-3">
                          <Product
                            id={product._id}
                            discount={product.discount}
                            title={product.eng_name}
                            price={product.price}
                            image={product.images}
                            rating={5}
                          ></Product>
                        </div>
                      ))}

                      <div className="col-md-12">
                        <div className="more-product-btn">
                          <button
                            className="show-more-btn hover-btn"
                            onclick="window.location.href = '#';"
                          >
                            Show More
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default CategoryProduct;
