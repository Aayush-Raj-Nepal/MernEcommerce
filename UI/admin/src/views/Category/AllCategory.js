import React, { useEffect, useState } from "react";
import {
  deleteCategory,
  getCategories,
  updateCategory,
} from "../../api/helper";
import { getMediaUrl } from "../../api/functions";
import Base from "../../Components/Base";
import Table from "../../Components/Table";
import Avatar from "@material-ui/core/Avatar";
import { useHistory } from "react-router-dom";
import swal from "sweetalert2";

function AllCategories() {
  const history = useHistory();
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetchCategories();
  }, []);
  const fetchCategories = async () => {
    getCategories().then((resp) => {
      setCategories(resp);
    });
  };
  const columns = React.useMemo(
    () => [
      {
        Header: "ID",
        accessor: "_id",
      },
      {
        Header: "Image",
        accessor: "image",
        Cell: ({ value }) => (
          <Avatar
            variant="rounded"
            alt="Remy Sharp"
            src={getMediaUrl("product/" + value)}
          />
        ),
      },
      {
        Header: "Name",
        accessor: "eng_name", // accessor is the "key" in the data
      },
      {
        Header: "In Home",
        accessor: "inHome",
        Cell: (value) => (
          <span>
            <a
              style={{ cursor: "pointer" }}
              className={
                "text-" + (value.value == "true" ? "success" : "danger")
              }
              onClick={() => toggleInHome(value.data[value.row.index])}
            >
              {value && value.value == "true" ? (
                <i className="fa fa-check"></i>
              ) : (
                <i className="fa fa-times"></i>
              )}
            </a>
          </span>
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
  const toggleInHome = (data) => {
    console.log(data);
    updateCategory(
      { _id: data._id },
      { inHome: data.inHome === "true" ? false : true }
    )
      .then((resp) => {
        swal.fire({
          title:
            "Products of this category will " +
            (data.inHome === "true"
              ? "not be visible in home"
              : "be visible in home"),
          icon: "info",
        });
        fetchCategories();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const deleteRow = (Category) => {
    swal
      .fire({
        title: "Do you want to remove this category ?",
        showCancelButton: true,
        confirmButtonText: `yes delete`,
        icon: "error",
      })
      .then((willDelete) => {
        if (willDelete.isConfirmed) {
          deleteCategory(Category)
            .then((resp) => {
              fetchCategories();
              swal.fire("Category Deleted !");
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
  const editRow = (category) => {
    swal.fire({
      title: "Sorry This feature is under maintainance",
      icon: "info",
    });
    // history.push("/category/edit/" + category._id);
    // window.confirm(admins[admin].email + " is being edited");
  };
  return (
    <Base>
      <div className="container-fluid">
        <div className="card">
          <div className="card-header">
            <h4>Categories</h4>
          </div>
          <div className="card-body">
            {categories && categories.length > 0 && (
              <Table columns={columns} data={categories}></Table>
            )}
            {!categories && <p>No categories found please create category</p>}
          </div>
        </div>
      </div>
    </Base>
  );
}

export default AllCategories;
