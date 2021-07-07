import React,{useState,useEffect} from 'react'
import {useHistory } from "react-router-dom"
import {Link} from 'react-router-dom'
import swal from "sweetalert2"
import axios from 'axios'
import {API} from "../api/backend"
import firebase from "firebase"
import {useStateValue} from "../StateProvider"
const Index=()=>{
	const [user,setUser]=useState({
		name:'',
		email:'',
		phone:'',
		password:''
	})
	const history=useHistory()
	const[typing,setTyping]=useState(false)
    const[ typingTimeout,setTypingTimeout]=useState(0)
	const {phone}=user
	const [state,dispatch]=useStateValue()
	const [loading,setLoading]=useState(false)
	const [seePassword,setSeePassword]=useState(false)
	const handleChange =  (name) => (event) => {
				setUser({ ...user, [name]: event.target.value });
	  };
	function signup(){
		console.log(user)
		let error=''
		if (user.name=='') {
			error='Name is required'
		}else if (user.email=='') {
			error='Email is required'
		}else if (user.password=='') {
			error='Password is required'
		// }else if(!verified){
		// 	error="Please verify phone number"
		}else if (user.phone=='' ||user.phone.length!==10) {
			error='Correct Phone Number is required'
		}
		if (error && error!='') {
		swal.fire(error)
			
		} else {console.log(user)
			axios.post(API+"auth/signup",{
				...user
			}).then(resp=>{
				if (resp.error_message) {
					swal.fire({title:resp.error_message,icon:"error"})
				} else {
					// dispatch({
					// 	type:"USER_LOGIN",
					// 	user:resp.data,
					// })
					swal.fire("A email verification link has been sent to you google account, please verify it ").then(a=>{
					window.location.reload(true)
					})
					// history.push("/")
				}
				console.log(resp)
			}).catch(err=>{
				swal.fire({title:"User already exists with that email",icon:"info"})
				console.log(err)
			})
				}
	}
	const socialLogin=()=>{
		var instance = this
		const provider = new firebase.auth.GoogleAuthProvider()
		firebase
			.auth()
			.signInWithPopup(provider)
			.then((user) => {
				console.log(user)
				var payload = {
					provider: "google",
					type: "social",
					idToken: user.credential.idToken,
					name: user.additionalUserInfo.profile.name,
					id: user.additionalUserInfo.profile.id,
					accessToken: user.credential.accessToken,
					email: user.additionalUserInfo.profile.email,
				}
				axios
					.post("/signup", {
						payload: payload,
					})
					.then((response) => {
						console.log(response.data)
						instance.setUser(response.data)
						instance.setAccessLevel(
							response.data[0].accessLevel
						)
						instance.setMemberVerified(
							response.data[0].phone_number_verified
						)
						console.log(this.access_level)
						instance.setToken(response.data[0].tokens)
						swal("Login Successful !", "", "success").then(
							(value) => {
								// instance.$router.replace("/")
								this.$emit("authCompleted")
							}
						)
					})
					.catch((err) => {
						instance.$toasted.show("Something Went Wrong")
						console.log(err)
					})
			})
			.catch((err) => {
				// instance.$toasted.show(
				// 		"Incorrect Combination"
				// 	)
				console.log(err)
				console.log("Something Went Wrong")
			})
	}

    return (
            <div className="sign-inup">
		<div className="container">
			<div className="row justify-content-center">
				<div className="col-lg-5">
					<div className="sign-form">
						{/* {JSON.stringify(state.user)} */}
						<div className="sign-inner">
							<div className="sign-logo" id="logo">
								<Link to="/"><img src="images/slogo.svg" alt=""/></Link>
								{/* <a href="index.html"><img className="logo-inverse" src="images/dark-logo.svg" alt=""/></a> */}
							</div>
							
							<div className="form-dt">
								<div className="form-inpts checout-address-step">
										<div className="form-title"><h6>Sign Up</h6></div>
										<div className="form-group pos_rel">
											<input id="full[name]" onChange={handleChange("name")} name="fullname" type="text"  placeholder="Full name" className="form-control lgn_input"/>
											<i className="fa fa-user-circle lgn_icon"></i>
										</div>
										<div className="form-group pos_rel">
											<input id="email[address]" onChange={handleChange("email")} name="emailaddress" type="email" placeholder="Email Address" className="form-control lgn_input"/>
											<i className="fa fa-envelope lgn_icon"></i>
										</div>
                                        <div className="form-group pos_rel">
											<input id="phone[number]" onChange={handleChange("phone")} name="phone" type="Number" placeholder="Phone Number" className="form-control lgn_input"/>
											<i className="fa fa-phone lgn_icon"></i>
										</div>
										<div className="form-group pos_rel">
											<input  id="password1" name="password1" type={seePassword?'text':'password'} placeholder="New Password" onChange={handleChange("password")}className="form-control lgn_input"/>
											<i className="fa fa-lock lgn_icon"></i>
											<i className={(seePassword?"fa fa-eye":"fa fa-eye-slash")+' lgn_icon_right text-secondary'} onClick={()=>setSeePassword(!seePassword)}></i>
										</div>
										<button className="login-btn hover-btn" onClick={signup}>Sign Up Now</button>
								</div>
								<hr></hr>
									<div class="text-center social-btn" onClick={socialLogin}>
            <span class="btn btn-danger">
                <i class="fa fa-google text-light"></i>
               <b>Google Signin</b>
            </span>
								</div>
							
								<div className="signup-link">
									<p>Have an account? - <Link to="/signin">Sign In Now</Link></p>
								</div>
							</div>
						</div>
					</div>
					<div className="copyright-text text-center mt-3">
						<i className="fa fa-copyright"></i>Copyright 2021 <b>Subidhaonline</b> . All rights reserved
					</div>
				</div>
			</div>
		</div>
	</div>
    )
}

export default Index
