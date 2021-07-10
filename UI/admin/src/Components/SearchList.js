import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { API } from "../api/backend";
import "./SearchList.css";
import { getMediaUrl } from "../api/functions";
function SearchList({ selectedItems }) {
  const history = useHistory();
  const [selected, setSelected] = useState([]);
  const [products, setProducts] = useState([]);
  const [query, setQuery] = useState("");
  const deleteItem = (i) => {
    let items = [...selected];
    items.splice(i, 1), setSelected([...items]);
  };
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      history.push("/search/" + query);
    }
  };
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
    setQuery(e.target.value);
  };
  const productClicked = (product) => {
    setQuery("");
    setSelected([...selected, product]);
  };
  const sendData = () => {
    selectedItems(selected);
  };
  return (
    <div>
      <div className="search input-group">
        <div className="container">
          <div className="images d-flex ">
            {selected &&
              selected.length > 0 &&
              selected.map((s, i) => (
                <div key={i} style={{ position: "relative" }}>
                  <img
                    src={getMediaUrl("product/" + s.images[0])}
                    alt={s.eng_name}
                    title={s.eng_name}
                    className="mx-2 my-2"
                    style={{ height: "100px" }}
                  />
                  <span
                    className="badge badge-danger"
                    style={{ position: "absolute", top: "0", right: "0" }}
                    onClick={() => deleteItem(i)}
                  >
                    <i className="fa fa-times"></i>
                  </span>
                </div>
              ))}
          </div>
        </div>
        <br />
        <input
          type="text"
          className="form-control form-control-sm"
          onChange={handleSearch}
          placeholder="Search for products.."
          onKeyPress={handleKeyPress}
        />{" "}
        {products.length > 0 && query.length > 0 && (
          <ul className="results" style={{ display: `block` }}>
            {products &&
              products.map((p) => (
                <li onClick={() => productClicked(p)}>
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
        <button className="btn btn-info btn-sm" onClick={sendData}>
          Save
        </button>
      </div>
    </div>
  );
}

export default SearchList;
