import React from 'react'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'

function PhoneVerify() {
    return (
					<div className="checkout-step-body">
										<p>We need your phone number so we can inform you about any delay or problem.</p>	
										<p className="phn145">4 digits code send your phone <span>+918437176189</span></p>
										<Accordion>
									<Card>
										<Accordion.Toggle as={Card.Header} eventKey="3" className="edit-no-btn hover-btn" data-toggle="collapse" href="#edit-number">Edit</Accordion.Toggle>
										<Accordion.Collapse eventKey="3" className="collapse" id="edit-number">
											<div className="row">
												<div className="col-lg-8">
													<div className="checkout-login">
														<form>
															<div className="login-phone">
																<input type="text" className="form-control" placeholder="Phone Number"/>
															</div>
															<a className="chck-btn hover-btn" role="button" data-toggle="collapse" href="#otp-verifaction" >Send Code</a>
														</form>
													</div>
												</div>
											</div>
										</Accordion.Collapse>
										</Card>
										</Accordion>
										<div className="otp-verifaction">
											<div className="row">
												<div className="col-lg-12">
													<div className="form-group mb-0">
														<label className="control-label">Enter Code</label>
														<ul className="code-alrt-inputs">
															<li>
																<input id="code[1]" name="number" type="text" placeholder="" className="form-control input-md" required=""/>
															</li>
															<li>
																<input id="code[2]" name="number" type="text" placeholder="" className="form-control input-md" required=""/>
															</li>
															<li>
																<input id="code[3]" name="number" type="text" placeholder="" className="form-control input-md" required=""/>
															</li>
															<li>
																<input id="code[4]" name="number" type="text" placeholder="" className="form-control input-md" required=""/>
															</li>
															<li>
																<a className="collapsed chck-btn hover-btn" role="button" data-toggle="collapse" data-parent="#checkout_wizard" href="#collapseTwo">Next</a>
															</li>
														</ul>
														<a href="#" className="resend-link">Resend Code</a>
													</div>
												</div>
											</div>
										</div>
									</div>
    )
}

export default PhoneVerify