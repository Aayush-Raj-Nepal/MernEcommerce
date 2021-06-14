import React from "react";

function Reward() {
  return (
    <div>
      <div className="col-lg-9 col-md-8">
        <div className="dashboard-right">
          <div className="row">
            <div className="col-md-12">
              <div className="main-title-tab">
                <h4>
                  <i className="uil uil-gift"></i>My Rewards
                </h4>
              </div>
            </div>
            <div className="col-lg-12 col-md-12">
              <div className="pdpt-bg">
                <ul className="reward-body-all">
                  <li>
                    <div className="total-rewards">
                      <div className="tt-icon">
                        <i className="uil uil-money-withdraw"></i>
                      </div>
                      <span>Cashbacks</span>
                      <h4>$15</h4>
                    </div>
                  </li>
                  <li>
                    <div className="total-rewards">
                      <div className="tt-icon">
                        <i className="uil uil-percentage"></i>
                      </div>
                      <span>Offers</span>
                      <h4>$5</h4>
                    </div>
                  </li>
                  <li>
                    <div className="total-rewards">
                      <div className="tt-icon">
                        <i className="uil uil-tag-alt"></i>
                      </div>
                      <span>Coupons</span>
                      <h4>2</h4>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-12">
              <div className="pdpt-bg">
                <div className="reward-body-dtt">
                  <div className="reward-img-icon">
                    <img src="images/gift.svg" alt="" />
                  </div>
                  <span className="rewrd-title">Cashback Won</span>
                  <h4 className="cashbk-price">$2</h4>
                  <span className="date-reward">12 May 2020</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12">
              <div className="pdpt-bg rewards-coupns">
                <div className="reward-body-dtt">
                  <div className="reward-img-icon">
                    <img src="images/discount.svg" alt="" />
                  </div>
                  <span className="rewrd-title">Offer</span>
                  <h4 className="cashbk-price">Get 25% Cashback</h4>
                  <span className="date-reward">Expires on : 31st May</span>
                </div>
                <div className="top-coup-code" title="Coupon Code">
                  Gambocoup25
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12">
              <div className="pdpt-bg rewards-coupns">
                <div className="reward-body-dtt">
                  <div className="reward-img-icon">
                    <img src="images/coupon.svg" alt="" />
                  </div>
                  <span className="rewrd-title">Coupon Won</span>
                  <h4 className="cashbk-price">Get 10% Cashback</h4>
                  <span className="date-reward">Expires on : 25th May</span>
                </div>
                <div className="top-coup-code" title="Coupon Code">
                  Gambocoup10
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12">
              <div className="pdpt-bg rewards-coupns">
                <div className="reward-body-dtt">
                  <div className="reward-img-icon">
                    <img src="images/discount.svg" alt="" />
                  </div>
                  <span className="rewrd-title">Offer</span>
                  <h4 className="cashbk-price">Get 15% Cashback</h4>
                  <span className="date-reward">Expired on : 5th May</span>
                </div>
                <div className="top-coup-code" title="Coupon Code">
                  Gambocoup15
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12">
              <div className="pdpt-bg rewards-coupns">
                <div className="reward-body-dtt">
                  <div className="reward-img-icon">
                    <img src="images/coupon.svg" alt="" />
                  </div>
                  <span className="rewrd-title">Coupon Won</span>
                  <h4 className="cashbk-price">Get 5% Cashback</h4>
                  <span className="date-reward">Expires on : 20th May</span>
                </div>
                <div className="top-coup-code" title="Coupon Code">
                  Gambocoup5
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12">
              <div className="pdpt-bg">
                <div className="reward-body-dtt">
                  <div className="reward-img-icon">
                    <img src="images/gift.svg" alt="" />
                  </div>
                  <span className="rewrd-title">Cashback Won</span>
                  <h4 className="cashbk-price">$1</h4>
                  <span className="date-reward">3 May 2020</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reward;
