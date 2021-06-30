import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'

function LogIn() {
    return (
        <div>
            <div className="sign-inup">
		<div className="container">
			<div className="row justify-content-center">
				<div className="col-lg-5">
					<div className="sign-form">
						<div className="sign-inner">
							<div className="sign-logo" id="logo">
								<Link to="/"><img src="images/logo.svg" alt=""/></Link>
								<Link to="/"><img className="logo-inverse" src="images/dark-logo.svg" alt=""/></Link>
							</div>
							<div className="form-dt">
								<div className="form-inpts checout-address-step">
									<form>
										<div className="form-title"><h6>Sign In</h6></div>
										<div className="form-group pos_rel">
											<input id="phone[number]" name="phone" type="Number" placeholder="Enter Phone Number" className="form-control lgn_input" required=""/>
											<i className="fa fa-mobile-alt lgn_icon text-secondary" style={{fontSize:'16px'}}></i>
										</div>
										<div className="form-group pos_rel">
											<input id="password1" name="password1" type="password" placeholder="Enter Password" className="form-control lgn_input" required=""/>
											<i className="fa fa-lock lgn_icon text-secondary" style={{fontSize:'16px'}}></i>
										</div>
										<button className="login-btn hover-btn" type="submit">Sign In Now</button>
									</form>
								</div>
								<div className="password-forgor">
									<a href="forgot_password.html">Forgot Password?</a>
								</div>
								<div className="alert alert-light text-center py-2">
									<p>Don't have an account? - <Link to="/signup">Sign Up Now</Link></p>
								</div>
								{/* <button className="login-btn float-left"><i className="fa fa-arrow-left"></i>Return Back</button> */}
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
        </div>
    )
}

export default LogIn
