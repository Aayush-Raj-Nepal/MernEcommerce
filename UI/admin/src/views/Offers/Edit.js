import React, { useState, useEffect, Fragment } from "react";
import { Form, Button } from "react-bootstrap";
import ImageDrop from "../../Components/ImageDrop";
import Base from "../../Components/Base";
import { editProduct, getCategories, getProductToEdit } from "../../api/helper";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import Select from "react-select";
import { useParams } from "react-router-dom";

function Edit() {
  let { id } = useParams();
  const [product, setProduct] = useState(null);
  const [values, setValues] = useState({
    eng_name: "",
    nep_name: "",
    tags: [],
    description: "",
    short_description: "",
    product_details: "",
    product_source: "",
    price: null,
    discount: null,
    product_source_type: "",
    category: {},
    stock: null,
    images: [""],
    short_name: "",
    error: "",
    loading: false,
    redirectNow: false,
  });
  const [categories, setCategories] = useState([]);
  const sourceOptions = [
    {
      label: "Subidha Store",
      value: "MYSTORE",
    },
    {
      label: "External Vendor/Shop",
      value: "SHOP",
    },
  ];
  useEffect(() => {
    setValues({ ...values, error: "", success: false });
    getCategories().then((resp) => {
      let cat = resp.map((c) => {
        return {
          label: c.eng_name,
          value: c,
        };
      });
      setCategories(cat);
      getProductToEdit(id)
        .then((p) => {
          console.log(p);
          setProduct(p);
          setValues({ ...values, ...p });

          let c = categories.filter((cat) => cat.label == p.category.name)[0];
          setValues({ ...values, category: c });
          console.log(c);
          console.log(values);
        })
        .catch((err) => {
          console.log(err);
        });
    });
  }, []);
  const gotImage = (image, index) => {
    let i = images;
    i[index] = image;
    setValues({ ...values, images: [...i] });
    console.log(images);
  };

  const {
    eng_name,
    nep_name,
    description,
    product_source_type,
    category,
    price,
    discount,
    short_description,
    product_details,
    product_source,
    stock,
    error,
    loading,
    redirectNow,
    short_name,
    images,
  } = values;
  const selectSource = (data) => {
    console.log(data);
    setValues({ ...values, product_source_type: data.value });
  };
  const selectCatgory = (data) => {
    console.log(data);
    setValues({
      ...values,
      category: { name: data.value.eng_name, cat_id: data.value._id },
    });
  };
  const handleChange = (name) => (event) => {
    const value = event.target.value;
    setValues({ ...values, [name]: value });
  };
  const handleCKEditor = (data) => {
    // console.log(data)
    setValues({ ...values, description: data });
  };
  const onSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false, loading: true });
    console.log(values);
    editProduct(values, id)
      .then((data) => {
        if (data.error) {
          setValues({ ...values, error: data.error });
        } else {
          console.log(data);
          setValues({
            eng_name: "",
            nep_name: "",
            tags: [],
            product_no: "",
            description: "",
            short_name: "",
            short_description: "",
            category: {},
            image: "",
            loading: false,
            product_source_type: "",
          });
          // window.location.reload(true)
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //   styles for image preview

  return (
    <Base>
      {product && (
        <div className="row" style={{ width: "100%" }}>
          <div className="col-lg-10 offset-lg-1 p-3">
            <h4>Edit Product</h4>
            <div className="alert alert-primary">
              <Form>
                <Form.Group>
                  <Form.Label>English Name </Form.Label>
                  <Form.Control
                    onChange={handleChange("eng_name")}
                    type="text"
                    value={eng_name}
                    placeholder="Enter English name"
                  />
                  <Form.Text className="text-muted"></Form.Text>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Nepali Name </Form.Label>
                  <Form.Control
                    onChange={handleChange("nep_name")}
                    type="text"
                    value={nep_name}
                    placeholder="Enter Nepali name"
                  />
                  <Form.Text className="text-muted"></Form.Text>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Short Name</Form.Label>
                  <Form.Control
                    value={short_name}
                    onChange={handleChange("short_name")}
                    type="text"
                    placeholder="Enter short name"
                  />
                  <Form.Text className="text-muted"></Form.Text>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Price</Form.Label>
                  <Form.Control
                    onChange={handleChange("price")}
                    type="number"
                    value={price}
                    placeholder="Enter Price (Nrs)"
                  />
                  <Form.Text className="text-muted"></Form.Text>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Discount</Form.Label>
                  <Form.Control
                    onChange={handleChange("discount")}
                    type="number"
                    value={discount}
                    placeholder="Enter Discount % "
                  />
                  <Form.Text className="text-muted"></Form.Text>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Description </Form.Label>

                  <CKEditor
                    editor={ClassicEditor}
                    data={description}
                    value={description}
                    onChange={(event, editor) => {
                      const data = editor.getData();
                      handleCKEditor(data);
                    }}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Short Description </Form.Label>
                  <Form.Control
                    as="textarea"
                    value={short_description}
                    onChange={handleChange("short_description")}
                    rows={3}
                  />
                  <Form.Text className="text-muted"></Form.Text>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Product Source Type</Form.Label>
                  <Select
                    className="basic-single"
                    classNamePrefix="select"
                    defaultValue={product_source_type}
                    // isLoading={isLoading}
                    isSearchable={true}
                    name=""
                    onChange={(e, d) => selectSource(e, d)}
                    options={sourceOptions}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Category</Form.Label>

                  <Select
                    className="basic-single"
                    classNamePrefix="select"
                    defaultValue={category}
                    // isLoading={isLoading}
                    isSearchable={true}
                    name=""
                    onChange={(e) => selectCatgory(e)}
                    options={categories}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Product Main Image</Form.Label>
                  <ImageDrop
                    imageUploaded={(image, index) => gotImage(image, 0)}
                  ></ImageDrop>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Other Images (optional)</Form.Label>
                  <ImageDrop
                    imageUploaded={(image, index) => gotImage(image, 1)}
                  ></ImageDrop>
                  <ImageDrop
                    imageUploaded={(image, index) => gotImage(image, 2)}
                  ></ImageDrop>
                  <ImageDrop
                    imageUploaded={(image, index) => gotImage(image, 3)}
                  ></ImageDrop>
                  <ImageDrop
                    imageUploaded={(image, index) => gotImage(image, 4)}
                  ></ImageDrop>
                </Form.Group>
                <small className="text-danger">{error}</small> <br></br>
                <Button variant="primary" onClick={onSubmit}>
                  Submit
                </Button>
              </Form>
            </div>
          </div>
        </div>
      )}
    </Base>
  );
}

export default Edit;
