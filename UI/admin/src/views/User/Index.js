import React, { useEffect, useState } from "react";
import Base from "../../Components/Base";
import { API } from "../../api/backend";
import axios from "axios";
import swal from "sweetalert2";
import Table from "../../Components/Table";
import Avatar from "@material-ui/core/Avatar";
import { getMediaUrl } from "../../api/functions";
import moment from "moment";
import { deleteUser } from "../../api/helper";
function Index() {
  const [users, setUsers] = useState([]);
  const fetchUsers = () => {
    axios
      .get(API + "user")
      .then((resp) => {
        if (resp.data.error_message) {
          swal.fire("", resp.data.error_message);
        } else {
          console.log(resp.data);
          setUsers(resp.data);
        }
      })
      .catch((err) => {
        console.log(err);
        swal.fire("", "error fetching users");
      });
  };
  useEffect(() => {
    fetchUsers();
  }, []);
  const columns = React.useMemo(
    () => [
      {
        Header: "#SN",
        accessor: (row) => row.email,
        Cell: (value) => <span>{value.row.index + 1}</span>,
      },
      {
        Header: "name",
        accessor: "name",
      },
      {
        Header: "Phone",
        accessor: "phone", // accessor is the "key" in the data
      },
      {
        Header: "email",
        accessor: "email", // accessor is the "key" in the data
      },
      {
        Header: "last active",
        accessor: "last_active",
        Cell: (value) => (
          <span>{value.value ? moment(value.value).fromNow() : ""}</span>
        ),
      },
      {
        Header: "Image",
        accessor: "images",
        Cell: ({ value }) => (
          <Avatar
            alt="Remy Sharp"
            src={
              value[0]
                ? getMediaUrl("product/" + value[0])
                : "images/userImage.png"
            }
          />
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

  const deleteRow = (User) => {
    swal
      .fire({
        title: "Do you want to remove this user ?",
        showCancelButton: true,
        confirmButtonText: `yes delete`,
        icon: "error",
      })
      .then((willDelete) => {
        if (willDelete.isConfirmed) {
          deleteUser(User)
            .then((resp) => {
              fetchCategories();
              swal.fire("User Deleted !");
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
  const editRow = (user) => {
    swal.fire({
      title: "Sorry This feature is under maintainance",
      icon: "info",
    });
  };

  return (
    <div>
      <Base>
        <div className="container-fluid">
          <div className="card">
            <div className="card-header">
              <h1>All users here</h1>
            </div>
            <div className="card-body">
              {users && users.length > 0 && (
                <Table columns={columns} data={users}></Table>
              )}
              {!users && <p>No users found please create user</p>}
            </div>
          </div>
        </div>
      </Base>
    </div>
  );
}

export default Index;
