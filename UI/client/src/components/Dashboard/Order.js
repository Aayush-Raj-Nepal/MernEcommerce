import React, { useEffect, useState } from "react";
import axios from "axios";
import { API } from "../../api/backend";
function Order() {
  const [orders, setOrders] = useState([]);
  const fetchOrders = () => {
    axios
      .get(API + "orders/myorders")
      .then((resp) => {
        console.log(resp.data);
        setOrders(resp.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    fetchOrders();
  }, []);
  return (
    <div>
      <div className="col-lg-9 col-md-8">
        <div className="dashboard-right">
          <div className="row">
            <div className="col-md-12">
              <div className="main-title-tab">
                <h4>
                  <i className="uil uil-box"></i>My Orders
                </h4>
              </div>
            </div>
            <div className="col-lg-12 col-md-12">
              <div className="pdpt-bg">
                <div className="pdpt-title">
                  <h6>Delivery Timing 10 May, 3.00PM - 6.00PM</h6>
                </div>
                <div className="order-body10">
                  <ul className="order-dtsll">
                    <li>
                      <div className="order-dt-img">
                        <img src="images/groceries.svg" alt="" />
                      </div>
                    </li>
                    <li>
                      <div className="order-dt47">
                        <h4>Gambo - Ludhiana</h4>
                        <p>Delivered - Gambo</p>
                        <div className="order-title">
                          2 Items{" "}
                          <span
                            data-inverted=""
                            data-tooltip="2kg broccoli, 1kg Apple"
                            data-position="top center"
                          >
                            ?
                          </span>
                        </div>
                      </div>
                    </li>
                  </ul>
                  <div className="total-dt">
                    <div className="total-checkout-group">
                      <div className="cart-total-dil">
                        <h4>Sub Total</h4>
                        <span>$25</span>
                      </div>
                      <div className="cart-total-dil pt-3">
                        <h4>Delivery Charges</h4>
                        <span>Free</span>
                      </div>
                    </div>
                    <div className="main-total-cart">
                      <h2>Total</h2>
                      <span>$25</span>
                    </div>
                  </div>
                  <div className="track-order">
                    <h4>Track Order</h4>
                    <div className="bs-wizard">
                      <div className="bs-wizard-step complete">
                        <div className="text-center bs-wizard-stepnum">
                          Placed
                        </div>
                        <div className="progress">
                          <div className="progress-bar"></div>
                        </div>
                        <a href="#" className="bs-wizard-dot"></a>
                      </div>
                      <div className="bs-wizard-step complete">
                        <div className="text-center bs-wizard-stepnum">
                          Packed
                        </div>
                        <div className="progress">
                          <div className="progress-bar"></div>
                        </div>
                        <a href="#" className="bs-wizard-dot"></a>
                      </div>
                      <div className="bs-wizard-step active">
                        <div className="text-center bs-wizard-stepnum">
                          On the way
                        </div>
                        <div className="progress">
                          <div className="progress-bar"></div>
                        </div>
                        <a href="#" className="bs-wizard-dot"></a>
                      </div>
                      <div className="bs-wizard-step disabled">
                        <div className="text-center bs-wizard-stepnum">
                          Delivered
                        </div>
                        <div className="progress">
                          <div className="progress-bar"></div>
                        </div>
                        <a href="#" className="bs-wizard-dot"></a>
                      </div>
                    </div>
                  </div>
                  <div className="alert-offer">
                    <img src="images/ribbon.svg" alt="" />
                    Cashback of $2 will be credit to Gambo Super Market wallet
                    6-12 hours of delivery.
                  </div>
                  <div className="call-bill">
                    <div className="delivery-man">
                      Delivery Boy -{" "}
                      <a href="#">
                        <i className="uil uil-phone"></i> Call Us
                      </a>
                    </div>
                    <div className="order-bill-slip">
                      <a href="#" className="bill-btn5 hover-btn">
                        View Bill
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pdpt-bg">
                <div className="pdpt-title">
                  <h6>Delivery Timing 10 May, 3.00PM - 6.00PM</h6>
                </div>
                <div className="order-body10">
                  <ul className="order-dtsll">
                    <li>
                      <div className="order-dt-img">
                        <img src="images/groceries.svg" alt="" />
                      </div>
                    </li>
                    <li>
                      <div className="order-dt47">
                        <h4>Gambo - Ludhiana</h4>
                        <p>Delivered - Gambo</p>
                        <div className="order-title">
                          2 Items{" "}
                          <span
                            data-inverted=""
                            data-tooltip="2kg broccoli, 1kg Apple"
                            data-position="top center"
                          >
                            ?
                          </span>
                        </div>
                      </div>
                    </li>
                  </ul>
                  <div className="total-dt">
                    <div className="total-checkout-group">
                      <div className="cart-total-dil">
                        <h4>Sub Total</h4>
                        <span>$25</span>
                      </div>
                      <div className="cart-total-dil pt-3">
                        <h4>Delivery Charges</h4>
                        <span>Free</span>
                      </div>
                    </div>
                    <div className="main-total-cart">
                      <h2>Total</h2>
                      <span>$25</span>
                    </div>
                  </div>
                  <div className="track-order">
                    <h4>Track Order</h4>
                    <div className="bs-wizard">
                      <div className="bs-wizard-step complete">
                        <div className="text-center bs-wizard-stepnum">
                          Placed
                        </div>
                        <div className="progress">
                          <div className="progress-bar"></div>
                        </div>
                        <a href="#" className="bs-wizard-dot"></a>
                      </div>
                      <div className="bs-wizard-step complete">
                        <div className="text-center bs-wizard-stepnum">
                          Packed
                        </div>
                        <div className="progress">
                          <div className="progress-bar"></div>
                        </div>
                        <a href="#" className="bs-wizard-dot"></a>
                      </div>
                      <div className="bs-wizard-step complete">
                        <div className="text-center bs-wizard-stepnum">
                          Arrived
                        </div>
                        <div className="progress">
                          <div className="progress-bar"></div>
                        </div>
                        <a href="#" className="bs-wizard-dot"></a>
                      </div>
                      <div className="bs-wizard-step complete">
                        <div className="text-center bs-wizard-stepnum">
                          Delivered
                        </div>
                        <div className="progress">
                          <div className="progress-bar"></div>
                        </div>
                        <a href="#" className="bs-wizard-dot"></a>
                      </div>
                    </div>
                  </div>
                  <div className="call-bill">
                    <div className="delivery-man">
                      <a href="#">
                        <i className="uil uil-rss"></i>Feedback
                      </a>
                    </div>
                    <div className="order-bill-slip">
                      <a href="#" className="bill-btn5 hover-btn">
                        View Bill
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Order;
