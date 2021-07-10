import React from "react";

function BillHeader() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="top-header-group">
              <div className="top-header">
                <div className="res_main_logo">
                  <a href="index.html">
                    <img src="images/dark-logo-1.svg" alt="" />
                  </a>
                </div>
                <div className="main_logo ml-0" id="logo">
                  <a href="index.html">
                    <img src="images/logo.svg" alt="" />
                  </a>
                  <a href="index.html">
                    <img
                      className="logo-inverse"
                      src="images/dark-logo.svg"
                      alt=""
                    />
                  </a>
                </div>
                <div className="header_right">
                  <a className="report-btn hover-btn">Report on Issue</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BillHeader;
