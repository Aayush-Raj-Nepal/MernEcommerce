import React,{useState,useEffect} from 'react'
import {useHistory} from "react-router-dom"
import {Link} from 'react-router-dom'
import swal from "sweetalert2"
import axios from 'axios'
import {API} from "../../api/backend"
import {useStateValue} from "../../StateProvider"
function LogIn() {
	const [user,setUser]=useState({
		phone:'',
		password:''
	})
	const history=useHistory()
	const [state,dispatch]=useStateValue()
	const [seePassword,setSeePassword]=useState(false)
	const handleChange =  (name) => (event) => {
				setUser({ ...user, [name]: event.target.value });
	  };

	function signin(){
		console.log(user)
		let error=''
	 if (user.password=='') {
			error='Password is required'
		}else if (user.phone=='' ||user.phone.length!==10) {
			error='Correct Phone Number is required'
		}

		if (error && error!='') {
		swal.fire(error)
			
		} else {console.log(user)
			axios.post(API+"auth/signin",{
				...user
			}).then(resp=>{
				if (resp.error_message) {
					swal.fire({title:resp.error_message,icon:"error"})
				} else {
					dispatch({
						type:"USER_LOGIN",
						user:resp.data,
					})
					swal.fire("Login success")
					history.push("/")
				}
				console.log(resp)
			}).catch(err=>{
				console.log(err)
			})
		swal.fire('success')
		}
	}

	useEffect(()=>{
	
	
	},[])
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
										<div className="form-title"><h6>Sign In</h6></div>
										<div className="form-group pos_rel">
											<input id="phone[number]" onChange={handleChange('phone')} name="phone" type="Number" placeholder="Enter Phone Number" className="form-control lgn_input" required=""/>
											<i className="fa fa-mobile-alt lgn_icon text-secondary" style={{fontSize:'16px'}}></i>
										</div>
										<div className="form-group pos_rel">
											<input  id="password1" name="password1" type={seePassword?'text':'password'} placeholder="New Password" onChange={handleChange("password")}className="form-control lgn_input"/>
											<i className="fa fa-lock lgn_icon"></i>
											<i className={(seePassword?"fa fa-eye":"fa fa-eye-slash")+' lgn_icon_right text-secondary'} onClick={()=>setSeePassword(!seePassword)}></i>
										</div>
										<button className="login-btn hover-btn" onClick={()=>signin()} >Sign In Now</button>
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
