import React, { useState, useEffect } from "react";
import { getCategory } from "../../api/helper";
import { Link } from "react-router-dom";
import * as fb from "../../api/firebase";
import swal from "sweetalert2";
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
  const [values, setValues] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    error: "",
    loading: false,
  });
  const { email } = values;
  useEffect(() => {
    setValues({ ...values, error: "", success: false });
  }, []);
  const handleChange = (name) => (event) => {
    const value = event.target.value;
    setValues({ ...values, [name]: value });
  };
  const onSubmit = async (event) => {
    event.preventDefault();
    setValues({ ...values, error: false, loading: true });
    console.log(values);
    let error = values.email == "";
    if (error) {
      swal.fire({
        title: "Email Required",
        icon: "warning",
      });
    } else {
      await fb.emailCollection.add({
        createdOn: new Date(),
        email: values.email,
      });
      swal.fire({
        title: "Thanks for Subscribing",
        icon: "success",
      });
      setValues({
        email: "",
        error: "",
        loading: false,
      });
    }
  };

  return (
    <div>
      <footer className="footer">
        <div className="footer-first-row">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-sm-6">
                <ul className="call-email-alt">
                  <li>
                    <a className="callemail">
                      <i className="fa fa-phone-alt"></i>977 9851095624
                    </a>
                  </li>
                  <li>
                    <a className="callemail">
                      <i className="fa fa-envelope"></i>
                      esubidhaonline@gmail.com
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-md-6 col-sm-6">
                <div className="social-links-footer">
                  <ul>
                    <li>
                      <a>
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>

                    <li>
                      <a>
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
                          <Link to={`/category/${cat._id}`}>
                            {cat.eng_name}
                          </Link>
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
                      <Link to={`/aboutus`}>About US</Link>
                    </li>
                    <li>
                      <Link to={`/featuredproduct`}>Featured Products</Link>
                    </li>
                    <li>
                      <Link to={`/offers`}>Offers</Link>
                    </li>
                    {/* <li>
                      <Link to={`/blog`}>Blog</Link>
                    </li> */}
                    <li>
                      <Link to={`/faq`}>Faq</Link>
                    </li>
                    {/* <li>
                      <Link to={`/careers`}>Careers</Link>
                    </li> */}
                    <li>
                      <Link to={`/contact`}>Contact Us</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="second-row-item">
                  <h4>Our Branches</h4>
                  <ul>
                    <li>
                      <a>Kathmandu</a>
                    </li>
                    {/* <li>
                      <a href="#">Biratnagar</a>
                    </li>
                    <li>
                      <a href="#">Pokhara</a>
                    </li>
                    <li>
                      <a href="#">Dhangadhi</a>
                    </li> */}
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="second-row-item-payment">
                  <h4>Payment Method</h4>
                  <div className="footer-payments">
                    <ul id="paypal-gateway" className="financial-institutes">
                      <li className="financial-institutes__logo">
                        <img
                          alt="Khalti"
                          title="Khalti"
                          src="images/khalti.png"
                        />
                      </li>
                      <li className="financial-institutes__logo">
                        <img alt="esewa" title="esewa" src="images/esewa.jpg" />
                      </li>
                      {/* <li className="financial-institutes__logo">
                        <img
                          alt="MasterCard"
                          title="MasterCard"
                          src="images/footer-icons/pyicon-2.svg"
                        />
                      </li> */}
                    </ul>
                  </div>
                </div>
                <div className="second-row-item-payment">
                  <h4>Newsletter</h4>
                  <div className="newsletter-input">
                    <input
                      id="email"
                      onChange={handleChange("email")}
                      value={email}
                      name="email"
                      type="text"
                      placeholder="Email Address"
                      className="form-control input-md"
                      required=""
                    />
                    <button
                      className="newsletter-btn hover-btn"
                      type="submit"
                      onClick={onSubmit}
                    >
                      <i className="fa fa-envelope"></i>
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
                      <Link to={`/aboutus`}>About</Link>
                    </li>
                    <li>
                      <Link to={`/contact`}>Contact</Link>
                    </li>
                    <li>
                      <Link to={`/privacypolicy`}>Privacy Policy</Link>
                    </li>
                    <li>
                      <Link to={`/terms`}>Term & Conditions</Link>
                    </li>
                    <li>
                      <Link to={`/refundpolicy`}>Refund & Return Policy</Link>
                    </li>
                  </ul>
                </div>
                <div className="copyright-text">
                  <i className="uil uil-copyright"></i>Copyright 2020
                  <b>Subidhaonline</b> . All rights reserved
                </div>
                <small>
                  Developed by <a href="http://asoftnepal.com"> Asoft Nepal</a>{" "}
                </small>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
