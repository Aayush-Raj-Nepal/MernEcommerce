import React from 'react'

function Address() {
    return (
        <div>
            <div className="col-lg-9 col-md-8">
						<div className="dashboard-right">
							<div className="row">
								<div className="col-md-12">
									<div className="main-title-tab">
										<h4><i className="uil uil-location-point"></i>My Address</h4>
									</div>
								</div>
								<div className="col-lg-12 col-md-12">
									<div className="pdpt-bg">
										<div className="pdpt-title">
											<h4>My Address</h4>
										</div>
										<div className="address-body">
											<a href="#" className="add-address hover-btn" data-toggle="modal" data-target="#address_model">Add New Address</a>
											<div className="address-item">
												<div className="address-icon1">
													<i className="uil uil-home-alt"></i>
												</div>
												<div className="address-dt-all">
													<h4>Home</h4>
													<p>#0000, St No. 8, Shahid Karnail Singh Nagar, MBD Mall, Frozpur road, Ludhiana, 141001</p>
													<ul className="action-btns">
														<li><a href="#" className="action-btn"><i className="uil uil-edit"></i></a></li>
														<li><a href="#" className="action-btn"><i className="uil uil-trash-alt"></i></a></li>
													</ul>
												</div>
											</div>
											<div className="address-item">
												<div className="address-icon1">
													<i className="uil uil-home-alt"></i>
												</div>
												<div className="address-dt-all">
													<h4>Office</h4>
													<p>#0000, St No. 8, Shahid Karnail Singh Nagar, MBD Mall, Frozpur road, Ludhiana, 141001</p>	
													<ul className="action-btns">
														<li><a href="#" className="action-btn"><i className="uil uil-edit"></i></a></li>
														<li><a href="#" className="action-btn"><i className="uil uil-trash-alt"></i></a></li>
													</ul>
												</div>
											</div>
											<div className="address-item">
												<div className="address-icon1">
													<i className="uil uil-home-alt"></i>
												</div>
												<div className="address-dt-all">
													<h4>Other</h4>
													<p>#0000, St No. 8, Shahid Karnail Singh Nagar, MBD Mall, Frozpur road, Ludhiana, 141001</p>
													<ul className="action-btns">
														<li><a href="#" className="action-btn"><i className="uil uil-edit"></i></a></li>
														<li><a href="#" className="action-btn"><i className="uil uil-trash-alt"></i></a></li>
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
    )
}

export default Address
