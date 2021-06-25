import React from "react";

function Form() {
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
                id="sendermessage"
                name="sendermessage"
                required=""
                placeholder="Write Message"
              ></textarea>
            </div>
          </div>
          <button
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
