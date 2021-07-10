import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import Search from "./HeaderSearch";
// import { contactCollection } from "@/firebase";

import { useStateValue } from "../../StateProvider";
function HeaderTop() {
  let history = useHistory();
  const [{ user, wishlist }, dispatch] = useStateValue();
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [drop1, setDrop1] = useState(false);
  const logout = () => {
    dispatch({
      type: "USER_LOGOUT",
    });
    history.push("/signin");
    setIsSignedIn(false);
  };

  useEffect(() => {
    if (user && user.token != null) {
      setIsSignedIn(true);
    } else {
      setIsSignedIn(false);
    }
  }, []);
  return (
    <div>
      <div className="top-header-group">
        <div className="top-header">
          <div className="main_logo" id="logo">
            <Link to="/">
              <img
                src="images/logo.png"
                style={{ maxHeight: "50px", maxWidth: "60px" }}
                alt=""
              />
            </Link>
          </div>
          <Link to="/" className="select_location">
            <p>Subidha Online</p>
          </Link>
          <div className="search120">
            <Search></Search>
          </div>
          <div className="header_right">
            <ul>
              <li>
                <a className="offer-link">
                  <i className="fa fa-phone-alt"></i>9851095624
                </a>
              </li>
              <li>
                <Link to={`/offers`} className="offer-link">
                  <i className="fa fa-gift"></i>Offers
                </Link>
              </li>
              <li>
                <Link to={`/faq`} className="offer-link">
                  <i className="fa fa-question-circle"></i>Help
                </Link>
                <li>
                  <Link
                    to={`dashboard/wishlist`}
                    class="option_links"
                    title="Wishlist"
                  >
                    <i class="far fa-heart icon_wishlist"></i>
                    <span class="noti_count1">{wishlist?.length}</span>
                  </Link>
                </li>
              </li>
              {/* {isSignedIn && (
                <li>
                  <a
                    href="dashboard_my_wishlist.html"
                    className="option_links"
                    title="Wishlist"
                  >
                    <i className="uil uil-heart icon_wishlist"></i>
                    <span className="noti_count1">3</span>
                  </a>
                </li>
              )} */}
              {isSignedIn && user && (
                <li className="ui dropdown" onClick={(e) => setDrop1(!drop1)}>
                  <span className="opts_account">
                    {user.image && (
                      <img
                        src={
                          user.image ? user.image : "images/avatar/img-5.jpg"
                        }
                        alt=""
                      />
                    )}
                    {!user.image && <i className="fa fa-user"></i>}
                    <span className="user__name">{user.name}</span>
                    <i className="uil uil-angle-down"></i>
                  </span>
                  <div
                    className="menu dropdown_account"
                    style={{ display: drop1 == true ? "block" : "none" }}
                  >
                    {/* <div className="night_mode_switch__btn">
                      <a href="#" id="night-mode" className="btn-night-mode">
                        <i className="fa fa-moon"></i> Night mode
                        <span className="btn-night-mode-switch">
                          <span className="uk-switch-button"></span>
                        </span>
                      </a>
                    </div> */}
                    {/* <Link
                      to={`/dashboard/overview`}
                      className="item channel_item"
                    >
                      <i className="fa fa-boxes icon__1"></i>Dashbaord
                    </Link> */}
                    <Link to="/dashboard/orders" className="item channel_item">
                      <i className="fa fa-box icon__1"></i>My Orders
                    </Link>
                    <Link
                      to={`/dashboard/wishlist`}
                      className="item channel_item"
                    >
                      <i className="fa fa-heart icon__1"></i>My Wishlist
                    </Link>
                    {/* <a
                      href="dashboard_my_wallet.html"
                      className="item channel_item"
                    >
                      <i className="uil uil-usd-circle icon__1"></i>My Wallet
                    </a> */}
                    <Link
                      to={`/address`}
                      href="dashboard_my_addresses.html"
                      className="item channel_item"
                    >
                      <i className="fa fa-map-marker icon__1"></i>My Address
                    </Link>
                    <Link
                      to={`/offers`}
                      href="offers.html"
                      className="item channel_item"
                    >
                      <i className="fa fa-gift icon__1"></i>Offers
                    </Link>
                    <Link
                      to={`/faq`}
                      href="faq.html"
                      className="item channel_item"
                    >
                      <i className="fa fa-info-circle icon__1"></i>Faq
                    </Link>
                    <a onClick={() => logout()} className="item channel_item">
                      <i className="fa fa-sign-out-alt icon__1"></i>Logout
                    </a>
                  </div>
                </li>
              )}
              {!isSignedIn && (
                <li>
                  <Link to="/signin" className="offer-link" title="sign in">
                    Sign In <i className="fa fa-user"></i>
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderTop;
