import React from "react";

function DeliveryAddress() {
  return (
    <div className="checkout-step-body">
      <div className="checout-address-step">
        <div className="row">
          <div className="col-lg-12">
            <form className="">
              <div className="address-fieldset">
                <div className="row">
                  <div className="col-lg-6 col-md-12">
                    <div className="form-group">
                      <label className="control-label">Name*</label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Name"
                        className="form-control input-md"
                        required=""
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12">
                    <div className="form-group">
                      <label className="control-label">Email Address*</label>
                      <input
                        id="email1"
                        name="email1"
                        type="text"
                        placeholder="Email Address"
                        className="form-control input-md"
                        required=""
                      />
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12">
                    <div className="form-group">
                      <label className="control-label">
                        Flat / House / Office No.*
                      </label>
                      <input
                        id="flat"
                        name="flat"
                        type="text"
                        placeholder="Address"
                        className="form-control input-md"
                        required=""
                      />
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12">
                    <div className="form-group">
                      <label className="control-label">
                        Street / Society / Office Name*
                      </label>
                      <input
                        id="street"
                        name="street"
                        type="text"
                        placeholder="Street Address"
                        className="form-control input-md"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12">
                    <div className="form-group">
                      <label className="control-label">Pincode*</label>
                      <input
                        id="pincode"
                        name="pincode"
                        type="text"
                        placeholder="Pincode"
                        className="form-control input-md"
                        required=""
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12">
                    <div className="form-group">
                      <label className="control-label">Locality*</label>
                      <input
                        id="Locality"
                        name="locality"
                        type="text"
                        placeholder="Enter City"
                        className="form-control input-md"
                        required=""
                      />
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12">
                    <div className="form-group">
                      <div className="address-btns">
                        <button className="save-btn14 hover-btn">Save</button>
                        <a
                          className="collapsed ml-auto next-btn16 hover-btn"
                          role="button"
                          data-toggle="collapse"
                          data-parent="#checkout_wizard"
                          href="#collapseThree"
                        >
                          {" "}
                          Next{" "}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
  return (
    <div className="checkout-step-body">
      <div className="checout-address-step">
        <div className="row">
          <div className="col-lg-12">
            <form className="">
              {/* <!-- Multiple Radios (inline) --> */}
              <div className="form-group">
                <div className="product-radio"></div>
              </div>
              <div className="address-fieldset">
                <div className="row">
                  <div className="col-lg-6 col-md-12">
                    <div className="form-group">
                      <label className="control-label">Name*</label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Name"
                        className="form-control input-md"
                        required=""
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12">
                    <div className="form-group">
                      <label className="control-label">Email Address*</label>
                      <input
                        id="email1"
                        name="email1"
                        type="text"
                        placeholder="Email Address"
                        className="form-control input-md"
                        required=""
                      />
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12">
                    <div className="form-group">
                      <label className="control-label">
                        Flat / House / Office No.*
                      </label>
                      <input
                        id="flat"
                        name="flat"
                        type="text"
                        placeholder="Address"
                        className="form-control input-md"
                        required=""
                      />
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12">
                    <div className="form-group">
                      <label className="control-label">
                        Street / Society / Office Name*
                      </label>
                      <input
                        id="street"
                        name="street"
                        type="text"
                        placeholder="Street Address"
                        className="form-control input-md"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12">
                    <div className="form-group">
                      <label className="control-label">Pincode*</label>
                      <input
                        id="pincode"
                        name="pincode"
                        type="text"
                        placeholder="Pincode"
                        className="form-control input-md"
                        required=""
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12">
                    <div className="form-group">
                      <label className="control-label">Locality*</label>
                      <input
                        id="Locality"
                        name="locality"
                        type="text"
                        placeholder="Enter City"
                        className="form-control input-md"
                        required=""
                      />
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12">
                    <div className="form-group">
                      <div className="address-btns">
                        <button className="save-btn14 hover-btn">Save</button>
                        <a
                          className="collapsed ml-auto next-btn16 hover-btn"
                          role="button"
                          data-toggle="collapse"
                          data-parent="#checkout_wizard"
                          href="#collapseThree"
                        >
                          {" "}
                          Next{" "}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeliveryAddress;
