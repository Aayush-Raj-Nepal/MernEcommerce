import React, { useEffect, useState } from "react";
import * as fb from "../../api/firebase";
import renderHTML from "react-render-html";

function AboutUs() {
  const [content, setContent] = useState("");
  useEffect(() => {
    const fetchExtras = () => {
      fb.extrasCollection
        .orderBy("createdOn", "desc")
        .onSnapshot((snapshot) => {
          let extrasArray = [];
          snapshot.forEach((doc) => {
            let post = doc.data();
            post.id = doc.id;
            extrasArray.push(post);
          });
          let contact = extrasArray.filter((e) => e.type == "AboutUs")[0];
          setContent(contact ? contact.content : "");
        });
    };

    fetchExtras();
  }, []);
  return (
    <div>
      <div className="wrapper">
        <div className="life-gambo">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="default-title left-text">
                  <h2>About Subidhaonline</h2>
                </div>
                <div className="about-content">
                  <p>{renderHTML(content)}</p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="about-img">
                  <img src="images/about.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="about-steps-group white-bg">
          <div className="container">
            <div className="row">
              <div className="col-lg-3">
                <div className="about-step">
                  <div className="about-step-img">
                    <img src="images/about/icon-1.svg" alt="" />
                  </div>
                  <h4>400+</h4>
                  <p>
                    People have joined the Gambo team in the past six months
                  </p>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="about-step">
                  <div className="about-step-img">
                    <img src="images/about/icon-2.svg" alt="" />
                  </div>
                  <h4>2x</h4>
                  <p>Rate of growth in our monthly user base</p>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="about-step">
                  <div className="about-step-img">
                    <img src="images/about/icon-3.svg" alt="" />
                  </div>
                  <h4>10 days</h4>
                  <p>Time taken to launch in 8 cities across India</p>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="about-step">
                  <div className="about-step-img">
                    <img src="images/about/icon-4.svg" alt="" />
                  </div>
                  <h4>95k</h4>
                  <p>App downloads on iOS and Android</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="life-gambo">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="default-title">
                  <h2>Our Team</h2>
                  <p>Teamwork Makes the Dream Work</p>
                  <img src="images/line.svg" alt="" />
                </div>
                <div className="dd-content">
                  <div className="owl-carousel team-slider owl-theme">
                    <div className="item">
                      <div className="team-item">
                        <div className="team-img">
                          <img src="images/team/img-1.jpg" alt="" />
                        </div>
                        <h4>Joginder Singh</h4>
                        <span>CEO & Co-Founder</span>
                        <ul className="team-social">
                          <li>
                            <a href="#" className="scl-btn hover-btn">
                              <i className="fab fa-facebook-f"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#" className="scl-btn hover-btn">
                              <i className="fab fa-linkedin-in"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="item">
                      <div className="team-item">
                        <div className="team-img">
                          <img src="images/team/img-2.jpg" alt="" />
                        </div>
                        <h4>John Doe</h4>
                        <span>CTO & Senior Developer</span>
                        <ul className="team-social">
                          <li>
                            <a href="#" className="scl-btn hover-btn">
                              <i className="fab fa-facebook-f"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#" className="scl-btn hover-btn">
                              <i className="fab fa-linkedin-in"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="item">
                      <div className="team-item">
                        <div className="team-img">
                          <img src="images/team/img-3.jpg" alt="" />
                        </div>
                        <h4>Jassica William</h4>
                        <span>HR Manager</span>
                        <ul className="team-social">
                          <li>
                            <a href="#" className="scl-btn hover-btn">
                              <i className="fab fa-facebook-f"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#" className="scl-btn hover-btn">
                              <i className="fab fa-linkedin-in"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="item">
                      <div className="team-item">
                        <div className="team-img">
                          <img src="images/team/img-4.jpg" alt="" />
                        </div>
                        <h4>Zoena Singh</h4>
                        <span>Senior Sales Manager</span>
                        <ul className="team-social">
                          <li>
                            <a href="#" className="scl-btn hover-btn">
                              <i className="fab fa-facebook-f"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#" className="scl-btn hover-btn">
                              <i className="fab fa-linkedin-in"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="how-order-gambo">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="default-title">
                  <h2>How Do I Order?</h2>
                  <p>How Do I order on Gambo</p>
                  <img src="images/line.svg" alt="" />
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="how-order-steps">
                  <div className="how-order-icon">
                    <i className="uil uil-search"></i>
                  </div>
                  <h4>
                    Browse gambo.com for products or use the search feature
                  </h4>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="how-order-steps">
                  <div className="how-order-icon">
                    <i className="uil uil-shopping-basket"></i>
                  </div>
                  <h4>Add item to your shopping Basket</h4>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="how-order-steps">
                  <div className="how-order-icon">
                    <i className="uil uil-stopwatch"></i>
                  </div>
                  <h4>
                    Choose a convenient delivery time from our 5 Slots* a day
                  </h4>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="how-order-steps">
                  <div className="how-order-icon">
                    <i className="uil uil-money-bill"></i>
                  </div>
                  <h4>
                    Select suitable payment option(Cash, Master, Credit Card,
                    Discover)
                  </h4>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="how-order-steps">
                  <div className="how-order-icon">
                    <i className="uil uil-truck"></i>
                  </div>
                  <h4>
                    Your products will be home-delivered as per your order.
                  </h4>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="how-order-steps">
                  <div className="how-order-icon">
                    <i className="uil uil-smile"></i>
                  </div>
                  <h4>Happy Curstomers</h4>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default AboutUs;
