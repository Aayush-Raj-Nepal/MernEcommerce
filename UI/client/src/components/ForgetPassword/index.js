import React from 'react'

function index() {
    return (
        <div>
            <div className="sign-inup">
		<div className="container">
			<div className="row justify-content-center">
				<div className="col-lg-5">
					<div className="sign-form">
						<div className="sign-inner">
							<div className="sign-logo" id="logo"/>
								<a href="index.html"><img src="images/logo.svg" alt=""/></a>
								<a href="index.html"><img className="logo-inverse" src="images/dark-logo.svg" alt=""/></a>
							</div>
							<div className="form-dt">
								<div className="form-inpts checout-address-step">
									<form>
										<div className="form-title"><h6>Request a Password Reset</h6></div>
										<div className="form-group pos_rel">
											<input id="email[address]" name="emailaddress" type="email" placeholder="Your Email Address" className="form-control lgn_input" required=""/>
											<i className="uil uil-envelope lgn_icon"></i>
										</div>
										<div className="form-group pos_rel">
											<input id="password[old]" name="passwordold" type="password" placeholder="Enter Old Password" className="form-control lgn_input" required=""/>
											<i className="uil uil-padlock lgn_icon"></i>
										</div>
										<div className="form-group pos_rel">
											<input id="password[new]" name="passwordnew" type="password" placeholder="Enter New Password" className="form-control lgn_input" required=""/>
											<i className="uil uil-padlock lgn_icon"></i>
										</div>
										<button className="login-btn hover-btn" type="submit">Reset Password</button>
									</form>
								</div>
								<div className="signup-link">
									<p>Go Back - <a href="sign_in.html">Sign In Now</a></p>
								</div>
							</div>
						</div>
					</div>
					<div className="copyright-text text-center mt-3">
						<i className="uil uil-copyright"></i>Copyright 2020 <b>Gambolthemes</b> . All rights reserved
					</div>
				</div>
			</div>
		</div>
	</div>
    )
}

export default index
