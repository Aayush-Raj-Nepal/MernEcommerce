import React from 'react'

function Wallet() {
    return (
        <div>
            <div className="col-lg-9 col-md-8">
						<div className="dashboard-right">
							<div className="row">
								<div className="col-md-12">
									<div className="main-title-tab">
										<h4><i className="uil uil-wallet"></i>My Wallet</h4>
									</div>
								</div>								
								<div className="col-lg-6 col-md-12">
									<div className="pdpt-bg">
										<div className="reward-body-dtt">
											<div className="reward-img-icon">
												<img src="images/money.svg" alt=""/>
											</div>
											<span className="rewrd-title">My Balance</span>
											<h4 className="cashbk-price">$120</h4>
											<span className="date-reward">Added : 8 May 2020</span>
										</div>
									</div>
								</div>
								<div className="col-lg-6 col-md-12">
									<div className="pdpt-bg">
										<div className="gambo-body-cash">
											<div className="reward-img-icon">
												<img className="rotate-img" src="images/business.svg" alt=""/>
											</div>
											<span className="rewrd-title">Gambo Cashback Blance</span>
											<h4 className="cashbk-price">$5</h4>
											<p>100% of thiscan be used for your next order.</p>
										</div>
									</div>
								</div>
								<div className="col-lg-12 col-md-12">
									<div className="pdpt-bg">
										<div className="pdpt-title">
											<h4>Active Offers</h4>
										</div>
										<div className="active-offers-body">
											<div className="table-responsive">
												<table className="table ucp-table earning__table">
													<thead className="thead-s">
														<tr>
															<th scope="col">Offers</th>
															<th scope="col">Offer Code</th>
															<th scope="col">Expires Date</th>
															<th scope="col">Status</th>								
														</tr>
													</thead>
													<tbody>
														<tr>										
															<td>15%</td>	
															<td>GAMBOCOUP15</td>	
															<td>31 May 2020</td>	
															<td><b className="offer_active">Activated</b></td>	
														</tr>
														<tr>										
															<td>10%</td>	
															<td>GAMBOCOUP10</td>	
															<td>25 May 2020</td>	
															<td><b className="offer_active">Activated</b></td>	
														</tr>
														<tr>										
															<td>25%</td>	
															<td>GAMBOCOUP25</td>	
															<td>20 May 2020</td>	
															<td><b className="offer_active">Activated</b></td>	
														</tr>
														<tr>										
															<td>5%</td>	
															<td>GAMBOCOUP05</td>	
															<td>15 May 2020</td>	
															<td><b className="offer_active">Activated</b></td>	
														</tr>
													</tbody>				
												</table>
											</div>	
										</div>
									</div>
								</div>
								<div className="col-lg-6 col-md-12">
									<div className="pdpt-bg">
										<div className="pdpt-title">
											<h4>Add Balance</h4>
										</div>
										<div className="add-cash-body">
											<div className="row">
												<div className="col-lg-6 col-md-12">
													<div className="form-group mt-1">
														<label className="control-label">Holder Name*</label>
														<div className="ui search focus">
															<div className="ui left icon input swdh11 swdh19">
																<input className="prompt srch_explore" type="text" name="holdername" value="" id="holder[name]" required="" maxlength="64" placeholder="Holder Name"/>															
															</div>
														</div>
													</div>
												</div> 
												<div className="col-lg-6 col-md-12">
													<div className="form-group mt-1">
														<label className="control-label">Card Number*</label>
														<div className="ui search focus">
															<div className="ui left icon input swdh11 swdh19">
																<input className="prompt srch_explore" type="text" name="cardnumber" value="" id="card[number]" required="" maxlength="64" placeholder="Card Number"/>															
															</div>
														</div>
													</div>
												</div>
												<div className="col-lg-4 col-md-4">
													<div className="form-group mt-1">																	
														<label className="control-label">Expiration Month*</label>
														<select className="ui fluid search dropdown form-dropdown" name="card[expire-month]">
															<option value="">Month</option>
															<option value="1">January</option>
															<option value="2">February</option>
															<option value="3">March</option>
															<option value="4">April</option>
															<option value="5">May</option>
															<option value="6">June</option>
															<option value="7">July</option>
															<option value="8">August</option>
															<option value="9">September</option>
															<option value="10">October</option>
															<option value="11">November</option>
															<option value="12">December</option>
														  </select>	
													</div>
												</div>
												<div className="col-lg-4 col-md-4">
													<div className="form-group mt-1">
														<label className="control-label">Expiration Year*</label>
														<div className="ui search focus">
															<div className="ui left icon input swdh11 swdh19">
																<input className="prompt srch_explore" type="text" name="card[expire-year]" maxlength="4" placeholder="Year"/>															
															</div>
														</div>
													</div>
												</div>
												<div className="col-lg-4 col-md-4">
													<div className="form-group mt-1">
														<label className="control-label">CVV*</label>
														<div className="ui search focus">
															<div className="ui left icon input swdh11 swdh19">
																<input className="prompt srch_explore" name="card[cvc]" maxlength="3" placeholder="CVV"/>															
															</div>
														</div>
													</div>
												</div>
												<div className="col-lg-12 col-md-12">
													<div className="form-group mt-1">
														<label className="control-label">Add Balance*</label>
														<div className="ui search focus">
															<div className="ui left icon input swdh11 swdh19">
																<input className="prompt srch_explore" type="text" name="addbalance" maxlength="3" placeholder="$0"/>															
															</div>
														</div>
													</div>
												</div>
											</div>
											<a href="#" className="next-btn16 hover-btn mt-3">Add Balance</a>
										</div>
									</div>
								</div>
								<div className="col-lg-6 col-md-12">
									<div className="pdpt-bg">
										<div className="pdpt-title">
											<h4>History</h4>
										</div>
										<div className="history-body scrollstyle_4">
											<ul className="history-list">
												<li>
													<div className="purchase-history">
														<div className="purchase-history-left">
															<h4>Purchase</h4>
															<p>Transaction ID <ins>gambo14255896</ins></p>
															<span>6 May 2018, 12.56PM</span>
														</div>
														<div className="purchase-history-right">
															<span>-$25</span>
															<a href="#">View</a>
														</div>
													</div>
												</li>
												<li>
													<div className="purchase-history">
														<div className="purchase-history-left">
															<h4>Purchase</h4>
															<p>Transaction ID <ins>gambo14255895</ins></p>
															<span>5 May 2018, 11.16AM</span>
														</div>
														<div className="purchase-history-right">
															<span>-$21</span>
															<a href="#">View</a>
														</div>
													</div>
												</li>
												<li>
													<div className="purchase-history">
														<div className="purchase-history-left">
															<h4>Purchase</h4>
															<p>Transaction ID <ins>gambo14255894</ins></p>
															<span>4 May 2018, 02.56PM</span>
														</div>
														<div className="purchase-history-right">
															<span>-$30</span>
															<a href="#">View</a>
														</div>
													</div>
												</li>
												<li>
													<div className="purchase-history">
														<div className="purchase-history-left">
															<h4>Purchase</h4>
															<p>Transaction ID <ins>gambo14255893</ins></p>
															<span>3 May 2018, 5.56PM</span>
														</div>
														<div className="purchase-history-right">
															<span>-$15</span>
															<a href="#">View</a>
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
    )
}

export default Wallet
