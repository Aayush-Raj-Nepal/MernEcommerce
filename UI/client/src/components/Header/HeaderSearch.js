import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { API } from "../../api/backend";
import "./Search.css";
import { getMediaUrl } from "../../api/functions";

function HeaderSearch() {
  const history = useHistory();
  const [products, setProducts] = useState([]);
  const [query, setQuery] = useState("");
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      history.push("/search/" + query);
    }
  };
  const handleSearch = (e) => {
    if (e.target.value !== "" && e.target.value.length >= 3) {
      axios
        .get(API + "product/search/" + e.target.value)
        .then((resp) => {
          console.log(resp.data);
          setProducts(resp.data);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      setProducts([]);
    }
    setQuery(e.target.value);
  };
  const productDetail = (id) => {
    console.log(id);
    setProducts([]);
    history.push("/product/" + id);
  };
  return (
    <div>
      <div class="search input-group">
        <span className="fa fa-search icon"></span>
        <input
          type="text"
          className="form-control form-control-sm"
          onChange={handleSearch}
          placeholder="Search for products.."
          onKeyPress={handleKeyPress}
        />{" "}
        {products.length > 0 && (
          <ul className="results" style={{ display: `block` }}>
            {products &&
              products.map((p) => (
                <li onClick={() => productDetail(p._id)}>
                  <span className="d-flex c-pointer">
                    <div>
                      {p.category.name}
                      <br />
                      <p> {p.eng_name}</p>
                    </div>

                    <img
                      src={getMediaUrl(
                        "product/" + p.images[0] + "?placeholder=true"
                      )}
                      className="ml-auto"
                    />
                  </span>
                </li>
              ))}
          </ul>
        )}
      </div>
      {/* <div className="ui search">
        <div className="ui left icon input swdh10">
          <input
            className="prompt srch10"
            type="text"
            onChange={handleSearch}
            placeholder="Search for products.."
          />
          <i className="fa fa-search"></i>
        </div>
      </div> */}
    </div>
  );
}

export default HeaderSearch;
