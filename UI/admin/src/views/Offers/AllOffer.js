import React, { useEffect, useState } from "react";
import Base from "../../Components/Base";
import { getAllOffers, updateOffer, deleteOffer } from "../../api/helper";
import Table from "../../Components/Table";
import Avatar from "@material-ui/core/Avatar";
import { getMediaUrl } from "../../api/functions";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import swal from "sweetalert2";

function Index() {
  const history = useHistory();
  const [products, setOffers] = useState([]);
  useEffect(() => {
    fetchOffers();
  }, []);
  const fetchOffers = async () => {
    await getAllOffers().then((resp) => {
      // setOffers([...products,...resp])
      setOffers(resp);
    });
  };
  const columns = React.useMemo(
    () => [
      {
        Header: "#SN",
        accessor: (row) => row.offer_name,
        Cell: (value) => <span>{value.row.index + 1}</span>,
      },
      {
        Header: "name",
        accessor: "offer_name", // accessor is the "key" in the data
      },

      {
        Header: "title ",
        accessor: "title", // accessor is the "key" in the data
      },
      {
        Header: "status",
        accessor: "offer_active",
        Cell: (value) => (
          <span>
            <a
              style={{ cursor: "pointer" }}
              className={
                "text-" +
                (value && value.value == true ? "success" : "secondary")
              }
              onClick={() => toggleStatus(value.data[value.row.index])}
            >
              {value.value}
            </a>
          </span>
        ),
      },
      {
        Header: "Category",
        accessor: "category",
        Cell: (value) => <span>{value.value.name}</span>,
      },
      {
        Header: "Image",
        accessor: "images",
        Cell: ({ value }) => (
          <Avatar alt=" " src={getMediaUrl("product/" + value[0])} />
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

  const toggleStatus = (data) => {
    console.log(data);
    let toSet = data.status && data.status === "Active" ? "Inactive" : "Active";
    updateOffer(
      { _id: data._id },
      {
        status: toSet,
      }
    )
      .then((resp) => {
        swal.fire("Offer is now " + toSet);

        fetchOffers();
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
          deleteOffer(product)
            .then((resp) => {
              fetchOffers();
              swal.fire("Offer Deleted");
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
      <div className="container py-3">
        <h4>All Offers</h4>
        <div className="alert alert-primary rounded-0">
          {/* {JSON.stringify(products)} */}
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
