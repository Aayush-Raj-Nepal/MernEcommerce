import React, { useEffect, useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { InputGroup, FormControl } from "react-bootstrap";
import { useStateValue } from "../../StateProvider";
import firebase from "firebase/app";
import swal from "sweetalert2";
import axios from "axios";
import { API } from "../../api/backend";
function PhoneVerify() {
  const [{ user }, dispatch] = useStateValue();
  const history = useHistory();
  const [phone, setPhone] = useState(user.phone);
  const [invalid, setInvalid] = useState(false);
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [verified, setVerified] = useState(false);
  function phoneAuth() {
    let number = user.phone;
    if (number && number.length >= 10) {
      // axios
      //   .get(API + "auth/user/exists/" + number)
      //   .then((resp) => {
      firebase
        .auth()
        .signInWithPhoneNumber("+977" + number, window.recaptchaVerifier)
        .then(function (confirmationResult) {
          //s is in lowercase
          window.confirmationResult = confirmationResult;
          var coderesult = confirmationResult;
          console.log(coderesult);
          // alert("Message sent");
          setSent(true);
        })
        .catch(function (error) {
          alert(error.message);
        });
      // })
      // .catch((err) => {
      //   console.log(err);
      //   swal.fire({
      //     title: "Phone Number Already Registered !",
      //     icon: "warning",
      //   });
      // });
    } else {
      swal.fire({ title: "provide valid phone number", icon: "info" });
    }
  }

  const handleCode = (event) => {
    // console.log(event.target.value)
    setInvalid(false);
    return event.target.value.length == 6 ? verifyCode(event.target.value) : "";
  };
  function signup() {
    console.log(user);
    let error = "";
    if (user.name == "") {
      error = "Name is required";
    } else if (user.email == "") {
      error = "Email is required";
    } else if (user.password == "") {
      error = "Password is required";
      // }else if(!verified){
      // 	error="Please verify phone number"
      // }else if (user.phone=='' ||user.phone.length!==10) {
      // 	error='Correct Phone Number is required'
    }

    if (error && error != "") {
      swal.fire(error);
    } else {
      console.log(user);
      axios
        .post(API + "auth/signup", {
          ...user,
        })
        .then((resp) => {
          if (resp.error_message) {
            swal.fire({ title: resp.error_message, icon: "error" });
          } else {
            dispatch({
              type: "USER_LOGIN",
              user: resp.data,
            });
            swal.fire("Login success");
            history.push("/");
          }
          console.log(resp);
        })
        .catch((err) => {
          console.log(err);
        });
      swal.fire("success");
    }
  }
  function verifyCode(code) {
    //    console.log(code)
    // setLoading(true)
    // var code = document.getElementById('verificationCode').value;
    return window.confirmationResult
      .confirm(code)
      .then(function (result) {
        // if(verifyUserPhone(isAutheticated().token, isAutheticated().user._id)){
        //     setLoading(false)
        setVerified(true);
        // }else{
        //     setLoading(false)
        // }
      })
      .catch(function (error) {
        setInvalid(true);
        setLoading(false);
        console.log(error.message);
      });
  }
  useEffect(() => {
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
      "recaptcha-container"
    );
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
      "sign-in-button",
      {
        size: "invisible",
        callback: function (response) {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
        },
      }
    );
  }, []);
  return (
    <div className="checkout-step-body">
      <p>
        We need your phone number so we can inform you about any delay or
        problem.
      </p>
      4 digits code will be sent to your phone :
      <div id="recaptcha-container"></div>
      <InputGroup className="mb-2">
        <InputGroup.Append>
          <InputGroup.Text className="bg-transparent">
            <i className="fa fa-mobile-alt bg-none border-0"></i>
          </InputGroup.Text>
        </InputGroup.Append>
        <input
          type="Number"
          disabled={sent}
          className="form-control"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Phone Number"
        />
        {!verified && (
          <InputGroup.Append className="border-0">
            <InputGroup.Text className="bg-transparent">
              <span
                style={{ cursor: "pointer" }}
                id="sign-in-button"
                onClick={phoneAuth}
              >
                Send Code
              </span>
            </InputGroup.Text>
          </InputGroup.Append>
        )}
      </InputGroup>
      {sent && !verified && (
        <div className="form-group pos_rel">
          <label className="control-label">Enter Code</label>
          <input type="Number" className="form-control" onChange={handleCode} />
          <a href="#" className="resend-link">
            Resend Code
          </a>
        </div>
      )}
      {verified && !invalid && (
        <span>
          Verified <i className="text-success fa fa-check"></i>
        </span>
      )}
      {invalid && (
        <span>
          {" "}
          <i className="text-danger fa fa-exclamation"></i>
        </span>
      )}
    </div>
  );
}

export default PhoneVerify;
