import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
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

function FeaturedProducts() {
    return (
        <div>
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
							<div className="item">
								<div className="product-item">
									<a href="http://gambolthemes.net/html-items/gambo_supermarket_demo/single_product_view.html" className="product-img">
										<img src="images/product/img-1.jpg" alt=""/>
										<div className="product-absolute-options">
											<span className="offer-badge-1">6% off</span>
											<span className="like-icon" title="wishlist"></span>
										</div>
									</a>
									<div className="product-text-dt">
										<p>Available<span>(In Stock)</span></p>
										<h4>Product Title Here</h4>
										<div className="product-price">$12 <span>$15</span></div>
										<div className="qty-cart">
											<div className="quantity buttons_added">
												<input type="button"  className="minus minus-btn"/>
												<input type="number" step="1" name="quantity"  className="input-text qty text"/>
												<input type="button"  className="plus plus-btn"/>
											</div>
											<span className="cart-icon"><i className="uil uil-shopping-cart-alt"></i></span>
										</div>
									</div>
								</div>
							</div>
							<div className="item">
								<div className="product-item">
									<a href="http://gambolthemes.net/html-items/gambo_supermarket_demo/single_product_view.html" className="product-img">
										<img src="images/product/img-2.jpg" alt=""/>
										<div className="product-absolute-options">
											<span className="offer-badge-1">2% off</span>
											<span className="like-icon" title="wishlist"></span>
										</div>
									</a>
									<div className="product-text-dt">
										<p>Available<span>(In Stock)</span></p>
										<h4>Product Title Here</h4>
										<div className="product-price">$10 <span>$13</span></div>
										<div className="qty-cart">
											<div className="quantity buttons_added">
												<input type="button"  className="minus minus-btn"/>
												<input type="number" step="1" name="quantity"  className="input-text qty text"/>
												<input type="button"  className="plus plus-btn"/>
											</div>
											<span className="cart-icon"><i className="uil uil-shopping-cart-alt"></i></span>
										</div>
									</div>
								</div>
							</div>
							<div className="item">
								<div className="product-item">
									<a href="http://gambolthemes.net/html-items/gambo_supermarket_demo/single_product_view.html" className="product-img">
										<img src="images/product/img-3.jpg" alt=""/>
										<div className="product-absolute-options">
											<span className="offer-badge-1">5% off</span>
											<span className="like-icon" title="wishlist"></span>
										</div>
									</a>
									<div className="product-text-dt">
										<p>Available<span>(In Stock)</span></p>
										<h4>Product Title Here</h4>
										<div className="product-price">$5 <span>$8</span></div>
										<div className="qty-cart">
											<div className="quantity buttons_added">
												<input type="button"  className="minus minus-btn"/>
												<input type="number" step="1" name="quantity"  className="input-text qty text"/>
												<input type="button"  className="plus plus-btn"/>
											</div>
											<span className="cart-icon"><i className="uil uil-shopping-cart-alt"></i></span>
										</div>
									</div>
								</div>
							</div>
							<div className="item">
								<div className="product-item">
									<a href="http://gambolthemes.net/html-items/gambo_supermarket_demo/single_product_view.html" className="product-img">
										<img src="images/product/img-4.jpg" alt=""/>
										<div className="product-absolute-options">
											<span className="offer-badge-1">3% off</span>
											<span className="like-icon" title="wishlist"></span>
										</div>
									</a>
									<div className="product-text-dt">
										<p>Available<span>(In Stock)</span></p>
										<h4>Product Title Here</h4>
										<div className="product-price">$15 <span>$20</span></div>
										<div className="qty-cart">
											<div className="quantity buttons_added">
												<input type="button"  className="minus minus-btn"/>
												<input type="number" step="1" name="quantity"  className="input-text qty text"/>
												<input type="button"  className="plus plus-btn"/>
											</div>
											<span className="cart-icon"><i className="uil uil-shopping-cart-alt"></i></span>
										</div>
									</div>
								</div>
							</div>
							<div className="item">
								<div className="product-item">
									<a href="http://gambolthemes.net/html-items/gambo_supermarket_demo/single_product_view.html" className="product-img">
										<img src="images/product/img-5.jpg" alt=""/>
										<div className="product-absolute-options">
											<span className="offer-badge-1">2% off</span>
											<span className="like-icon" title="wishlist"></span>
										</div>
									</a>
									<div className="product-text-dt">
										<p>Available<span>(In Stock)</span></p>
										<h4>Product Title Here</h4>
										<div className="product-price">$9 <span>$10</span></div>
										<div className="qty-cart">
											<div className="quantity buttons_added">
												<input type="button"  className="minus minus-btn"/>
												<input type="number" step="1" name="quantity"  className="input-text qty text"/>
												<input type="button"  className="plus plus-btn"/>
											</div>
											<span className="cart-icon"><i className="uil uil-shopping-cart-alt"></i></span>
										</div>
									</div>
								</div>
							</div>
							<div className="item">
								<div className="product-item">
									<a href="http://gambolthemes.net/html-items/gambo_supermarket_demo/single_product_view.html" className="product-img">
										<img src="images/product/img-6.jpg" alt=""/>
										<div className="product-absolute-options">
											<span className="offer-badge-1">2% off</span>
											<span className="like-icon" title="wishlist"></span>
										</div>
									</a>
									<div className="product-text-dt">
										<p>Available<span>(In Stock)</span></p>
										<h4>Product Title Here</h4>
										<div className="product-price">$7 <span>$8</span></div>
										<div className="qty-cart">
											<div className="quantity buttons_added">
												<input type="button"  className="minus minus-btn"/>
												<input type="number" step="1" name="quantity"  className="input-text qty text"/>
												<input type="button"  className="plus plus-btn"/>
											</div>
											<span className="cart-icon"><i className="uil uil-shopping-cart-alt"></i></span>
										</div>
									</div>
								</div>
							</div>
							<div className="item">
								<div className="product-item">
									<a href="http://gambolthemes.net/html-items/gambo_supermarket_demo/single_product_view.html" className="product-img">
										<img src="images/product/img-7.jpg" alt=""/>
										<div className="product-absolute-options">
											<span className="offer-badge-1">1% off</span>
											<span className="like-icon" title="wishlist"></span>
										</div>
									</a>
									<div className="product-text-dt">
										<p>Available<span>(In Stock)</span></p>
										<h4>Product Title Here</h4>
										<div className="product-price">$6.95 <span>$7</span></div>
										<div className="qty-cart">
											<div className="quantity buttons_added">
												<input type="button"  className="minus minus-btn"/>
												<input type="number" step="1" name="quantity"  className="input-text qty text"/>
												<input type="button"  className="plus plus-btn"/>
											</div>
											<span className="cart-icon"><i className="uil uil-shopping-cart-alt"></i></span>
										</div>
									</div>
								</div>
							</div>
							<div className="item">
								<div className="product-item">
									<a href="http://gambolthemes.net/html-items/gambo_supermarket_demo/single_product_view.html" className="product-img">
										<img src="images/product/img-8.jpg" alt=""/>
										<div className="product-absolute-options">
											<span className="offer-badge-1">3% off</span>
											<span className="like-icon" title="wishlist"></span>
										</div>
									</a>
									<div className="product-text-dt">
										<p>Available<span>(In Stock)</span></p>
										<h4>Product Title Here</h4>
										<div className="product-price">$8 <span>$10</span></div>
										<div className="qty-cart">
											<div className="quantity buttons_added">
												<input type="button"  className="minus minus-btn"/>
												<input type="number" step="1" name="quantity"  className="input-text qty text"/>
												<input type="button"  className="plus plus-btn"/>
											</div>
											<span className="cart-icon"><i className="uil uil-shopping-cart-alt"></i></span>
										</div>
									</div>
								</div>
							</div>
						
                            </Carousel>
                        
					</div>
				</div>
			</div>
            </div>
		</div>
    )
}

export default FeaturedProducts
