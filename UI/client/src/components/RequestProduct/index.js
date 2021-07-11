import React from "react";
import { Link } from "react-router-dom";

function index() {
  return (
    <div>
      <div class="wrapper">
        <div class="gambo-Breadcrumb">
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <nav aria-label="breadcrumb">
                  <ol class="breadcrumb">
                    <li class="breadcrumb-item">
                      <Link to={`/home`}>Home</Link>
                    </li>
                    <li class="breadcrumb-item active" aria-current="page">
                      Request Product
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
        <div class="request-grid">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-lg-12">
                <div class="default-title">
                  <h2>Request Product?</h2>
                  <img src="images/line.svg" alt="" />
                </div>
              </div>
              <div class="col-lg-6">
                <div class="request-products">
                  <div class="form-group">
                    <input
                      type="text"
                      value=""
                      data-role="tagsinput"
                      placeholder="Type Product"
                    />
                  </div>
                  <button
                    class="next-btn16 hover-btn mt-3 rqst-btn"
                    type="submit"
                  >
                    Request Product
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="life-gambo pb-3">
          <div class="container">
            <div class="row">
              <div class="col-lg-12">
                <div class="default-title">
                  <h2>How Do I Request Product?</h2>
                  <p>How Do I order for Request on Gambo</p>
                  <img src="images/line.svg" alt="" />
                </div>
              </div>
              <div class="col-lg-4 col-md-6">
                <div class="how-order-steps">
                  <div class="how-order-icon">
                    <i class="uil uil-text"></i>
                  </div>
                  <h4>Type Product</h4>
                </div>
              </div>
              <div class="col-lg-4 col-md-6">
                <div class="how-order-steps">
                  <div class="how-order-icon">
                    <i class="uil uil-location-arrow-alt"></i>
                  </div>
                  <h4>Select Product</h4>
                </div>
              </div>
              <div class="col-lg-4 col-md-6">
                <div class="how-order-steps">
                  <div class="how-order-icon">
                    <i class="uil uil-box"></i>
                  </div>
                  <h4>Request Order Product</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;
