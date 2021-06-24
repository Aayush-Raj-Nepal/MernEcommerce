import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BannerSlider from "../components/BannerSlider";
import CategorySlider from "../components/CategorySlider";
import FeaturedProducts from "../components/FeaturedProducts";
import CategoryProducts from "../components/CategoryProducts";
import LatestProducts from "../components/LatestProducts";
function Home() {
  return (
    <div>
      <Header></Header>
      <div style={{ marginTop: "155px" }}>
        <BannerSlider></BannerSlider>
      </div>
      <div className="mb-3">
        <CategorySlider></CategorySlider>
      </div>
      <div className="mb-4">
        <FeaturedProducts></FeaturedProducts>
      </div>
      <div className="mb-4">
        <CategoryProducts></CategoryProducts>
      </div>
      <div className="mb-4">
        <LatestProducts></LatestProducts>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Home;
