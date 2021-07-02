import React,{useState,useEffect} from 'react'
import {InputGroup,FormControl} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import firebase from "firebase/app"
import swal from "sweetalert2"
import axios from 'axios'
import {API} from "../../api/backend"
const Index=()=>{
	const [user,setUser]=useState({
		name:'',
		email:'',
		phone:'',
		password:''
	})
	const[typing,setTyping]=useState(false)
    const[ typingTimeout,setTypingTimeout]=useState(0)
	const {phone}=user
	const[invalid,setInvalid]=useState(false)
	const [loading,setLoading]=useState(false)
	const[sent,setSent]=useState(false)
	const[verified,setVerified]=useState(false)
	const [seePassword,setSeePassword]=useState(false)
	function phoneAuth() {
		let number=user.phone
		// console.log(user)
       if (number && number.length>=10) {
		axios.get(API+"auth/user/exists/"+number).then(resp=>{
			firebase.auth().signInWithPhoneNumber('+977'+number, window.recaptchaVerifier).then(function (confirmationResult) {
				//s is in lowercase
				window.confirmationResult = confirmationResult;
				var coderesult = confirmationResult;
				console.log(coderesult);
				// alert("Message sent");
				setSent(true)
			}).catch(function (error) {
				alert(error.message);
			});
		}).catch(err=>{
			console.log(err)	
			swal.fire({title:"Phone Number Already Registered !",icon:"warning"})
		})
		
	   } else {
		   swal.fire({title:"provide valid phone number",icon:'info'})
	   }
    }

	const handleChange =  (name) => (event) => {
				setUser({ ...user, [name]: event.target.value });
	  };
	const handleCode = (event) => {
		// console.log(event.target.value)
		setInvalid(false)
		
		return event.target.value.length==6?verifyCode(event.target.value):''
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
		}else if(!verified){
			error="Please verify phone number"
		}else if (user.phone=='' ||user.phone.length!==10) {
			error='Correct Phone Number is required'
		}

		if (error && error!='') {
		swal.fire(error)
			
		} else {console.log(user)
			axios.post(API+"auth/signup",{
				...user
			}).then(resp=>{
				console.log(resp)
			}).catch(err=>{
				console.log(err)
			})
		swal.fire('success')
		}
	}
	function verifyCode(code) {
    //    console.log(code)
		// setLoading(true)
        // var code = document.getElementById('verificationCode').value;
        return window.confirmationResult.confirm(code).then(function (result) {
                // if(verifyUserPhone(isAutheticated().token, isAutheticated().user._id)){
                //     setLoading(false)
                    setVerified(true)
                // }else{
                //     setLoading(false)
                // }
        }).catch(function (error) {
			setInvalid(true)
            setLoading(false)
            console.log(error.message);
			
        });
    }
	useEffect(()=>{
		window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
		window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('sign-in-button', {
            'size': 'invisible',
            'callback': function (response) {
            // reCAPTCHA solved, allow signInWithPhoneNumber.
            }
        });	},[])
    return (
            <div className="sign-inup">
		<div className="container">
			<div className="row justify-content-center">
				<div className="col-lg-5">
					<div className="sign-form">
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
										<div id="recaptcha-container"></div>
	
										<InputGroup className="mb-2">
      	<InputGroup.Append>
          <InputGroup.Text className="bg-transparent"><i className="fa fa-mobile-alt bg-none border-0"></i></InputGroup.Text>
        </InputGroup.Append>
        <input type="Number" maxLength={6} disabled={sent} className="form-control" value={phone}  onChange={handleChange("phone") }placeholder="Phone Number" />
		{!verified && 	<InputGroup.Append className="border-0">
			<InputGroup.Text className="bg-transparent"><span style={{cursor:'pointer'}}  id='sign-in-button' onClick={phoneAuth}>Send Code</span></InputGroup.Text>
		  </InputGroup.Append>}
		  
		  
		 
		
		
	
	  </InputGroup>
								{sent && !verified &&
										<div className="form-group pos_rel">
											<label className="control-label">Enter Code</label>
											<input type="Number"  className="form-control" onChange={handleCode} />
											<a href="#" className="resend-link">Resend Code</a>
										</div>
										}
										{verified && !invalid &&
		  
		  <span >Verified <i className="text-success fa fa-check"></i></span>
}
{invalid && 
		  
		  <span > <i className="text-danger fa fa-exclamation"></i></span>
}

										<div className="form-group pos_rel">
											<input  id="password1" name="password1" type={seePassword?'text':'password'} placeholder="New Password" onChange={handleChange("password")}className="form-control lgn_input"/>
											<i className="fa fa-lock lgn_icon"></i>
											<i className={(seePassword?"fa fa-eye":"fa fa-eye-slash")+' lgn_icon_right text-secondary'} onClick={()=>setSeePassword(!seePassword)}></i>
										</div>
										<button className="login-btn hover-btn" onClick={signup}>Sign Up Now</button>
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
