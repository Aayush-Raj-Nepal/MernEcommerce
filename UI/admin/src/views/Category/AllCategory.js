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
        Header: "#SN",
        accessor: (row) => row.email,
        Cell: (value) => <span>{value.row.index + 1}</span>,
      },
      {
        Header: "Category ID",
        accessor: "_id",
      },
      {
        Header: "In Home",
        accessor: "inHome",
        Cell: (value) => (
          <button
            className={
              value.value == true
                ? "btn btn-success btn-sm"
                : "btn btn-success btn-secondary"
            }
            onClick={() => toggleInHome(value.data[value.row.index])}
          >
            In Home :{value.value}
          </button>
        ),
      },
      {
        Header: "Eng Name",
        accessor: "eng_name", // accessor is the "key" in the data
      },
      {
        Header: "Nep Name",
        accessor: "nep_name", // accessor is the "key" in the data
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
  const toggleInHome = (data) => {
    console.log(data);
    updateCategory(data)
      .then((resp) => {
        window.alert("Status changed");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const deleteRow = (Category) => {
    deleteCategory(Category)
      .then((resp) => {
        // window.alert("Deleted Category!");
        fetchCategories();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const editRow = (category) => {
    // history.push("/category/edit/" + category._id);
    // window.confirm(admins[admin].email + " is being edited");
  };
  return (
    <Base>
      <div className="container py-3 ">
        <h4>All Categories</h4>

        <div className="rounded-0 alert alert-primary">
          <div className="card p-3">
            {categories && categories.length > 0 && (
              <Table columns={columns} data={categories}></Table>
            )}
          </div>
        </div>
      </div>
    </Base>
  );
}

export default AllCategories;
