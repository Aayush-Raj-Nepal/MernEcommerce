import React, { useState, useEffect } from "react";
import { getCategory } from "../../api/helper";
import { Link } from "react-router-dom";
function Footer() {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    (async () => {
      return getCategory().then((res) => {
        console.log(res);
        setCategory(res);
      });
    })();
  }, []);
  return (
    <div>
      <footer className="footer">
        <div className="footer-first-row">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-sm-6">
                <ul className="call-email-alt">
                  <li>
                    <a href="#" className="callemail">
                      <i className="uil uil-dialpad-alt"></i>977 9851095624
                    </a>
                  </li>
                  <li>
                    <a href="#" className="callemail">
                      <i className="uil uil-envelope-alt"></i>
                      esubidhaonline@gmail.com
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-md-6 col-sm-6">
                <div className="social-links-footer">
                  <ul>
                    <li>
                      <a href="#">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>

                    <li>
                      <a href="#">
                        <i className="fab fa-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-second-row">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="second-row-item">
                  <h4>Categories</h4>
                  <ul>
                    {category &&
                      category.length > 0 &&
                      category.map((cat, index) => (
                        <li key={index}>
                          <Link to="/">{cat.eng_name}</Link>
                        </li>
                      ))}
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="second-row-item">
                  <h4>Useful Links</h4>
                  <ul>
                    <li>
                      <a href="about_us.html">About US</a>
                    </li>
                    <li>
                      <a href="shop_grid.html">Featured Products</a>
                    </li>
                    <li>
                      <a href="offers.html">Offers</a>
                    </li>
                    <li>
                      <a href="our_blog.html">Blog</a>
                    </li>
                    <li>
                      <a href="faq.html">Faq</a>
                    </li>
                    <li>
                      <a href="career.html">Careers</a>
                    </li>
                    <li>
                      <a href="contact_us.html">Contact Us</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="second-row-item">
                  <h4>Top Cities</h4>
                  <ul>
                    <li>
                      <a href="#">Gurugram</a>
                    </li>
                    <li>
                      <a href="#">New Delhi</a>
                    </li>
                    <li>
                      <a href="#">Bangaluru</a>
                    </li>
                    <li>
                      <a href="#">Mumbai</a>
                    </li>
                    <li>
                      <a href="#">Hyderabad</a>
                    </li>
                    <li>
                      <a href="#">Kolkata</a>
                    </li>
                    <li>
                      <a href="#">Ludhiana</a>
                    </li>
                    <li>
                      <a href="#">Chandigrah</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="second-row-item-app">
                  <h4>Download App</h4>
                  <ul>
                    <li>
                      <a href="#">
                        <img
                          className="download-btn"
                          src="images/download-1.svg"
                          alt=""
                        />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img
                          className="download-btn"
                          src="images/download-2.svg"
                          alt=""
                        />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="second-row-item-payment">
                  <h4>Payment Method</h4>
                  <div className="footer-payments">
                    <ul id="paypal-gateway" className="financial-institutes">
                      <li className="financial-institutes__logo">
                        <img
                          alt="Visa"
                          title="Visa"
                          src="images/footer-icons/pyicon-6.svg"
                        />
                      </li>
                      <li className="financial-institutes__logo">
                        <img
                          alt="Visa"
                          title="Visa"
                          src="images/footer-icons/pyicon-1.svg"
                        />
                      </li>
                      <li className="financial-institutes__logo">
                        <img
                          alt="MasterCard"
                          title="MasterCard"
                          src="images/footer-icons/pyicon-2.svg"
                        />
                      </li>
                      <li className="financial-institutes__logo">
                        <img
                          alt="American Express"
                          title="American Express"
                          src="images/footer-icons/pyicon-3.svg"
                        />
                      </li>
                      <li className="financial-institutes__logo">
                        <img
                          alt="Discover"
                          title="Discover"
                          src="images/footer-icons/pyicon-4.svg"
                        />
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="second-row-item-payment">
                  <h4>Newsletter</h4>
                  <div className="newsletter-input">
                    <input
                      id="email"
                      name="email"
                      type="text"
                      placeholder="Email Address"
                      className="form-control input-md"
                      required=""
                    />
                    <button className="newsletter-btn hover-btn" type="submit">
                      <i className="uil uil-telegram-alt"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-last-row">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="footer-bottom-links">
                  <ul>
                    <li>
                      <a href="about_us.html">About</a>
                    </li>
                    <li>
                      <a href="contact_us.html">Contact</a>
                    </li>
                    <li>
                      <a href="privacy_policy.html">Privacy Policy</a>
                    </li>
                    <li>
                      <a href="term_and_conditions.html">Term & Conditions</a>
                    </li>
                    <li>
                      <a href="refund_and_return_policy.html">
                        Refund & Return Policy
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="copyright-text">
                  <i className="uil uil-copyright"></i>Copyright 2020{" "}
                  <b>Gambolthemes</b> . All rights reserved
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
