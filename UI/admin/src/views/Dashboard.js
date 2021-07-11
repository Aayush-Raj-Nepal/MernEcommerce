import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { API } from "../api/backend";
import axios from "axios";
import { Link } from "react-router-dom";
// components
import Base from "../Components/Base";
function Dashboard() {
  const user = useSelector((state) => state.auth.user);
  const [sidebarShow, setSidebarShow] = useState(false);
  const [data, setData] = useState(null);
  let history = useHistory();
  function gotoLink(link) {
    history.push(link);
  }
  const toggleSidebar = () => {
    setSidebarShow(!sidebarShow);
  };
  useEffect(() => {
    axios
      .get(API + "admin/dashboard")
      .then((resp) => {
        setData(resp.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <Base>
        <div className="container-fluid">
          <div id="layoutSidenav_content">
            <main>
              <div className="container-fluid">
                <h2 className="mt-30 page-title">Subidhaonline Dashboard</h2>
                <ol className="breadcrumb mb-30">
                  <li className="breadcrumb-item active">Dashboard</li>
                </ol>
                {data && (
                  <div className="row">
                    <div className="col-xl-3 col-md-6">
                      <div className="dashboard-report-card purple">
                        <div className="card-content">
                          <span className="card-title">New Orders</span>
                          <span className="card-count">{data.new}</span>
                        </div>
                        <div className="card-media">
                          <i className="fab fa-rev"></i>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-md-6">
                      <div className="dashboard-report-card red">
                        <div className="card-content">
                          <span className="card-title">Packing Orders</span>
                          <span className="card-count">{data.packing}</span>
                        </div>
                        <div className="card-media">
                          <i className="far fa-times-circle"></i>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-md-6">
                      <div className="dashboard-report-card info">
                        <div className="card-content">
                          <span className="card-title">Shipping Orders</span>
                          <span className="card-count">{data.shipping}</span>
                        </div>
                        <div className="card-media">
                          <i className="fas fa-sync-alt rpt_icon"></i>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-md-6">
                      <div className="dashboard-report-card success">
                        <div className="card-content">
                          <span className="card-title">
                            Today's Order Value
                          </span>
                          <span className="card-count">Rs {data.income}</span>
                        </div>
                        <div className="card-media">
                          <i className="fas fa-money-bill rpt_icon"></i>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-12 col-md-12">
                      <div className="card card-static-1 mb-30">
                        <div className="card-body">
                          <div id="earningGraph"></div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-12 col-md-12">
                      <div className="card card-static-2 mb-30">
                        <div className="card-title-2">
                          <h4>Recent Orders</h4>
                          <Link to="/orders/all" className="view-btn hover-btn">
                            View All
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </main>
          </div>
        </div>
      </Base>
    </div>
  );
}

export default Dashboard;
