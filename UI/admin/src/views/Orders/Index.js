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
        Header: "Order Name",
        accessor: (row) => row.user_id,
        Cell: (value) => <span>{value.value.name}</span>,
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
        Header: "Phone ",
        accessor: (row) => row.verifiedNumber,
      },

      {
        Header: "total",
        accessor: "total",
        Cell: (value) => <span>Rs{value.value}</span>,
      },
      {
        Header: "loaction",
        accessor: (row) => row.order_details,
        Cell: ({ value }) => (
          <p>
            {value.streetAddress + "," + value.address + "," + value.province}
          </p>
        ),
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
        <div className="card">
          <div className="card-header">
            <h1>All orders here</h1>
          </div>
          <div className="card-body">
            {orders && orders.length > 0 && (
              <Table columns={columns} data={orders}></Table>
            )}
            {!orders && <p>No orders found please create order</p>}
          </div>
        </div>
      </Base>
    </div>
  );
}

export default Index;
