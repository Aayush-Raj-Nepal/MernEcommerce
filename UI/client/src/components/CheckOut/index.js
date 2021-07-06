import React,{useState} from 'react'
import { useStateValue } from "../../StateProvider";
import swal from "sweetalert2"
import PaymentModal from "./Payment"
import axios from "axios"
import {API} from "../../api/backend"
import PhoneVerify from "./PhoneVerify"
import DeliveryAddress from "./DeliveryAddress"
import PaymentMethod from './PaymentMethod';
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
function Index() {
	const[showPaymentModal,setShowPaymentModal]=useState(false)
	const [{ basket,cartSidebar, user }, dispatch] = useStateValue();
let totalWithoutDiscount=(basket.length>0)? basket.reduce((total,item)=>{
		  item.count=Number(item.count)
		  item.price=Number(item.price)
		  return total+=item.price*item.count
		},0):0

		let total=(basket.length>0)? basket.reduce((total,item)=>{
			item.count=Number(item.count)
			item.price=Number(item.price)
			item.discount=Number(item.discount)
			return total+=((item.price-(item.price*(item.discount/100)))*item.count)
		  },0):0
  let saving=totalWithoutDiscount-total
// now place order
const placeOrder=()=>{
	
	axios.post(API+"orders",{payload:{
		basket:basket,
		delivery_charge:{
			amount:0,
			location:'Kathmandu',
			location_description:"HamroPustak.com"
		}
	}
	}).then(resp=>{
		if (resp.error_message) {
			swal.fire("error placing order")
		} else {
			swal.fire({title:"Your Order Was Placed !",icon:"success"}).then(val=>{
				// setShowPaymentModal(true)
			})
		}
	}).catch(err=>{
		swal.fire(err.response.data.error_message)
		console.log(err)
	})
	
}
const paymenttogglerButton=()=>{
	
	return (
		<button className="btn btn-lg">
			Select Payment Option
		</button>
	)
}

		return (
        <div>
            <div className="wrapper">
		<div className="gambo-Breadcrumb">
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<nav aria-label="breadcrumb">
							<ol className="breadcrumb">
								<li className="breadcrumb-item"><a href="index.html">Home</a></li>
								<li className="breadcrumb-item active" aria-current="page">Checkout</li>
							</ol>
						</nav>
					</div>
				</div>
			</div>
		</div>
		<div className="all-product-grid">
			<div className="container">
				<div className="row">
					<div className="col-lg-8 col-md-7">
						<div id="checkout_wizard" className="alert-primary checkout accordion left-chck145">
						<div>
						<Accordion defaultActiveKey="0" id="checkout_wizard" className="checkout accordion left-chck145">
							<Card className="checkout-step">
								<div className="checkout-card" id="headingOne"> 
									<span className="checkout-step-number">1</span>
									<h4 className="checkout-step-title"> 
										<Accordion.Toggle as={Card.Header} eventKey="0" className="wizard-btn" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne"> Phone Number Verification</Accordion.Toggle>
									</h4>
								</div>
								<Accordion.Collapse eventKey="0" id="collapseOne" className="collapse in show" data-parent="#checkout_wizard">
								<PhoneVerify></PhoneVerify>
								</Accordion.Collapse>
							</Card>
						</Accordion>
					</div>
							<div>
                          <Accordion defaultActiveKey="1" id="checkout_wizard" class="checkout accordion left-chck145">
                           <Card class="checkout-step">
								<div class="checkout-card" id="headingTwo">
									<span class="checkout-step-number">2</span>
									<h4 class="checkout-step-title">
										<Accordion.Toggle as={Card.Header} eventKey="1" class="wizard-btn collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo"> Delivery Address</Accordion.Toggle>
									</h4>
								</div>
								<Accordion.Collapse eventKey="1" id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#checkout_wizard">
								<DeliveryAddress></DeliveryAddress>
								</Accordion.Collapse>
							</Card>
                            </Accordion>
                         </div>
					<div>
                        <Accordion defaultActiveKey="2" id="checkout_wizard" class="checkout accordion left-chck145">
                           <Card class="checkout-step">
								<div class="checkout-card" id="headingFour">
									<span class="checkout-step-number">3</span>
									<h4 class="checkout-step-title"> 
										<Accordion.Toggle as={Card.Header} eventKey="2" class="wizard-btn collapsed" type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">Payment</Accordion.Toggle>
									</h4>
								</div>
								<Accordion.Collapse eventKey="2" id="collapseFour" class="collapse" aria-labelledby="headingFour" data-parent="#checkout_wizard">
								<PaymentMethod></PaymentMethod>
								</Accordion.Collapse>
							</Card>
                        </Accordion>
                    </div>
							{/* <button className="btn-block btn-lg btn-info rounded-0" onClick={placeOrder}>Place Order</button>
							<PaymentModal showStatus={showPaymentModal} togglerButton={paymenttogglerButton}></PaymentModal> */}
				</div>
					</div>
					<div className="col-lg-4 col-md-5">
						<div className="pdpt-bg mt-0">
							<div className="pdpt-title">
								<h4>Order Summary</h4>
							</div>
							{basket && basket.length>0 && basket.map((item,index)=>(
							
							<div key={index}>
								<div className="right-cart-dt-body">
								<div className="cart-item border_radius">
									<div className="cart-product-img">
										<img src={item.image} alt=""/>
										<div className="offer-badge">{item.discount}% OFF</div>
									</div>
									<div className="cart-text">
										<h4>{item.title}</h4>
										<div className="cart-item-price">Rs{Number(item.price)-(Number(item.price)*(Number(item.discount)/100))} <span>Rs{item.price}</span>X {item.count}</div>
										<button type="button" className="cart-close-btn"><i className="uil uil-multiply"></i></button>
									</div>		
								</div>
							</div>
							
							</div>
							))}
							<div className="total-checkout-group">
								<div className="cart-total-dil">
									<h4>Subidhaonline.com</h4>
									<span>Rs{total}</span>
								</div>
								<div className="cart-total-dil pt-3">
									<h4>Delivery Charges</h4>
									<span>Rs0.00</span>
								</div>
							</div>
							<div className="cart-total-dil saving-total ">
								<h4>Total Saving</h4>
								<span>Rs{saving}</span>
							</div>
							{/* <div className="main-total-cart">
								<h2>Total</h2>
								<span>$16</span>
							</div> */}
							<div className="payment-secure">
								<i className="uil uil-padlock"></i>Secure checkout
							</div>
						</div>
						{/* <a href="#" className="promo-link45">Have a promocode?</a> */}
						<div className="checkout-safety-alerts">
							{/* <p><i className="uil uil-sync"></i>100% Replacement Guarantee</p> */}
							{/* <p><i className="uil uil-check-square"></i>100% Genuine Products</p> */}
							{/* <p><i className="uil uil-shield-check"></i>Secure Payments</p> */}
						</div>
					</div>
				</div>
			</div>
		</div>	
	</div>
        </div>
    )
}

export default Index
