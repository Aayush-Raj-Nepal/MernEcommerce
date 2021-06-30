import React, { useState, useEffect } from "react";
import * as fb from "../../api/firebase";
import { Button } from "react-bootstrap";
import swal from "sweetalert2";

function Form() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    error: "",
    loading: false,
  });
 const {name,email,subject,message}=values
  useEffect(() => {
    setValues({ ...values, error: "", success: false });
  }, []);
  const handleChange = (name) => (event) => {
    const value = event.target.value;
    setValues({ ...values, [name]: value });
  };
  const onSubmit = async(event) => {
    event.preventDefault();
    setValues({ ...values, error: false, loading: true });
    console.log(values);
    let error=(values.name=="" || values.email=="" || values.message=="" || values.subject=="")
    if (error) {
      swal.fire({
        title:"All fields are required",
        icon:"warning",
      })
    } else {
      await fb.contactMessageCollection.add({
        createdOn: new Date(),
        name: values.name,
        email: values.email,
        subject: values.subject,
        message: values.message,
      });
      swal.fire({
        title:"Message Sent",
        icon:"success",
      })
      setValues({   name: "",
      email: "",
      subject: "",
      message: "",
      error: "",
      loading: false,})
    }
  };

  return (
    <div>
      <div className="contact-title"></div>
      <div className="contact-form">
        <form>
          <div className="form-group mt-1">
            <label className="control-label">Full Name*</label>
            <div className="ui search focus">
              <div className="ui left icon input swdh11 swdh19">
                <input
                  className="prompt srch_explore"
                  onChange={handleChange("name")}
                  value={name}
                  type="text"
                  name="sendername"
                  id="sendername"
                  required=""
                  placeholder="Your Full"
                />
              </div>
            </div>
          </div>
          <div className="form-group mt-1">
            <label className="control-label">Email Address*</label>
            <div className="ui search focus">
              <div className="ui left icon input swdh11 swdh19">
                <input
                  className="prompt srch_explore"
                  onChange={handleChange("email")}
                  value={email}
                  type="email"
                  name="emailaddress"
                  id="emailaddress"
                  required=""
                  placeholder="Your Email Address"
                />
              </div>
            </div>
          </div>
          <div className="form-group mt-1">
            <label className="control-label">Subject*</label>
            <div className="ui search focus">
              <div className="ui left icon input swdh11 swdh19">
                <input
                  className="prompt srch_explore"
                  onChange={handleChange("subject")}
                  value={subject}
                  type="text"
                  name="sendersubject"
                  id="sendersubject"
                  required=""
                  placeholder="Subject"
                />
              </div>
            </div>
          </div>
          <div className="form-group mt-1">
            <div className="field">
              <label className="control-label">Message*</label>
              <textarea
                rows="2"
                className="form-control"
                onChange={handleChange("message")}
                value={message}
                id="sendermessage"
                name="sendermessage"
                required=""
                placeholder="Write Message"
              ></textarea>
            </div>
          </div>
          <button onClick={onSubmit}
            className="next-btn16 hover-btn mt-3"
            type="submit"
            data-btntext-sending="Sending..."
          >
            Submit Request
          </button>
        </form>
      </div>
    </div>
  );
}

export default Form;
