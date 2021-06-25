import React, { useEffect, useState } from "react";
import { getAllAdmins, deleteAdmin } from "../../api/helper";
import { getMediaUrl } from "../../api/functions";
import Table from "../../Components/Table";
import Avatar from "@material-ui/core/Avatar";
import swal from "sweetalert2";
function AllAdmins() {
  const [admins, setAdmins] = useState([]);
  useEffect(() => {
    fetchAdmin();
  }, []);
  const fetchAdmin = async () => {
    const result = await getAllAdmins();
    result.map((r) => {
      r.actions = "";
      return r;
    });
    setAdmins(result);
    console.log(result);
  };

  //  let getData=(data)=> React.useMemo(
  //       () =>data,[]
  //     )

  const columns = React.useMemo(
    () => [
      {
        Header: "#SN",
        accessor: (row) => row.email,
        Cell: (value) => <span>{value.row.index + 1}</span>,
      },
      {
        Header: "Name",
        accessor: "name", // accessor is the "key" in the data
      },
      {
        Header: "Email",
        accessor: "email",
      },
      {
        Header: "Phone",
        accessor: "phone",
      },
      {
        Header: "Address",
        accessor: "address",
      },
      {
        Header: "Image",
        accessor: "image",
        Cell: ({ value }) => (
          <Avatar alt="Remy Sharp" src={getMediaUrl("product/" + value)} />
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
  const deleteRow = (admin) => {
    swal
      .fire({
        title: "Do you want to remove this admin ?",
        showCancelButton: true,
        confirmButtonText: `yes delete`,
        icon: "error",
      })
      .then((willDelete) => {
        if (willDelete.isConfirmed) {
          // console.log(willDelete);
          deleteAdmin(admin)
            .then((resp) => {
              // window.alert("Deleted Admin!");
              fetchAdmin();
              swal.fire("Admin Deleted !");
            })
            .catch((err) => {
              console.log(err);
            });
        } else {
          swal.fire("Deletion cancelled!");
        }
      });
  };
  const editRow = (admin) => {
    swal.fire({
      title: "Sorry This feature is under maintainance",
      icon: "info",
    });
    // window.confirm(admins[admin].email + " is being edited");
  };
  return (
    <div className="container py-3 ">
      <h4>All Admins</h4>

      <div className="rounded-0 alert alert-primary">
        {admins && admins.length > 0 && (
          <div className="card p-3">
            <Table columns={columns} data={admins}></Table>
          </div>
        )}
      </div>
    </div>
  );
}

export default AllAdmins;
