import { useState, useEffect, setState, Fragment } from "react";
import { useStateValue } from "../../StateProvider";
import Products from "./Products";
import "react-multi-carousel/lib/styles.css";
import { getHomeCategories } from "../../api/helper";
function CategoryProducts() {
  const [state, dispatch] = useStateValue();
  const [category, setCategory] = useState();
  useEffect(() => {
    (async () =>
      await getHomeCategories()
        .then((resp) => {
          setCategory(resp);
        })
        .then((err) => {
          console.log(err);
        }))();
  }, []);


  return (
    <div>
      {category &&
        category.length > 0 &&
        category.map((cat, index) => (
          <div className="section145" key={index}>
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="main-title-tt">
                    <div className="main-title-left">
                      {/*  This section is for additional info <span></span> */}
                      <h2>{cat.eng_name}</h2>
                    </div>
                    <a href="#" className="see-more-btn">
                      See All
                    </a>
                  </div>
                </div>
                <div className="col-md-12">
                      <Products category={cat}></Products>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}

export default CategoryProducts;
