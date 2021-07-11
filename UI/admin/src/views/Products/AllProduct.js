import React, { useEffect, useState } from "react";
import Base from "../../Components/Base";
import { getAllProducts, updateProduct, deleteProduct } from "../../api/helper";
import Table from "../../Components/Table";
import Avatar from "@material-ui/core/Avatar";
import { getMediaUrl } from "../../api/functions";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import swal from "sweetalert2";
import moment from "moment";

function Index() {
  const history = useHistory();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetchProducts();
  }, []);
  const fetchProducts = async () => {
    await getAllProducts().then((resp) => {
      // setProducts([...products,...resp])
      setProducts(resp);
    });
  };
  const columns = React.useMemo(
    () => [
      {
        Header: "ID",
        accessor: (row) => row.productId,
        Cell: (value) => <span>{value.value}</span>,
      },
      {
        Header: "Image",
        accessor: "images",
        Cell: ({ value }) => (
          <Avatar
            alt=" "
            variant="rounded"
            src={getMediaUrl("product/" + value[0])}
          />
        ),
      },
      {
        Header: "Name",
        accessor: "eng_name",
        Cell: ({ value }) => {
          return (
            <span title={value}>
              {value.length > 20 ? value.slice(0, 18) + ".." : value}
            </span>
          );
        },
      },
      {
        Header: "Category",
        accessor: "category",
        Cell: ({ value }) => {
          value = value.name;
          return (
            <span title={value}>
              {value.length > 15 ? value.slice(0, 13) + ".." : value}
            </span>
          );
        },
      },
      {
        Header: "Created",
        accessor: (row) => row.createdAt,
        Cell: (value) => {
          return <span>{moment(value.value).fromNow()}</span>;
        },
      },
      {
        Header: "status",
        accessor: "status",
        Cell: (value) => (
          <span>
            <a
              style={{ cursor: "pointer" }}
              className={
                "badge text-white badge-lg badge-" +
                (value && value.value == "Active" ? "success" : "secondary")
              }
              onClick={() => toggleStatus(value.data[value.row.index])}
            >
              {value.value}
            </a>
          </span>
        ),
      },

      {
        Header: "Featured",
        accessor: "featured",
        Cell: (value) => (
          <span>
            <a
              style={{ cursor: "pointer" }}
              className={
                "text-" +
                ((value && value.value) == true ? "success" : "danger")
              }
              onClick={() => toggleFeatured(value.data[value.row.index])}
            >
              {value && value.value ? (
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
  const toggleFeatured = (data) => {
    console.log(data);
    let toSet = data.featured === true ? false : true;
    updateProduct({ _id: data._id }, { featured: toSet })
      .then((resp) => {
        fetchProducts();
        swal.fire("Product is now " + (toSet ? "featured" : "normal"));
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const toggleStatus = (data) => {
    console.log(data);
    let toSet = data.status && data.status === "Active" ? "Inactive" : "Active";
    updateProduct(
      { _id: data._id },
      {
        status: toSet,
      }
    )
      .then((resp) => {
        swal.fire("Product is now " + toSet);

        fetchProducts();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const Actions = ({ values }) => {
    return (
      <div className="btn-group rounded-0">
        <button
          onClick={(e) => editRow(values.data[values.row.index])}
          className="rounded-0 btn btn-sm btn-outline-info"
        >
          <i className="fa fa-pen"></i>
        </button>
        <button
          onClick={(e) => deleteRow(values.data[values.row.index])}
          className="rounded-0 btn btn-sm btn-outline-danger"
        >
          <i className="fa fa-trash"></i>
        </button>
      </div>
    );
  };
  const deleteRow = (product) => {
    swal
      .fire({
        title: "Do you want to delete this product ?",
        showCancelButton: true,
        confirmButtonText: `yes delete`,
      })
      .then((willDelete) => {
        if (willDelete.isConfirmed) {
          deleteProduct(product)
            .then((resp) => {
              fetchProducts();
              swal.fire("Product Deleted");
            })
            .catch((err) => {
              console.log(err);
            });
        } else {
          swal.fire("Deletion cancelled!");
        }
      });
  };
  const editRow = (product) => {
    swal.fire({
      title: "Sorry This feature is under maintainance",
      icon: "info",
    });
    //  history.push("/product/edit/" + product._id);
  };
  return (
    <Base>
      <div className="container-fluid m-3">
        <div className="card">
          <div className="card-header">
            <h4>Products</h4>
          </div>
          {products && products.length > 0 && (
            <div className="card p-3">
              <Table columns={columns} data={products}></Table>
            </div>
          )}
        </div>
      </div>
    </Base>
  );
}

export default Index;
