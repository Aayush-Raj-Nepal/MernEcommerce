import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { API } from "../api/backend";
import { Link } from "react-router-dom";
import renderHTML from "react-render-html";
import axios from "axios";
import { getMediaUrl } from "../api/functions";
import { useStateValue } from "../StateProvider";

function Offer({ match }) {
  const [{ user }, dispatch] = useStateValue();
  const { id } = match.params;
  const [offers, setOffers] = useState([]);
  const [offer, setOffer] = useState([]);
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
  const fetchOffer = () => {
    if (id) {
      axios
        .get(API + "offer/" + id)
        .then((resp) => {
          console.log(resp.data);
          setOffer(resp.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  useEffect(() => {
    window.scroll(0, 0);
    fetchOffers();
    fetchOffer();
  }, [id]);
  return (
    <div>
      <Header></Header>
      <div className="wrapper mt-2">
        <div className="gambo-Breadcrumb">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="Index.html">Home</a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Offers
                    </li>
                    {offer && offer.title && offer.title != "" && (
                      <li
                        className="breadcrumb-item active"
                        aria-current="page"
                      >
                        {offer.title}
                      </li>
                    )}
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
        {offer && offer.title && offer.title != "" && (
          <div className="container mt-2">
            <div className="row">
              <div className="col-lg-10 offset-lg-1">
                <div className="blog-item">
                  <a className="blog-img">
                    <img
                      src={getMediaUrl("product/" + offer.images[0])}
                      alt=""
                    />
                    <div className="blog-cate-badge">{offer.category.name}</div>
                  </a>
                  <div className="date-icons-group">
                    <div className="blog-time sz-14">15 May, 2020</div>
                    <ul className="like-share-icons">
                      <li>
                        <Link
                          to={"/checkout/offer/" + offer._id}
                          className="like-share"
                        >
                          Place Order
                        </Link>
                      </li>
                      <li>
                        <a href="#" className="like-share">
                          <i className="uil uil-share-alt"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="blog-detail">
                    <h4>{offer.title}</h4>
                    <hr />
                    {offer.description && renderHTML(offer.description)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="all-product-grid mb-14 mt-2">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12">
                <div className="default-title mt-4">
                  <h2>Offers</h2>
                  <img src="images/line.svg" alt="" />
                </div>
              </div>

              {offers &&
                offers.length > 0 &&
                offers.map((offer, i) => (
                  <div className="col-lg-4 c-pointer">
                    <Link to={"/offers/" + offer._id} className="offers-item">
                      <div className="offer-img">
                        <img
                          src={getMediaUrl("product/" + offer.images[0])}
                          alt=""
                          style={{ height: "230px" }}
                        />
                      </div>
                      <div className="offers-text">
                        <h4>📢 {offer.title}</h4>
                        <p></p>
                      </div>
                    </Link>
                  </div>
                ))}
            </div>
          </div>
        </div>

        <Footer></Footer>
      </div>
    </div>
  );
}

export default Offer;
