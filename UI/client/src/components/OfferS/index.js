import React from "react";
import { Link } from "react-router-dom";

function index() {
  return (
    <div>
      <div className="wrapper">
        <div className="gambo-Breadcrumb">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to={`/home`}>Home</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Offers
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
        <div className="all-product-grid mb-14">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12">
                <div className="default-title mt-4">
                  <h2>Offers</h2>
                  <img src="images/line.svg" alt="" />
                </div>
              </div>
              <div className="col-lg-4">
                <a className="offers-item">
                  <div className="offer-img">
                    <img src="images/offers/img-1.jpg" alt="" />
                  </div>
                  <div className="offers-text">
                    <h4>📢 Offer Title Here!</h4>
                    <p>Up to 25% off on Vegetables & Fruits & much more</p>
                  </div>
                </a>
              </div>
              <div className="col-lg-4">
                <a className="offers-item">
                  <div className="offer-img">
                    <img src="images/offers/img-2.jpg" alt="" />
                  </div>
                  <div className="offers-text">
                    <h4>📢 Offer Title Here!</h4>
                    <p>Up to 25% off on Grocery & Staples & much more</p>
                  </div>
                </a>
              </div>
              <div className="col-lg-4">
                <a className="offers-item">
                  <div className="offer-img">
                    <img src="images/offers/img-3.jpg" alt="" />
                  </div>
                  <div className="offers-text">
                    <h4>📢 Offer Title Here!</h4>
                    <p>Up to 75% off on Personal Care & much more</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;
