import React, { useEffect, useState } from "react";
import { useStateValue } from "../../../StateProvider";
import "react-pro-sidebar/dist/css/styles.css";
import Sidebar from "../../Sidebar/Index";
import {  toast } from 'react-toastify';

function Index() {
  const [{ basket, user }, dispatch] = useStateValue();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const getTotal=()=>{
	return(basket.length>0)? basket.reduce((total,item)=>{
	  item.count=Number(item.count)
	  item.price=Number(item.price)
	  return total+=item.price*item.count
	},0):0
  }
  const getTotalItem=()=>{
	return(basket.length>0)? basket.reduce((total,item)=>{
	  item.count=Number(item.count)
	  return total+=item.count
	},0):0
  }
  const removeFromBasket=(id)=>{
	// dispatch the item insto the data-layer
	dispatch({
		type:'REMOVE_FROM_CART',
		id:id
	})
	toast.error('Removed From Cart', {
		position: "bottom-right",
		autoClose: 5000,
		hideProgressBar: true,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: undefined,
		}); 
}
  let toggleSidebar = (status) => {
    setSidebarOpen(!status);
  };
  useEffect(() => {
	  console.log(basket)
    if (basket.length > 0) {
      toggleSidebar(false);
    }
  }, [basket]);
  return (
    <div className="header_cart order-1">
      <Sidebar
        isSidebarOpen={sidebarOpen}
        onSidebarToggle={toggleSidebar}
        togglerButton={
          <a className="cart__btn hover-btn pull-bs-canvas-left" title="Cart">
            <i className="fa fa-shopping-cart"></i>Cart
            <ins>{basket?.length}</ins>
            <i className="uil uil-angle-down"></i>
          </a>
        }
        sidebarCloseIcon={<i className="fa fa-close"></i>}
        children={
          <>
            <div className="bs-canvas-header side-cart-header p-3 ">
              <div className="d-inline-block  main-cart-title">
                My Cart <span>{getTotalItem}Items</span>
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
                      <div className="cart-item" key={index}> 
                        <div className="cart-product-img">
                          <img src={item.image} alt="" />
                          <div className="offer-badge">-{item.discount}%</div>
                        </div>
                        <div className="cart-text">
                          <h4>{item.title}</h4>
                          <div className="cart-radio">
                            {/* <ul className="kggrm-now">
									<li>
										<input type="radio" id="a1" name="cart1"/>
										<label >0.50</label>
									</li>
									<li>
										<input type="radio" id="a2" name="cart1"/>
										<label >1kg</label>
									</li>
									<li>
										<input type="radio" id="a3" name="cart1"/>
										<label >2kg</label>
									</li>
									<li>
										<input type="radio" id="a4" name="cart1"/>
										<label >3kg</label>
									</li>
								</ul> */}
                          </div>
                          <div className="qty-group">
                            <div className="quantity buttons_added">
                              <button className="" ><i className="fa fa-minus"></i></button>
							  <input style={{maxWidth:"20px"}} type="text" value={item.count} />
							  <button className=""><i className="fa fa-plus"></i></button>
                            </div>
                            <div className="cart-item-price">
                              Rs{item.price} <span>Rs{item.price}</span>
                            </div>
                          </div>

                          <button type="button" className="cart-close-btn" onClick={()=>removeFromBasket(item.id)}>
                            <i className="fa fa-times"></i>
                          </button>
                        </div>
                      </div>
                    ))
                  : ""}
              </div>
            </div>
            <div className="bs-canvas-footer">
              <div className="cart-total-dil saving-total ">
                {/* <h4>Total Saving</h4>
                <span>$11</span> */}
              </div>
              <div className="main-total-cart">
                <h2>Total</h2>
                <span>Rs{getTotal()}</span>
              </div>
              <div className="checkout-cart">
                <a href="#" className="promo-code">
                  Have a promocode?
                </a>
                <a href="#" className="cart-checkout-btn hover-btn">
                  Proceed to Checkout
                </a>
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
