import React, { useEffect, useState } from "react";
import Base from "../../Components/Base";
import { API } from "../../api/backend";
import axios from "axios";
import swal from "sweetalert2";
import Table from "../../Components/Table";
import Avatar from "@material-ui/core/Avatar";
import { getMediaUrl } from "../../api/functions";
import moment from "moment";
import { deleteOrder } from "../../api/helper";
function Index() {
  const [orders, setOrders] = useState([]);
  const fetchOrders = () => {
    axios
      .get(API + "orders")
      .then((resp) => {
        if (resp.data.error_message) {
          swal.fire("", resp.data.error_message);
        } else {
          console.log(resp.data);
          setOrders(resp.data);
        }
      })
      .catch((err) => {
        console.log(err);
        swal.fire("", "error fetching orders");
      });
  };
  useEffect(() => {
    fetchOrders();
  }, []);
  const columns = React.useMemo(
    () => [
      {
        Header: "#SN",
        accessor: (row) => row.last_active,
        Cell: (value) => <span>{value.row.index + 1}</span>,
      },
      {
        Header: "Order Id",
        accessor: "_id",
      },
      {
        Header: "Items",
        accessor: (row) => row.order_type,
        Cell: (value) => {
          if (value.value == "offer") {
            return value.data[value.row.index].offer.name;
          } else {
            let products = value.data[value.row.index].products;
            return (
              <span
                className=""
                title={products
                  .reduce((a, b) => (a += b.name + ","), 0)
                  .slice(0, -1)}
              >
                {products.length + "Items"}
              </span>
            );
          }
        },
      },
      {
        Header: "Date",
        accessor: (row) => row.createdAt,
        Cell: (value) => {
          return <span>{moment(value.value).format("YY/MM/DD hh:mm")}</span>;
        },
      },
      {
        Header: "Address",
        accessor: (row) => row.order_details,
        Cell: ({ value }) => (
          <p>
            {value.streetAddress + "," + value.address + "," + value.province}
          </p>
        ),
      },
      {
        Header: "Paid",
        accessor: (row) => row.paid,
        Cell: (value) => <span>{value.value ? "Paid" : "Not Paid"}</span>,
      },
      {
        Header: "Order Type",
        accessor: (row) => row.order_type,
      },
      {
        Header: "total",
        accessor: "total",
        Cell: (value) => <span>Rs{value.value}</span>,
      },

      {
        Header: "Actions",
        accessor: (row) => row.name,
        Cell: (value) => <Actions values={value}></Actions>,
      },
    ],
    []
  );
  const Actions = ({ values }) => {
    return (
      <div className="btn-group rounded-0">
        <button
          onClick={() => editRow(values.data[values.row.index])}
          className="rounded-0 btn btn-sm btn-outline-info"
        >
          <i className="fa fa-pen"></i>
        </button>
        <button
          onClick={() => deleteRow(values.data[values.row.index])}
          className="rounded-0 btn btn-sm btn-outline-danger"
        >
          <i className="fa fa-trash"></i>
        </button>
      </div>
    );
  };

  const deleteRow = (Order) => {
    swal
      .fire({
        title: "Do you want to remove this order ?",
        showCancelButton: true,
        confirmButtonText: `yes delete`,
        icon: "error",
      })
      .then((willDelete) => {
        if (willDelete.isConfirmed) {
          deleteOrder(Order)
            .then((resp) => {
              fetchOrders();
              swal.fire("Order Deleted !");
            })
            .catch((err) => {
              swal.fire({ title: "Some error occured !", icon: "error" });
              console.log(err);
            });
        } else {
          swal.fire("Deletion cancelled!");
        }
      });
  };
  const editRow = (order) => {
    swal.fire({
      title: "Sorry This feature is under maintainance",
      icon: "info",
    });
  };

  return (
    <div>
      <Base>
        <div className="container-fluid m-3">
          <div class="row justify-content-between">
            <div class="col-lg-3 col-md-4">
              <div class="bulk-section mb-30">
                <div class="input-group">
                  <select id="action" name="action" class="form-control">
                    <option selected>Bulk Actions</option>
                    <option value="1">Pending</option>
                    <option value="2">Cancel</option>
                    <option value="3">Process</option>
                    <option value="4">Complete</option>
                    <option value="5">Delete</option>
                  </select>
                  <div class="input-group-append">
                    <button class="status-btn hover-btn" type="submit">
                      Apply
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-5 col-md-6">
              <div class="bulk-section mb-30">
                <div class="search-by-name-input">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Search"
                  />
                </div>
                <div class="input-group">
                  <select id="categeory" name="categeory" class="form-control">
                    <option value="1">Pending</option>
                    <option value="2">Cancel</option>
                    <option value="3">Process</option>
                    <option value="4">Complete</option>
                  </select>
                  <div class="input-group-append">
                    <button class="status-btn hover-btn" type="submit">
                      Search Order
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header">
              <h4>Orders</h4>
            </div>

            <div className="card-body">
              {orders && orders.length > 0 && (
                <Table columns={columns} data={orders}></Table>
              )}
              {!orders && <p>No orders found please create order</p>}
            </div>
          </div>
        </div>
      </Base>
    </div>
  );
}

export default Index;
