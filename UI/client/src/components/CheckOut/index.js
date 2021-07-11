import React, { useState, useEffect } from "react";
import { useStateValue } from "../../StateProvider";
import swal from "sweetalert2";
import axios from "axios";
import firebase from "firebase/app";
import { API } from "../../api/backend";
import { InputGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import { set } from "lodash";
import { useHistory } from "react-router-dom";
function Index() {
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [{ basket, cartSidebar, user }, dispatch] = useStateValue();
  // for order
  const history = useHistory();
  const [orderDetails, setOrderDetails] = useState({
    province: "",
    address: "",
    streetAddress: "",
    paymentType: "",
    paymentMethodType: "",
  });
  const setPaymentMethod = (x) => {
    setOrderDetails({ ...orderDetails, paymentType: x });
  };
  const setPaymentMethodType = (x) => {
    setOrderDetails({ ...orderDetails, paymentMethodType: x });
  };
  // for phone verification
  const [phone, setPhone] = useState(user.phone);
  const [verifiedNumber, setVerifiedNumber] = useState(phone);
  const [invalid, setInvalid] = useState(false);
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [verified, setVerified] = useState(false);
  function phoneAuth() {
    let number = phone;
    if (number && number.length >= 10) {
      firebase
        .auth()
        .signInWithPhoneNumber("+977" + number, window.recaptchaVerifier)
        .then(function (confirmationResult) {
          //s is in lowercase
          window.confirmationResult = confirmationResult;
          var coderesult = confirmationResult;
          console.log(coderesult);
          swal.fire("Code sent");
          setSent(true);
          setVerifiedNumber(number);
        })
        .catch(function (error) {
          alert(error.message);
        });
    } else {
      swal.fire({ title: "provide valid phone number", icon: "info" });
    }
  }
  const handleChange = (name) => (event) => {
    setOrderDetails({ ...orderDetails, [name]: event.target.value });
  };
  const handleCode = (event) => {
    setInvalid(false);
    return event.target.value.length == 6 ? verifyCode(event.target.value) : "";
  };
  function verifyCode(code) {
    return window.confirmationResult
      .confirm(code)
      .then(function (result) {
        axios
          .put(API + "user/verifyPhone", {
            phone: phone,
          })
          .then((resp) => {
            setVerified(true);
          })
          .catch((err) => {
            swal.fire("Error verifying phone number");
            console.log(err);
          });
      })
      .catch(function (error) {
        setInvalid(true);
        setLoading(false);
        console.log(error.message);
      });
  }
  useEffect(() => {
    window.scrollTo(0, 0);

    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
      "recaptcha-container"
    );
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
      "sign-in-button",
      {
        size: "invisible",
        callback: function (response) {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
        },
      }
    );
  }, []);

  let totalWithoutDiscount =
    basket.length > 0
      ? basket.reduce((total, item) => {
          item.count = Number(item.count);
          item.price = Number(item.price);
          return (total += item.price * item.count);
        }, 0)
      : 0;

  let total =
    basket.length > 0
      ? basket.reduce((total, item) => {
          item.count = Number(item.count);
          item.price = Number(item.price);
          item.discount = Number(item.discount);
          return (total +=
            (item.price - item.price * (item.discount / 100)) * item.count);
        }, 0)
      : 0;
  let saving = totalWithoutDiscount - total;
  // now place order
  const placeOrder = () => {
    if (!verified) {
      axios
        .post(API + "orders", {
          payload: {
            basket: basket,
            delivery_charge: {
              amount: 0,
              location: "Kathmandu",
              location_description: "HamroPustak.com",
            },
            orderDetails: orderDetails,
            verifiedNumber: verifiedNumber,
          },
        })
        .then((resp) => {
          if (resp.error_message) {
            swal.fire("error placing order");
          } else {
            swal
              .fire({ title: "Your Order Was Placed !", icon: "success" })
              .then((val) => {
                dispatch({
                  type: "EMPTY_BASKET",
                });
                if (orderDetails.paymentType == "onlinepayment") {
                  history.push("/payment/" + resp.data._id);
                } else {
                  history.push("/dashboard/orders");
                }
                // setShowPaymentModal(true)
              });
          }
        })
        .catch((err) => {
          swal.fire(err.response.data.error_message);
          console.log(err);
        });
    } else {
      swal.fire("verify your phone number first");
    }
  };

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
                      Checkout
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
              <div className="col-lg-4 col-md-5">
                <div className="pdpt-bg mt-0">
                  <div className="pdpt-title">
                    <h4>Order Summary</h4>
                  </div>
                  {basket &&
                    basket.length > 0 &&
                    basket.map((item, index) => (
                      <div key={index}>
                        <div className="right-cart-dt-body">
                          <div className="cart-item border_radius">
                            <div className="cart-product-img">
                              <img src={item.image} alt="" />
                              <div className="offer-badge">
                                {item.discount}% OFF
                              </div>
                            </div>
                            <div className="cart-text">
                              <h4>{item.title}</h4>
                              <div className="cart-item-price">
                                Rs
                                {Number(item.price) -
                                  Number(item.price) *
                                    (Number(item.discount) / 100)}{" "}
                                <span>Rs{item.price}</span>X {item.count}
                              </div>
                              <button type="button" className="cart-close-btn">
                                <i className="uil uil-multiply"></i>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  <div className="total-checkout-group">
                    <div className="cart-total-dil">
                      <h4>Subidhaonline.com</h4>
                      <span>Rs{total}</span>
                    </div>
                    <div className="cart-total-dil pt-3">
                      <h4>Delivery Charges</h4>
                      <span>Rs0.00</span>
                    </div>
                  </div>
                  <div className="cart-total-dil saving-total ">
                    <h4>Total Saving</h4>
                    <span>Rs{saving}</span>
                  </div>
                  <div className="payment-secure">
                    <i className="uil uil-padlock"></i>Secure checkout
                  </div>
                </div>
                <div className="checkout-safety-alerts"></div>
              </div>
              <div className="col-lg-8 col-md-7 card py-3">
                <div className="address-fieldset">
                  <div className="row">
                    <div className="col-lg-6 col-md-12">
                      <div className="form-group">
                        <label className="control-label">Province*</label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          onChange={handleChange("province")}
                          placeholder="Province Name"
                          className="form-control input-md"
                          required=""
                        />
                      </div>
                    </div>

                    <div className="col-lg-12 col-md-12">
                      <div className="form-group">
                        <label className="control-label">
                          City / Village *
                        </label>
                        <input
                          id="flat"
                          name="flat"
                          onChange={handleChange("address")}
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
                          onChange={handleChange("streetAddress")}
                          name="street"
                          type="text"
                          placeholder="Street Address"
                          className="form-control input-md"
                        />
                      </div>
                    </div>

                    <div className="col-md-12">
                      <div className="rpt100">
                        <ul className="radio--group-inline-container_1">
                          <li>
                            <div className="radio-item_1">
                              <input
                                id="cashondelivery1"
                                name="paymentmethod"
                                type="radio"
                                onClick={() =>
                                  setPaymentMethod("cashondelivery")
                                }
                              />
                              <label
                                htmlFor="cashondelivery1"
                                className="radio-label_1"
                              >
                                Cash on Delivery
                              </label>
                            </div>
                          </li>
                          <li>
                            <div className="radio-item_1">
                              <input
                                id="card1"
                                name="paymentmethod"
                                type="radio"
                                onClick={() =>
                                  setPaymentMethod("onlinepayment")
                                }
                              />
                              <label htmlFor="card1" className="radio-label_1">
                                Esewa / Khalti
                              </label>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                      <div className="card bg-light p-3 border-0">
                        Verify your phone number :
                        <div id="recaptcha-container"></div>
                        <InputGroup className="mb-2">
                          <InputGroup.Append>
                            <InputGroup.Text className="bg-transparent">
                              <i className="fa fa-mobile-alt bg-none border-0"></i>
                            </InputGroup.Text>
                          </InputGroup.Append>
                          <input
                            type="Number"
                            disabled={sent}
                            className="form-control"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder="Phone Number"
                          />
                          {!verified && (
                            <InputGroup.Append className="border-0">
                              <InputGroup.Text className="bg-transparent">
                                <span
                                  style={{ cursor: "pointer" }}
                                  id="sign-in-button"
                                  onClick={phoneAuth}
                                >
                                  Send Code
                                </span>
                              </InputGroup.Text>
                            </InputGroup.Append>
                          )}
                        </InputGroup>
                        {sent && !verified && (
                          <div className="form-group pos_rel">
                            <label className="control-label">Enter Code</label>
                            <input
                              type="Number"
                              className="form-control"
                              onChange={handleCode}
                            />
                            <span
                              onClick={phoneAuth}
                              className="c-pointer resend-link"
                            >
                              Resend Code
                            </span>
                          </div>
                        )}
                        {verified && !invalid && (
                          <span>
                            Your Phone Number was verified{" "}
                            <i className="text-success fa fa-check"></i>
                          </span>
                        )}
                        {invalid && (
                          <span>
                            {" "}
                            <i className="text-danger fa fa-exclamation"></i>
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  <button
                    className="btn btn-info float-right "
                    onClick={placeOrder}
                  >
                    Place Order
                  </button>
                </div>
                {/* <PaymentModal showStatus={showPaymentModal} togglerButton={paymenttogglerButton}></PaymentModal> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
