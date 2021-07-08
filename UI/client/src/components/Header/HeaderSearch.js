import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { API } from "../../api/backend";
import "./Search.css";
import { getMediaUrl } from "../../api/functions";

function HeaderSearch() {
  const history = useHistory();
  const [products, setProducts] = useState([]);
  const handleSearch = (e) => {
    if (e.target.value !== "") {
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
  };
  const productDetail = (id) => {
    history.push("/product/" + id);
  };
  return (
    <div>
      <div class="search">
        <input
          type="text"
          onChange={handleSearch}
          placeholder="Search for products.."
        />
        <ul class="results">
          {products &&
            products.map((p) => (
              <li>
                <span
                  className="d-flex c-pointer"
                  onClick={() => productDetail(p._id)}
                >
                  <div>
                    {p.eng_name}
                    <br />
                    <p>{p.category.name}</p>
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
