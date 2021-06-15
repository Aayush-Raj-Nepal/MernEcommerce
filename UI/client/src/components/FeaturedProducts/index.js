import Carousel from "react-multi-carousel";
import {useState,useEffect,setState} from 'react'
import { useStateValue } from '../../StateProvider'
import Product from "./FeatureProduct"
import {featuredProducts} from "../../api/helper";
import {getMediaUrl} from "../../api/functions"
import "react-multi-carousel/lib/styles.css";

function FeaturedProducts() {

	const [state,dispatch]=useStateValue();
	const [products, setProducts] = useState([])
    useEffect(() => {
      (async ()=>{
        return featuredProducts().then(res=>{
          console.log(res)
          setProducts(res)
      })
      })()
        
       
    }, [])

	const Responsive={
		desktop: {
		  breakpoint: {
			max: 3000,
			min: 1024
		  },
		  items: 5,
		  partialVisibilityGutter: 40
		},
		mobile: {
		  breakpoint: {
			max: 464,
			min: 0
		  },
		  items: 1,
		  partialVisibilityGutter: 30
		},
		tablet: {
		  breakpoint: {
			max: 1024,
			min: 464
		  },
		  items: 3,
		  partialVisibilityGutter: 30
		}
	  }
	
	const sliderOptions={
		additionalTransfrom:0,
		arrows:true,
		autoPlaySpeed:3000,
		centerMode:false,
		className:"",
		containerClass:"container-with-dots",
		dotListClass:"",
		draggable:true,
		focusOnSelect:false,
		infinite:true,
		itemClass:"",
		keyBoardControl:true,
		minimumTouchDrag:80,
		renderButtonGroupOutside:false,
		renderDotsOutside:false,
		responsive:Responsive,
		showDots:false,
		sliderClass:"",
		slidesToSlide:1,
		swipeable:true
	}

    return (
        <div>
			{products.length > 0 &&
            <div className="section145">
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<div className="main-title-tt">
							<div className="main-title-left">
								<span>For You</span>
								<h2>Top Featured Products</h2>
							</div>
							<a href="#" className="see-more-btn">See All</a>
						</div>
					</div>
					<div className="col-md-12">
                    <Carousel {...sliderOptions}>
	
					<Product id='123456' title="VGA To Type C Converter" price={1999} image="https://m.media-amazon.com/images/I/715KEM0DqiL._AC_UL480_FMwebp_QL65_.jpg" rating={3}></Product>
					{products.map((product,index) => (
                    <Product key={index} id={product._id} discount={product.discount_history[0].value} title={product.name} price={product.price_history[0].value} image={getMediaUrl('product/'+product.images[0])} rating={5}></Product>
					))}</Carousel>

                        </div>
				</div>
			</div>
            </div>
}
		</div>
    )
}

export default FeaturedProducts
