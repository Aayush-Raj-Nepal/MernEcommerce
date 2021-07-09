import React from "react";
import { getMediaUrl } from "../../api/functions";
import { useStateValue } from "../../StateProvider";
function DashboardHeader() {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="">
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
                    src={`${
                      user.images && user.images.length > 0
                        ? getMediaUrl(user.images[0])
                        : "images/userImage.png"
                    }`}
                  />
                  <div className="img-add">
                    <input type="file" id="file" />
                    <label for="file">
                      <i className="uil uil-camera-plus"></i>
                    </label>
                  </div>
                </div>
                <h4>{user.name}</h4>
                <p>
                  +977{user.phone}
                  <span>
                    <i className="uil uil-edit"></i>
                  </span>
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
