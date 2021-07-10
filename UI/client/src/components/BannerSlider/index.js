import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { API } from "../../api/backend";
import { Link } from "react-router-dom";
import axios from "axios";
import { getMediaUrl } from "../../api/functions";
const responsive = {
  desktop: {
    breakpoint: {
      max: 3000,
      min: 1024,
    },
    items: 5,
    partialVisibilityGutter: 40,
  },
  tablet: {
    breakpoint: {
      max: 1024,
      min: 464,
    },
    items: 3,
    partialVisibilityGutter: 30,
  },
  //   largemobile: {
  //     breakpoint: {
  //       max: 425,
  //       min: 320,
  //     },
  //     items: 2,
  //     partialVisibilityGutter: 30,
  //   },
  mobile: {
    breakpoint: {
      max: 320,
      min: 0,
    },
    items: 1,
    partialVisibilityGutter: 10,
  },
};
function BannerSlider() {
  const [offers, setOffers] = useState([]);
  const fetchOffers = () => {
    axios
      .get(API + "offer/active")
      .then((resp) => {
        console.log(resp.data);
        setOffers(resp.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    fetchOffers();
  }, []);
  return (
    <div>
      {offers && offers.length > 0 && (
        <div className="main-banner-slider">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12">
                <Carousel
                  swipeable={true}
                  additionalTransfrom={0}
                  draggable={true}
                  showDots={true}
                  responsive={responsive}
                  autoPlay
                  minimumTouchDrag={80}
                  arrows={true}
                  infinite={true}
                  autoPlaySpeed={3000}
                  keyBoardControl={true}
                  transitionDuration={2500}
                  centerMode={false}
                  containerClass=""
                  removeArrowOnDeviceType={["tablet", "mobile"]}
                  dotListClass=""
                  slidesToSlide={1}
                  itemClass=" px-2"
                >
                  {offers.map((offer, index) => (
                    <div className="item shadow" key={index}>
                      <div className="offer-item">
                        <div className="offer-item-img">
                          <div className="gambo-overlay"></div>
                          <img
                            style={{ height: "171px" }}
                            src={
                              offer.images[0]
                                ? getMediaUrl("product/" + offer.images[0])
                                : "images/banners/offer-1.jpg"
                            }
                            alt=""
                          />
                        </div>
                        <div className="offer-text-dt">
                          <div className="offer-top-text-banner">
                            <p>{offer.discount}% Off</p>
                            <div className="top-text-1">{offer.title}</div>
                            <span>{offer.category.name}</span>
                          </div>
                          <Link
                            to={"/offers/" + offer._id}
                            className="Offer-shop-btn hover-btn"
                          >
                            Shop Now
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default BannerSlider;
