import React from 'react'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'

function PaymentMethod() {
    return (
	<div className="checkout-step-body">
<div className="payment_method-checkout">	
	<div className="row">	
		<div className="col-md-12">
			<div className="rpt100">													
				<ul className="radio--group-inline-container_1">
					<li>
						<div className="radio-item_1">
							<input id="cashondelivery1" value="cashondelivery" name="paymentmethod" type="radio" data-minimum="50.0"/>
							<label for="cashondelivery1" className="radio-label_1">Cash on Delivery</label>
						</div>
					</li>
					<li>
						<div className="radio-item_1">
							<input id="card1" value="card" name="paymentmethod" type="radio" data-minimum="50.0"/>
							<label  for="card1" className="radio-label_1">Credit / Debit Card</label>
						</div>
					</li>
				</ul>
			</div>
			<div className="form-group return-departure-dts" data-method="cashondelivery">															
				<div className="row">
					<div className="col-lg-12">
						<div className="pymnt_title">
							<h4>Cash on Delivery</h4>
							<p>Cash on Delivery will not be available if your order value exceeds $10.</p>
						</div>
					</div>														
				</div>
			</div>
			<div className="form-group return-departure-dts" data-method="card">															
				<div className="row">
					<div className="col-lg-12">
						<div className="pymnt_title mb-4">
							<h4>Credit / Debit Card</h4>
						</div>
					</div>														
					<div className="col-lg-6">
						<div className="form-group mt-1">
							<label className="control-label">Holder Name*</label>
							<div className="ui search focus">
								<div className="ui left icon input swdh11 swdh19">
									<input className="prompt srch_explore" type="text" name="holdername" value="" id="holder[name]" required="" maxlength="64" placeholder="Holder Name"/>															
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-6">
						<div className="form-group mt-1">
							<label className="control-label">Card Number*</label>
							<div className="ui search focus">
								<div className="ui left icon input swdh11 swdh19">
									<input className="prompt srch_explore" type="text" name="cardnumber" value="" id="card[number]" required="" maxlength="64" placeholder="Card Number"/>															
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-4">
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
					<div className="col-lg-4">
						<div className="form-group mt-1">
							<label className="control-label">Expiration Year*</label>
							<div className="ui search focus">
								<div className="ui left icon input swdh11 swdh19">
									<input className="prompt srch_explore" type="text" name="card[expire-year]" maxlength="4" placeholder="Year"/>															
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-4">
						<div className="form-group mt-1">
							<label className="control-label">CVV*</label>
							<div className="ui search focus">
								<div className="ui left icon input swdh11 swdh19">
									<input className="prompt srch_explore" name="card[cvc]" maxlength="3" placeholder="CVV"/>															
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<a href="#" className="next-btn16 hover-btn">Place Order</a>
		</div>
	</div>
</div>
</div>
    )
}

export default PaymentMethod
