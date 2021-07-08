import React, { useEffect, useState } from "react";
import Form from "./Form.js";
import Location from "./Location.js";
import * as fb from "../../api/firebase";
import renderHTML from "react-render-html";

function ContactUs() {
  const [content, setContent] = useState("");
  useEffect(() => {
    const fetchExtras = () => {
      fb.extrasCollection
        .orderBy("createdOn", "desc")
        .onSnapshot((snapshot) => {
          let extrasArray = [];
          snapshot.forEach((doc) => {
            let post = doc.data();
            post.id = doc.id;
            extrasArray.push(post);
          });
          let contact = extrasArray.filter((e) => e.type == "ContactUs")[0];
          setContent(contact ? contact.content : "");
        });
    };

    fetchExtras();
  }, []);
  return (
    <div>
      {" "}
      <div className="wrapper">
        <div className="gambo-Breadcrumb">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="index.html">Home</a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Contact Us
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
        <div className="all-product-grid ">
          <div className="container">
            <div className="row">
            <div className="col-lg-6">  
                {renderHTML(content)}
                <Form></Form>
              </div>
              <div className="col-lg-6">
                <Location></Location>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
