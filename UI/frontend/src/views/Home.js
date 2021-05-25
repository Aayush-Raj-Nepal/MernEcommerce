import React from 'react'
import Header from '../components/Header'
import Footer from "../components/Footer"
import BannerSlider from "../components/BannerSlider"
import CategorySlider from "../components/CategorySlider"
function Home() {
    return (
        <div>
            <Header></Header>
            
            <BannerSlider></BannerSlider>
<CategorySlider></CategorySlider>
            <Footer></Footer>
        </div>
    )
}

export default Home
