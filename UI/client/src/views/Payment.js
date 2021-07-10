import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { API } from "../api/backend";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";

function Payment({ match }) {
  const history = useHistory();
  const [order, setOrder] = useState({});
  const [method, setMethod] = useState("");
  const [paid, setPaid] = useState(false);
  const selectPaymentMethod = (x) => {
    setMethod(x);
    switch (x) {
      case "esewa":
        proceedToESewa();
        break;

      default:
        break;
    }
    Swal.fire(x + "selected");
  };
  const proceedToESewa = function (
    amount = order.total,
    pid = order._id,
    customSuccessLink = "http://subidhaonline.com/api/payment/esewa/success",
    customErrorLink = "http://subidhaonline.com/api/payment/esewa/failure"
  ) {
    var path = "https://esewa.com.np/epay/main";
    var params = {
      amt: amount,
      psc: 0,
      pdc: 0,
      txAmt: 0,
      tAmt: amount,
      pid: pid,
      scd: "NEPBOOKS",
      su: customSuccessLink,
      fu: customErrorLink,
    };
    var form = document.createElement("form");
    form.setAttribute("method", "POST");
    form.setAttribute("action", path);
    for (var key in params) {
      var hiddenField = document.createElement("input");
      hiddenField.setAttribute("type", "hidden");
      hiddenField.setAttribute("name", key);
      hiddenField.setAttribute("value", params[key]);
      form.appendChild(hiddenField);
    }

    document.body.appendChild(form);
    console.log(params);
    form.submit();
  };
  useEffect(() => {
    axios
      .get(API + "orders/forPayment/" + match.params.id)
      .then((resp) => {
        if (resp.data.paid == true) {
          history.push("/psuccess");
        }
        setPaid(resp.data.paid);
        setOrder(resp.data);
      })
      .catch((err) => {
        Swal.fire({ title: "Error occured", icon: "info" });
      });
  }, []);
  return (
    <div>
      <Header></Header>
      <div style={{ marginTop: "155px" }}>
        {order && !paid && (
          <div className="container m-3 p-3">
            <div className="card">
              <div className="card-header">
                Choose payment method to proceed
              </div>
              <div className="card-body p-3">
                <div className="row">
                  <div className="col-lg-2">
                    <div
                      className="card shadow-lg p-3 c-pointer"
                      onClick={() => selectPaymentMethod("khalti")}
                    >
                      <img
                        alt="Khalti"
                        style={{ height: "80px" }}
                        title="Khalti"
                        src="images/khalti.png"
                      />
                    </div>
                  </div>
                  <div className="col-lg-2">
                    <div
                      className="card shadow-lg p-3 c-pointer"
                      onClick={() => selectPaymentMethod("esewa")}
                    >
                      <img
                        alt="esewa"
                        title="esewa"
                        style={{ height: "80px" }}
                        src="images/esewa.jpg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <Footer></Footer>
    </div>
  );
}

export default Payment;
