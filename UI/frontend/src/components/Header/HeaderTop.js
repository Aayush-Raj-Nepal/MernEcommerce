import React from 'react'

function HeaderTop() {
    return (
        <div>
                 	<div className="top-header-group">
			<div className="top-header">
				<div className="res_main_logo">
					<a href="index.html"><img src="images/dark-logo-1.svg" alt="" /></a>
				</div>
				<div className="main_logo" id="logo">
					<a href="index.html"><img src="images/logo.svg" alt=""/></a>
					<a href="index.html"><img className="logo-inverse" src="images/dark-logo.svg" alt=""/></a>
				</div>
				<div className="select_location">
					<div className="ui inline dropdown loc-title">
						<div className="text">
						  <i className="uil uil-location-point"></i>
						  Gurugram
						</div>
						<i className="uil uil-angle-down icon__14"></i>
						<div className="menu dropdown_loc">
							<div className="item channel_item">
								<i className="uil uil-location-point"></i>
								Gurugram
							</div>
							<div className="item channel_item">
								<i className="uil uil-location-point"></i>
								New Delhi
							</div>
							<div className="item channel_item">
								<i className="uil uil-location-point"></i>
								Bangaluru
							</div>
							<div className="item channel_item">
								<i className="uil uil-location-point"></i>
								Mumbai
							</div>
							<div className="item channel_item">
								<i className="uil uil-location-point"></i>
								Hyderabad
							</div>
							<div className="item channel_item">
								<i className="uil uil-location-point"></i>
								Kolkata
							</div>
							<div className="item channel_item">
								<i className="uil uil-location-point"></i>
								Ludhiana
							</div>
							<div className="item channel_item">
								<i className="uil uil-location-point"></i>
								Chandigrah
							</div>
						</div>
					</div>
				</div>
				<div className="search120">
					<div className="ui search">
					  <div className="ui left icon input swdh10">
						<input className="prompt srch10" type="text" placeholder="Search for products.."/>
						<i className='uil uil-search-alt icon icon1'></i>
					  </div>
					</div>
				</div>
				<div className="header_right">
					<ul>
						<li>
							<a href="#" className="offer-link"><i className="uil uil-phone-alt"></i>1800-000-000</a>
						</li>
						<li>
							<a href="offers.html" className="offer-link"><i className="uil uil-gift"></i>Offers</a>
						</li>
						<li>
							<a href="faq.html" className="offer-link"><i className="uil uil-question-circle"></i>Help</a>
						</li>
						<li>
							<a href="dashboard_my_wishlist.html" className="option_links" title="Wishlist"><i className='uil uil-heart icon_wishlist'></i><span className="noti_count1">3</span></a>
						</li>	
						<li className="ui dropdown">
							<a href="#" className="opts_account">
								<img src="images/avatar/img-5.jpg" alt=""/>
								<span className="user__name">John Doe</span>
								<i className="uil uil-angle-down"></i>
							</a>
							<div className="menu dropdown_account">
								<div className="night_mode_switch__btn">
									<a href="#" id="night-mode" className="btn-night-mode">
										<i className="uil uil-moon"></i> Night mode
										<span className="btn-night-mode-switch">
											<span className="uk-switch-button"></span>
										</span>
									</a>
								</div>	
								<a href="dashboard_overview.html" className="item channel_item"><i className="uil uil-apps icon__1"></i>Dashbaord</a>								
								<a href="dashboard_my_orders.html" className="item channel_item"><i className="uil uil-box icon__1"></i>My Orders</a>
								<a href="dashboard_my_wishlist.html" className="item channel_item"><i className="uil uil-heart icon__1"></i>My Wishlist</a>
								<a href="dashboard_my_wallet.html" className="item channel_item"><i className="uil uil-usd-circle icon__1"></i>My Wallet</a>
								<a href="dashboard_my_addresses.html" className="item channel_item"><i className="uil uil-location-point icon__1"></i>My Address</a>
								<a href="offers.html" className="item channel_item"><i className="uil uil-gift icon__1"></i>Offers</a>
								<a href="faq.html" className="item channel_item"><i className="uil uil-info-circle icon__1"></i>Faq</a>
								<a href="sign_in.html" className="item channel_item"><i className="uil uil-lock-alt icon__1"></i>Logout</a>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
        </div>
    )
}

export default HeaderTop
