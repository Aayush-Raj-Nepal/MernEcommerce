import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";

import { useStateValue } from "../../StateProvider";
function DashboardNav() {
  let history = useHistory();
  const [{ user }, dispatch] = useStateValue();
  const logout = () => {
    dispatch({
      type: "USER_LOGOUT",
    });
    history.push("/signin");
  };
  return (
    <div>
      <div className="left-side-tabs">
        <div className="dashboard-left-links">
          {/* <Link to={`/dashboard/overview`} className="user-item "><i className="fa fa-boxes"></i>Overview</Link> */}
          <Link to={`/dashboard/orders`} className="user-item">
            <i className="fa fa-box"></i>My Orders
          </Link>
          <Link to={`/dashboard/wishlist`} className="user-item">
            <i className="fa fa-heart"></i>Shopping Wishlist
          </Link>
          <Link to={`/dashboard/address`} className="user-item">
            <i className="fa fa-map-marker"></i>My Address
          </Link>
          <a onClick={() => logout()} className="user-item">
            <i className="fa fa-sign-out-alt icon__1"></i>Logout
          </a>
        </div>
      </div>
    </div>
  );
}

export default DashboardNav;
