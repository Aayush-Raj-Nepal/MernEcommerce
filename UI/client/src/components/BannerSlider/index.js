import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
    partialVisibilityGutter: 20,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    partialVisibilityGutter: 10,
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    partialVisibilityGutter: 5,

    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
function BannerSlider() {
  return (
    <div>
      <div className="main-banner-slider">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <Carousel
                swipeable={true}
                draggable={true}
                showDots={false}
                responsive={responsive}
                autoPlay
                arrows={false}
                infinite={true}
                autoPlaySpeed={10000}
                keyBoardControl={true}
                transitionDuration={2500}
                centerMode
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                dotListClass="custom-dot-list-style"
                slidesToSlide={1}
                itemClass="carousel-item-padding-40-px px-3"
              >
                <div className="item">
                  <div className="offer-item">
                    <div className="offer-item-img">
                      <div className="gambo-overlay"></div>
                      <img src="images/banners/offer-1.jpg" alt="" />
                    </div>
                    <div className="offer-text-dt">
                      <div className="offer-top-text-banner">
                        <p>6% Off</p>
                        <div className="top-text-1">Buy More & Save More</div>
                        <span>Fresh Vegetables</span>
                      </div>
                      <a className="Offer-shop-btn hover-btn">Shop Now</a>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="offer-item">
                    <div className="offer-item-img">
                      <div className="gambo-overlay"></div>
                      <img src="images/banners/offer-2.jpg" alt="" />
                    </div>
                    <div className="offer-text-dt">
                      <div className="offer-top-text-banner">
                        <p>5% Off</p>
                        <div className="top-text-1">Buy More & Save More</div>
                        <span>Fresh Fruits</span>
                      </div>
                      <a className="Offer-shop-btn hover-btn">Shop Now</a>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="offer-item">
                    <div className="offer-item-img">
                      <div className="gambo-overlay"></div>
                      <img src="images/banners/offer-3.jpg" alt="" />
                    </div>
                    <div className="offer-text-dt">
                      <div className="offer-top-text-banner">
                        <p>3% Off</p>
                        <div className="top-text-1">Hot Deals on New Items</div>
                        <span>Daily Essentials Eggs & Dairy</span>
                      </div>
                      <a className="Offer-shop-btn hover-btn">Shop Now</a>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="offer-item">
                    <div className="offer-item-img">
                      <div className="gambo-overlay"></div>
                      <img src="images/banners/offer-4.jpg" alt="" />
                    </div>
                    <div className="offer-text-dt">
                      <div className="offer-top-text-banner">
                        <p>2% Off</p>
                        <div className="top-text-1">Buy More & Save More</div>
                        <span>Beverages</span>
                      </div>
                      <a className="Offer-shop-btn hover-btn">Shop Now</a>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="offer-item">
                    <div className="offer-item-img">
                      <div className="gambo-overlay"></div>
                      <img src="images/banners/offer-5.jpg" alt="" />
                    </div>
                    <div className="offer-text-dt">
                      <div className="offer-top-text-banner">
                        <p>3% Off</p>
                        <div className="top-text-1">Buy More & Save More</div>
                        <span>Nuts & Snacks</span>
                      </div>
                      <a className="Offer-shop-btn hover-btn">Shop Now</a>
                    </div>
                  </div>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BannerSlider;
