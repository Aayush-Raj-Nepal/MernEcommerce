import React, { useEffect, useState, useRef } from "react";
import { useStateValue } from "../../../StateProvider";
import "react-pro-sidebar/dist/css/styles.css";
import { Link } from "react-router-dom";
import Sidebar from "../../Sidebar/Index";
import { useLocation } from "react-router-dom";
import Product from "./Product";
function Index({ match }) {
  const [{ basket, cartSidebar, user }, dispatch] = useStateValue();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const getTotal = () => {
    return basket.length > 0
      ? basket.reduce((total, item) => {
          item.count = Number(item.count);
          item.price = Number(item.price);
          return (total += item.price * item.count);
        }, 0)
      : 0;
  };
  const newCount = (e, v) => {
    console.log(e.target);
  };
  const getTotalItem = () => {
    return basket.length > 0
      ? basket.reduce((total, item) => {
          item.count = Number(item.count);
          return (total += item.count);
        }, 0)
      : 0;
  };
  let toggleSidebar = (status) => {
    dispatch({
      type: "CART_SIDEBAR_TOGGLE",
    });
  };
  const location = useLocation();
  console.log(location.pathname);
  useEffect(() => {
    const getTotal = () => {
      return basket.length > 0
        ? basket.reduce((total, item) => {
            item.count = Number(item.count);
            item.price = Number(item.price);
            return (total += item.price * item.count);
          }, 0)
        : 0;
    };
  }, [basket]);
  return (
    <div className="header_cart order-1">
      <Sidebar
        isSidebarOpen={cartSidebar}
        onSidebarToggle={toggleSidebar}
        togglerButton={
          <a className="cart__btn hover-btn pull-bs-canvas-left" title="Cart">
            <i className="fa fa-shopping-cart p-1"></i>Cart
            <sup className="badge">{basket?.length}</sup>
          </a>
        }
        sidebarCloseIcon={<i className="fa fa-close"></i>}
        children={
          <>
            <div className="bs-canvas-header side-cart-header p-3 ">
              <div className="d-inline-block  main-cart-title">
                My Cart <span>{basket.length} Items</span>
              </div>
              <button
                type="button"
                className="bs-canvas-close close"
                onClick={() => toggleSidebar(true)}
                aria-label="Close"
              >
                <i className="fa fa-times"></i>
              </button>
            </div>
            <div className="bs-canvas-body">
              <div className="side-cart-items">
                {basket.length > 0
                  ? basket.map((item, index) => (
                      <div key={index}>
                        <Product pid={item.id}></Product>
                      </div>
                    ))
                  : ""}
                <div className="cart-total-dil saving-total ">
                  <h4
                    style={{
                      margin: "auto",
                      textAlign: "center",
                      fontWeight: "bolder",
                    }}
                  >
                    Enjoy Your Shopping
                    <i className="fa fa-smile" style={{ padding: "8px" }}></i>
                  </h4>
                  {/* <span>$11</span>  */}
                </div>
              </div>
            </div>
            <div className="bs-canvas-footer">
              <div className="main-total-cart">
                <h2>Total</h2>
                <span>Rs{getTotal()}</span>
              </div>
              <div className="checkout-cart">
                {/* <a href="#" className="promo-code">
                  Have a promocode?
                </a> */}
                <Link
                  to="/checkout"
                  onClick={() => toggleSidebar(true)}
                  className="cart-checkout-btn hover-btn"
                >
                  Proceed to Checkout{" "}
                  <i
                    className="fa fa-arrow-right"
                    style={{ padding: "5px" }}
                  ></i>
                </Link>
              </div>
            </div>
          </>
        }
      >
        {/* pranish add sidebar content here */}
      </Sidebar>
    </div>
  );
}

export default Index;
