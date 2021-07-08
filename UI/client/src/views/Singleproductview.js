import React, { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SingleProductView from "../components/SingleProductView";

function Singleproductview({ match }) {
  let { id } = match.params;
  useEffect(() => {
    id = match.params.id;
  }, [id]);
  return (
    <div>
      <Header></Header>
      <div className="mt-5">
        <SingleProductView id={id}></SingleProductView>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Singleproductview;
