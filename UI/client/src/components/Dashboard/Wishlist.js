import React from "react";
import { useState } from "react";
import { useStateValue } from "../../StateProvider";
import { toast } from "react-toastify";
// import Product from "./Product";

function Wishlist() {
  const [products] = useState([]);
  const [{ wishlist }, dispatch] = useStateValue();
  const removeFromBasket = (pid) => {
    dispatch({
      type: "REMOVE_FROM_WISHLIST",
      id: pid,
    });
    toast.error("Removed From Wishlist", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  console.log(wishlist);
  return (
    <div>
      <div className="col-lg-9 col-md-8">
        <div className="dashboard-right">
          <div className="row">
            <div className="col-md-12">
              <div className="main-title-tab">
                <h4>
                  <i className="fa fa-heart"></i>Shopping Wishlist
                </h4>
              </div>
            </div>
            {wishlist.length == 0 && (
              <div className="alert alert-warning mt-5">
                <h6>Your Wishlist is empty</h6>
              </div>
            )}
            {wishlist.length > 0 && (
              <div className="col-lg-12 col-md-12">
                {wishlist.map((product, index) => (
                  <div className="card bg-white shadow my-3 px-3 py-4">
                    <div key={index}>
                      <img
                        style={{ maxWidth: "200px" }}
                        className="img img-responsive rounded-2 img-thumbnail wishlist-img"
                        src={product.image}
                        alt=""
                      />
                      <div className="offer-badge">-{product.discount}%</div>
                    </div>
                    <div className="">
                      <h4>{product.title}</h4>
                      <div className="">
                        Rs{product.price} <span>Rs{product.price}</span>
                      </div>

                      <button
                        onClick={() => removeFromBasket(product.id)}
                        type="button"
                        className="cart-close-btn2"
                      >
                        <i className="fa fa-times"></i>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Wishlist;
