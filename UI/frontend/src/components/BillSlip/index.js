import React from 'react'
import BillHeader from './BillHeader'

function index() {
    return (
        <div>
            <BillHeader></BillHeader>
            
            <div className="bill-dt-bg">
		<div className="container">
			<div className="row justify-content-center">
				<div className="col-lg-8">
					<div className="bill-detail">
						<div className="bill-dt-step">
							<div className="bill-title">
								<h4>Items</h4>
							</div>
							<div className="bill-descp">
								<div className="itm-ttl">4 items</div>
								<span className="item-prdct">Apple 1kg</span>
								<span className="item-prdct">Paneer 1kg</span>
								<span className="item-prdct">Banana 2kg</span>
								<span className="item-prdct">Potato 3kg</span>
							</div>
						</div>
						<div className="bill-dt-step">
							<div className="bill-title">
								<h4>Delivery Address</h4>
							</div>
							<div className="bill-descp">
								<div className="itm-ttl">Home</div>
								<p className="bill-address">#0000, St No. 8, Shahid Karnail Singh Nagar, MBD Mall, Frozpur road, Ludhiana, 141001</p>
							</div>
						</div>
						<div className="bill-dt-step">
							<div className="bill-title">
								<h4>Payment</h4>
							</div>
							<div className="bill-descp">
								<div className="total-checkout-group p-0 border-top-0">
									<div className="cart-total-dil">
										<h4>Subtotal</h4>
										<span>$15</span>
									</div>
									<div className="cart-total-dil pt-3">
										<h4>Delivery Charges</h4>
										<span>$1</span>
									</div>
								</div>
								<div className="main-total-cart pl-0 pr-0 pb-0 border-bottom-0">
									<h2>Total</h2>
									<span>$16</span>
								</div>
							</div>
						</div>
						<div className="bill-dt-step">
							<div className="bill-title">
								<h4>Delivery Details</h4>
							</div>
							<div className="bill-descp">
								<p className="bill-dt-sl"><b>Super Store</b> - <span className="dly-loc">Ludhiana</span> - <span className="dlr-ttl25">$26</span></p>
								<p className="bill-dt-sl">Order ID - <span className="descp-bll-dt">ORDER1245638</span></p>
								<p className="bill-dt-sl">Items - <span className="descp-bll-dt">4</span></p>
								<p className="bill-dt-sl">Timing - <span className="descp-bll-dt">26 May 2020 , Tuesday, 3.00PM - 5.00PM</span></p>
							</div>
						</div>
						<div className="bill-dt-step">
							<div className="bill-title">
								<h4>Payment Option</h4>
							</div>
							<div className="bill-descp">
								<p className="bill-dt-sl"><span className="dlr-ttl25 mr-1"><i className="uil uil-check-circle"></i></span>Cash on Delivery</p>
							</div>
						</div>
						<div className="bill-dt-step">
							<div className="bill-bottom">
								<div className="thnk-ordr">Thanks for Ordering</div>
								<a className="print-btn hover-btn" href="javascript:window.print();">Print</a>
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

export default index
