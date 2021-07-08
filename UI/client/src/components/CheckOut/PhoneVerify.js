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
          swal.fire("Code sent");
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

  function verifyCode(code) {
    return window.confirmationResult
      .confirm(code)
      .then(function (result) {
        axios
          .put(API + "user/verifyPhone", {
            phone: phone,
          })
          .then((resp) => {
            setVerified(true);
            dispatch({
              type: "USER_VERIFIED",
            });
          })
          .catch((err) => {
            swal.fire("Error verifying phone number");
            console.log(err);
          });
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
  return <div className="checkout-step-body"></div>;
}

export default PhoneVerify;
