import React from "react";

function Filter() {
  return (
    <div>
      <div className="product-top-dt">
        <div className="product-left-title">
          <h2>Vegetables & Fruits</h2>
        </div>
        <a className="filter-btn pull-bs-canvas-right">Filters</a>
        <div className="product-sort">
          <div className="ui selection dropdown vchrt-dropdown">
            <input name="gender" type="hidden" value="default" />
            <i className="dropdown icon d-icon"></i>
            <div className="text">Popularity</div>
            <div className="menu">
              <div className="item" data-value="0">
                Popularity
              </div>
              <div className="item" data-value="1">
                Price - Low to High
              </div>
              <div className="item" data-value="2">
                Price - High to Low
              </div>
              <div className="item" data-value="3">
                Alphabetical
              </div>
              <div className="item" data-value="4">
                Saving - High to Low
              </div>
              <div className="item" data-value="5">
                Saving - Low to High
              </div>
              <div className="item" data-value="6">
                % Off - High to Low
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Filter;
