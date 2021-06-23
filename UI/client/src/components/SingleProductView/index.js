import React from 'react'
import {useState,useEffect} from 'react'
import { getSingleProduct } from "../../api/helper"

import Carousel from "react-multi-carousel";
const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
      partialVisibilityGutter:20
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      partialVisibilityGutter:10,
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      partialVisibilityGutter:5,

      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  
function Index({id}) {
    const [product, setProduct] = useState({})
    useEffect(() => {
        fetchProduct(id);
      }, []);
      const fetchProduct = (id) => {
        getSingleProduct(id)
          .then((resp) => {
            setProduct(resp);
          })
          .catch((err) => {
            console.log(err);
          });
      };
    return (
        <div>
            {product && product.category && <div>
            <div className="wrapper">
		  <div className="gambo-Breadcrumb">
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<nav aria-label="breadcrumb">
							<ol className="breadcrumb">
								<li className="breadcrumb-item"><a>Home</a></li>
								<li className="breadcrumb-item"><a >{product.category.name}</a></li>
								<li className="breadcrumb-item active" aria-current="page">{product.eng_name}</li>
							</ol>
						</nav>
					</div>
				</div>
			</div>
		  </div>
		  <div className="all-product-grid">
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<div className="product-dt-view">
							<div className="row">
								<div className="col-lg-4 col-md-4">
									<div id="sync1" className="owl-carousel owl-theme">
										<div className="item">
											<img src="images/product/big-1.jpg" alt=""/>
										</div>
										<div className="item">
											<img src="images/product/big-2.jpg" alt=""/>
										</div>
										<div className="item">
											<img src="images/product/big-3.jpg" alt=""/>
										</div>
										<div className="item">
											<img src="images/product/big-4.jpg" alt=""/>
										</div>
									</div>
									<div id="sync2" className="owl-carousel owl-theme">
										<div className="item">
											<img src="images/product/big-1.jpg" alt=""/>
										</div>
										<div className="item">
											<img src="images/product/big-2.jpg" alt=""/>
										</div>
										<div className="item">
											<img src="images/product/big-3.jpg" alt=""/>
										</div>
										<div className="item">
											<img src="images/product/big-4.jpg" alt=""/>
										</div>
									</div>
								</div>
								<div className="col-lg-8 col-md-8">
									<div className="product-dt-right">
										<h2>{product.eng_name}</h2>
										<div className="no-stock">
											<p className="pd-no">{product.id}<span>12345</span></p>
											<p className="stock-qty">Available<span>(Instock)</span></p>
										</div>
										<div className="product-radio">
											<ul className="product-now">
												<li>
													<input type="radio" id="p1" name="product1"/>
													<label for="p1">500g</label>
												</li>
												<li>
													<input type="radio" id="p2" name="product1"/>
													<label for="p2">1kg</label>
												</li>
												<li>
													<input type="radio" id="p3" name="product1"/>
													<label for="p3">2kg</label>
												</li>
												<li>
													<input type="radio" id="p4" name="product1"/>
													<label for="p4">3kg</label>
												</li>
											</ul>
										</div>
										<p className="pp-descp">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vulputate, purus at tempor blandit, nulla felis dictum eros, sed volutpat odio sapien id lectus. Cras mollis massa ac congue posuere. Fusce viverra mauris vel magna pretium aliquet. Nunc tincidunt, velit id tempus tristique, velit dolor hendrerit nibh, at scelerisque neque mauris sed ex.</p>
										<div className="product-group-dt">
											<ul>
												<li><div className="main-price color-discount">Discount Price<span>{product.discount}</span></div></li>
												<li><div className="main-price mrp-price">MRP Price<span>$18</span></div></li>
											</ul>
											<ul className="gty-wish-share">
												<li>
													<div className="qty-product">
														<div className="quantity buttons_added">
															<input type="button" value="-" className="minus minus-btn"/>
															<input type="number" step="1" name="quantity" value="1" className="input-text qty text"/>
															<input type="button" value="+" className="plus plus-btn"/>
														</div>
													</div>
												</li>
												<li><span className="like-icon save-icon" title="wishlist"></span></li>
											</ul>
											<ul className="ordr-crt-share">
												<li><button className="add-cart-btn hover-btn"><i className="uil uil-shopping-cart-alt"></i>Add to Cart</button></li>
												<li><button className="order-btn hover-btn">Order Now</button></li>
											</ul>
										</div>
										<div className="pdp-details">
											<ul>
												<li>
													<div className="pdp-group-dt">
														<div className="pdp-icon"><i className="uil uil-usd-circle"></i></div>
														<div className="pdp-text-dt">
															<span>Lowest Price Guaranteed</span>
															<p>Get difference refunded if you find it cheaper anywhere else.</p>
														</div>
													</div>
												</li>
												<li>
													<div className="pdp-group-dt">
														<div className="pdp-icon"><i className="uil uil-cloud-redo"></i></div>
														<div className="pdp-text-dt">
															<span>Easy Returns & Refunds</span>
															<p>Return products at doorstep and get refund in seconds.</p>
														</div>
													</div>
												</li>
											</ul>
									    </div>
								    </div>
							    </div>
						    </div>
					    </div>
				    </div>
		        </div>
            </div>
        </div>
        </div>

<div className="row">
<div className="col-lg-4 col-md-12">
    <div className="pdpt-bg">
        <div className="pdpt-title">
            <h4>More Like This</h4>
        </div>
        <div className="pdpt-body scrollstyle_4">
            <div className="cart-item border_radius">
                <a href="http://gambolthemes.net/html-items/gambo_supermarket_demo/single_product_view.html" className="cart-product-img">
                    <img src="images/product/img-6.jpg" alt=""/>
                    <div className="offer-badge">4% OFF</div>
                </a>
                <div className="cart-text">
                    <h4>Product Title Here</h4>
                    <div className="cart-radio">
                        <ul className="kggrm-now">
                            <li>
                                <input type="radio" id="k1" name="cart1"/>
                                <label for="k1">0.50</label>
                            </li>
                            <li>
                                <input type="radio" id="k2" name="cart1"/>
                                <label for="k2">1kg</label>
                            </li>
                            <li>
                                <input type="radio" id="k3" name="cart1"/>
                                <label for="k3">2kg</label>
                            </li>
                            <li>
                                <input type="radio" id="k4" name="cart1"/>
                                <label for="k4">3kg</label>
                            </li>
                        </ul>
                    </div>
                    <div className="qty-group">
                        <div className="quantity buttons_added">
                            <input type="button" value="-" className="minus minus-btn"/>
                            <input type="number" step="1" name="quantity" value="1" className="input-text qty text"/>
                            <input type="button" value="+" className="plus plus-btn"/>
                        </div>
                        <div className="cart-item-price">$12 <span>$15</span></div>
                    </div>
                </div>
            </div>
            <div className="cart-item border_radius">
                <a href="http://gambolthemes.net/html-items/gambo_supermarket_demo/single_product_view.html" className="cart-product-img">
                    <img src="images/product/img-2.jpg" alt=""/>
                    <div className="offer-badge">6% OFF</div>
                </a>
                <div className="cart-text">
                    <h4>Product Title Here</h4>
                    <div className="cart-radio">
                        <ul className="kggrm-now">
                            <li>
                                <input type="radio" id="k5" name="cart2"/>
                                <label for="k5">0.50</label>
                            </li>
                            <li>
                                <input type="radio" id="k6" name="cart2"/>
                                <label for="k6">1kg</label>
                            </li>
                            <li>
                                <input type="radio" id="k7" name="cart2"/>
                                <label for="k7">2kg</label>
                            </li>
                        </ul>
                    </div>
                    <div className="qty-group">
                        <div className="quantity buttons_added">
                            <input type="button" value="-" className="minus minus-btn"/>
                            <input type="number" step="1" name="quantity" value="1" className="input-text qty text"/>
                            <input type="button" value="+" className="plus plus-btn"/>
                        </div>
                        <div className="cart-item-price">$24 <span>$30</span></div>
                    </div>	
                </div>
            </div>
            <div className="cart-item border_radius">
                <a href="http://gambolthemes.net/html-items/gambo_supermarket_demo/single_product_view.html" className="cart-product-img">
                    <img src="images/product/img-5.jpg" alt=""/>
                </a>
                <div className="cart-text">
                    <h4>Product Title Here</h4>
                    <div className="cart-radio">
                        <ul className="kggrm-now">
                            <li>
                                <input type="radio" id="k8" name="cart3"/>
                                <label for="k8">0.50</label>
                            </li>
                            <li>
                                <input type="radio" id="k9" name="cart3"/>
                                <label for="k9">1kg</label>
                            </li>
                            <li>
                                <input type="radio" id="k10" name="cart3"/>
                                <label for="k10">1.50kg</label>
                            </li>
                        </ul>
                    </div>
                    <div className="qty-group">
                        <div className="quantity buttons_added">
                            <input type="button" value="-" className="minus minus-btn"/>
                            <input type="number" step="1" name="quantity" value="1" className="input-text qty text"/>
                            <input type="button" value="+" className="plus plus-btn"/>
                        </div>
                        <div className="cart-item-price">$15</div>
                    </div>	
                </div>
            </div>	
        </div>
    </div>
</div>
<div className="col-lg-8 col-md-12">
    <div className="pdpt-bg">
        <div className="pdpt-title">
            <h4>Product Details</h4>
        </div>
        <div className="pdpt-body scrollstyle_4">
            <div className="pdct-dts-1">
                <div className="pdct-dt-step">
                    <h4>Description</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque posuere nunc in condimentum maximus. Integer interdum sem sollicitudin, porttitor felis in, mollis quam. Nunc gravida erat eu arcu interdum eleifend. Cras tortor velit, dignissim sit amet hendrerit sed, ultricies eget est. Donec eget urna sed metus dignissim cursus.</p>
                </div>
                <div className="pdct-dt-step">
                    <h4>Benefits</h4>
                    <div className="product_attr">
                        Aliquam nec nulla accumsan, accumsan nisl in, rhoncus sapien.<br/>
                        In mollis lorem a porta congue.<br/>
                        Sed quis neque sit amet nulla maximus dignissim id mollis urna.<br/>
                        Cras non libero at lorem laoreet finibus vel et turpis.<br/>
                        Mauris maximus ligula at sem lobortis congue.<br/>
                    </div>
                </div>
                <div className="pdct-dt-step">
                    <h4>How to Use</h4>
                    <div className="product_attr">
                        The peeled, orange segments can be added to the daily fruit bowl, and its juice is a refreshing drink.
                    </div>
                </div>
                <div className="pdct-dt-step">
                    <h4>Seller</h4>
                    <div className="product_attr">
                        Gambolthemes Pvt Ltd, Sks Nagar, Near Mbd Mall, Ludhana, 141001
                    </div>
                </div>
                <div className="pdct-dt-step">
                    <h4>Disclaimer</h4>
                    <p>Phasellus efficitur eu ligula consequat ornare. Nam et nisl eget magna aliquam consectetur. Aliquam quis tristique lacus. Donec eget nibh et quam maximus rutrum eget ut ipsum. Nam fringilla metus id dui sollicitudin, sit amet maximus sapien malesuada.</p>
                </div>
            </div>			
        </div>					
    </div>
</div>
</div>
</div>
}
</div>
    )
}

export default Index
