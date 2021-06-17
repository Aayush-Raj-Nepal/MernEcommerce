import React, { useEffect, useState } from "react";
import Base from "../../Components/Base";
import { getAllProducts, deleteProduct } from "../../api/helper";
import Table from "../../Components/Table";
import Avatar from "@material-ui/core/Avatar";
import { getMediaUrl } from "../../api/functions";
import { useHistory } from "react-router-dom";

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
        Header: "#SN",
        accessor: (row) => row.name,
        Cell: (value) => <span>{value.row.index + 1}</span>,
      },
      {
        Header: "English Name",
        accessor: "eng_name", // accessor is the "key" in the data
      },
      {
        Header: "Nepali Name",
        accessor: "nep_name", // accessor is the "key" in the data
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
    deleteProduct(product)
      .then((resp) => {
        fetchProducts();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const editRow = (product) => {
    //  history.push("/product/edit/" + product._id);
  };
  return (
    <Base>
      <div className="container py-3">
        <h4>All Products</h4>
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
