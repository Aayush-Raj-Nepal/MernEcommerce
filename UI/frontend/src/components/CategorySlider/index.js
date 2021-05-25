import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive={
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1024
      },
      items: 6,
    },
    mobile: {
      breakpoint: {
        max: 464,
        min: 0
      },
      items: 2,
    },
    tablet: {
      breakpoint: {
        max: 1024,
        min: 464
      },
      items: 4,
    }
  }
function CategorySlider() {
    return (
        <div>
            <div className="section145">
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<div className="main-title-tt">
							<div className="main-title-left">
								<span>Shop By</span>
								<h2>Categories</h2>
							</div>
						</div>
					</div>
					<div className="col-md-12">
						<Carousel
                        additionalTransfrom={0}
                        arrows
                        autoPlaySpeed={3000}
                        centerMode={false}
                        className=""
                        containerClass="cate-slider "
                        dotListClass=""
                        draggable
                        focusOnSelect={false}
                        infinite
                        itemClass="item p-4"
                        keyBoardControl
                        minimumTouchDrag={80}
                        renderButtonGroupOutside={false}
                        renderDotsOutside={false}
                        responsive={responsive}
                        showDots={false}
                        sliderClass=""
                        slidesToSlide={1}
                        swipeable
                        
                        
                        >
							<div className="item">
								<a href="#" className="category-item">
									<div className="cate-img">
										<img style={{'height':'128px'}}  src="images/category/icon-1.svg" alt=""/>
									</div>
									<h4>Vegetables & Fruits</h4>
								</a>
							</div>
							<div className="item">
								<a href="#" className="category-item">
									<div className="cate-img">
										<img  src="images/category/icon-2.svg" alt=""/>
									</div>
									<h4> Grocery & Staples </h4>
								</a>
							</div>
							<div className="item">
								<a href="#" className="category-item">
									<div className="cate-img">
										<img  src="images/category/icon-3.svg" alt=""/>
									</div>
									<h4> Dairy & Eggs </h4>
								</a>
							</div>
							<div className="item">
								<a href="#" className="category-item">
									<div className="cate-img">
										<img  src="images/category/icon-4.svg" alt=""/>
									</div>
									<h4> Beverages </h4>
								</a>
							</div>
							<div className="item">
								<a href="#" className="category-item">
									<div className="cate-img">
										<img  src="images/category/icon-5.svg" alt=""/>
									</div>
									<h4> Snacks </h4>
								</a>
							</div>
							<div className="item">
								<a href="#" className="category-item">
									<div className="cate-img">
										<img  src="images/category/icon-6.svg" alt=""/>
									</div>
									<h4> Home Care </h4>
								</a>
							</div>
							<div className="item">
								<a href="#" className="category-item">
									<div className="cate-img">
										<img  src="images/category/icon-7.svg" alt=""/>
									</div>
									<h4> Noodles & Sauces </h4>
								</a>
							</div>
							<div className="item">
								<a href="#" className="category-item">
									<div className="cate-img">
										<img  src="images/category/icon-8.svg" alt=""/>
									</div>
									<h4> Personal Care </h4>
								</a>
							</div>
							<div className="item">
								<a href="#" className="category-item">
									<div className="cate-img">
										<img  src="images/category/icon-9.svg" alt=""/>
									</div>
									<h4> Pet Care </h4>
								</a>
							</div>
							<div className="item">
								<a href="#" className="category-item">
									<div className="cate-img">
										<img  src="images/category/icon-10.svg" alt=""/>
									</div>
									<h4> Meat & Seafood </h4>
								</a>
							</div>
							<div className="item">
								<a href="#" className="category-item">
									<div className="cate-img">
										<img  src="images/category/icon-11.svg" alt=""/>
									</div>
									<h4> Electronics </h4>
								</a>
							</div>

						</Carousel>
					</div>
				</div>
			</div>
		</div>
        </div>
    )
}

export default CategorySlider
