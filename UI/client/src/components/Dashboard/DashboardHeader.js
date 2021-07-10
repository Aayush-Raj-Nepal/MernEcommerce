import React, { useState } from "react";
import { getMediaUrl } from "../../api/functions";
import { useStateValue } from "../../StateProvider";
import { API } from "../../api/backend";
import axios from "axios";
import swal from "sweetalert2";
import Spinner from "react-bootstrap/Spinner";
import { Link } from "react-router-dom";
function DashboardHeader() {
  const [{ user }, dispatch] = useStateValue();
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const onFileChange = (event) => {
    // Update the state
    setLoading(true);
    let reader = new FileReader();
    let file = event.target.files[0];
    reader.onloadend = () => {
      setFile(file);
      // setUrl(reader.result)
    };
    reader.readAsDataURL(file);
    let formData = new FormData();
    formData.append("media", file);
    axios
      .post(API + "media/profileimage", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        console.log(response.data);
        axios
          .put("/user/profileimage", {
            photo: response.data,
          })
          .then((resp) => {
            dispatch({
              type: "SET_USER_PHOTO",
              item: getMediaUrl("product/" + resp.data),
            });
            setLoading(false);
          })
          .catch((err) => {
            setLoading(false);
            console.log(err);
            swal.fire("error uploading image");
          });
      })
      .catch((err) => {
        setLoading(false);
        swal.fire({
          title: "provided image format invalid,please upload another image",
          icon: "warning",
        });
        console.log(err);
      });
  };

  return (
    <div className="">
      <div className="gambo-Breadcrumb">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    User Dashboard
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div className="dashboard-group">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="user-dt">
                <div className="user-img">
                  <img
                    src={`${user.image ? user.image : "images/userImage.png"}`}
                  />
                  <div className="img-add">
                    <input type="file" id="file" onChange={onFileChange} />
                    <label for="file">
                      {loading && <Spinner animation="grow" />}
                      {!loading && <i className="fa fa-camera"></i>}
                    </label>
                  </div>
                </div>
                <h4>{user.name}</h4>
                <p>
                  +977{user.phone}
                  <span>{/* <i className="fa fa-edit"></i> */}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardHeader;
