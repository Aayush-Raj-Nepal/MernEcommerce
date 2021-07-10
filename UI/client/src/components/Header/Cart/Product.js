import React, { useState, useEffect } from "react";
import { useStateValue } from "../../../StateProvider";
import { toast } from "react-toastify";
import "./style.css";

function Product({ pid }) {
  const [{ basket }, dispatch] = useStateValue();
  const [product, setProduct] = useState({});
  let { image, title, discount, price, id, count } = product;
  useEffect(() => {
    setProduct(basket.filter((b) => b.id == pid)[0]);
  }, [basket]);
  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_CART",
      id: pid,
    });
    toast.info("Removed From Cart", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  const handlecount = (e, v) => {
    let newCount = 0;
    if (e && e.target.value) {
      newCount = e.target.value;
    } else if (v == "-") {
      newCount = --count;
    } else if (v == "+") {
      newCount = ++count;
    }
    dispatch({
      type: "EDIT_CART_COUNT",
      item: { ...product, count: newCount },
    });
  };
  return (
    <div className="cart-item">
      <div className="cart-product-img">
        <img src={image} alt="" />
        <div className="offer-badge">-{discount}%</div>
      </div>
      <div className="cart-text">
        <h4>{title}</h4>
        <div className="cart-radio">
          <div className="cart-item-price">
            Rs{price} <span>Rs{price}</span>
          </div>
        </div>
        <div className="qty-group">
          <div className="edit-no">
            <button
              className="edit-btn1"
              onClick={() => handlecount(null, "-")}
            >
              <i className="fa fa-minus"></i>
            </button>
            <input
              min={1}
              style={{
                maxWidth: "25px",
                textAlign: "center",
                border: "2px solid #21a1d2",
              }}
              type="text"
              onChange={handlecount}
              value={count}
            />
            <button
              className="edit-btn2"
              onClick={() => handlecount(null, "+")}
            >
              <i className="fa fa-plus"></i>
            </button>
          </div>
        </div>

        <button
          type="button"
          className="cart-close-btn"
          onClick={() => removeFromBasket()}
        >
          <i className="fa fa-times"></i>
        </button>
      </div>
    </div>
  );
}

export default Product;
