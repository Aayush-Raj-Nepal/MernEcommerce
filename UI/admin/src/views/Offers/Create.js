import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import ImageDrop from "../../Components/ImageDrop";
import Base from "../../Components/Base";
import { createOffer, getCategories } from "../../api/helper";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import Select from "react-select";
import swal from "sweetalert2";
import TagInput from "../../Components/TagInput/Index";
function Create() {
  const [categories, setCategories] = useState([]);
  const [values, setValues] = useState({
    offer_name: "",
    title: "",
    sub_title: "",
    tags: [],
    real_price: "",
    offer_price: "",
    discount: null,
    category: {},
    stock: null,
    description: "",
    images: [""],
    products: [],
    error: "",
    loading: false,
  });

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
    });
  }, []);
  const gotImage = (image, index) => {
    let i = images;
    i[index] = image;
    setValues({ ...values, images: [...i] });
    console.log(images);
  };

  const {
    name,
    sub_title,
    products,
    tags,
    images,
    error,
    description,
    loading,
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
    if (!tags || tags.length == 0 || tags[0] == "") {
      swal.fire({ title: "Offer tags empty", icon: "error" });
    } else if (images[0] == "" || !images[0]) {
      swal.fire({ title: "main image missing", icon: "error" });
      // } else if (products.length == 0) {
      //   swal.fire({ title: "no products selected", icon: "error" });
    } else {
      console.log(values);
      // return;
      createOffer(values)
        .then((data) => {
          if (data.error_message) {
            swal.fire({ title: data.error_message, icon: "error" });
            setValues({ ...values, error: data.error });
          } else {
            setValues({
              offer_name: "",
              title: "",
              sub_title: "",
              tags: [],
              real_price: "",
              offer_price: "",
              discount: null,
              category: {},
              stock: null,
              description: "",
              images: [""],
              error: "",
              loading: false,
            });
            swal.fire({ title: "offer added", icon: "success" });
            window.location.reload(true);
          }
        })
        .catch((err) => {
          console.log(err);
          swal.fire({ title: "Something wrong occured", icon: "error" });
        });
    }
  };
  // const productsSelected = (items) => {
  //   let newItems = items.map((i) => {
  //     return {
  //       name: i.eng_name,
  //       product_id: i._id,
  //     };
  //   });
  //   setValues({
  //     ...values,
  //     products: newItems,
  //   });
  //   console.log(items);
  // };
  function gotTags(a) {
    console.log(a);
    setValues({ ...values, tags: a });
  }
  return (
    <Base>
      <div className="row" style={{ width: "100%" }}>
        <div className="col-lg-10 offset-lg-1 p-3">
          <div className="card">
            <div className="card-header">
              <h4>Add Offer</h4>
            </div>
            <div className="card-body">
              <Form>
                <Form.Group>
                  <Form.Label>Offer Name </Form.Label>
                  <Form.Control
                    onChange={handleChange("offer_name")}
                    type="text"
                    placeholder="Enter Offer Name"
                  />
                  <Form.Text className="text-muted"></Form.Text>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Title </Form.Label>
                  <Form.Control
                    onChange={handleChange("title")}
                    type="text"
                    placeholder="Enter Title"
                  />
                  <Form.Text className="text-muted"></Form.Text>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Sub Title</Form.Label>
                  <Form.Control
                    placeholder="Enter Title"
                    onChange={handleChange("sub_title")}
                  />
                  <Form.Text className="text-muted"></Form.Text>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Offer Tags </Form.Label>
                  <TagInput values={(a) => gotTags(a)} />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Real Price</Form.Label>
                  <Form.Control
                    onChange={handleChange("real_price")}
                    type="number"
                    placeholder="Enter Real Price (Nrs)"
                  />
                  <Form.Text className="text-muted"></Form.Text>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Offer Price</Form.Label>
                  <Form.Control
                    onChange={handleChange("offer_price")}
                    type="number"
                    placeholder="Enter Offer Price (Nrs)"
                  />
                  <Form.Text className="text-muted"></Form.Text>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Discount % (Only for show)</Form.Label>
                  <Form.Control
                    onChange={handleChange("discount")}
                    type="number"
                    placeholder="Enter Offer Price (Nrs)"
                  />
                  <Form.Text className="text-muted"></Form.Text>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Category</Form.Label>

                  <Select
                    className="basic-single"
                    classNamePrefix="select"
                    defaultValue={categories[0]}
                    // isLoading={isLoading}
                    isSearchable={true}
                    name=""
                    onChange={(e) => selectCatgory(e)}
                    options={categories}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Stock</Form.Label>
                  <Form.Control
                    onChange={handleChange("stock")}
                    type="number"
                    placeholder="Current Stock "
                  />
                  <Form.Text className="text-muted"></Form.Text>
                </Form.Group>
                <Form.Group>
                  <Form.Label>
                    Description [This is how your main offer page looks like]
                  </Form.Label>

                  <CKEditor
                    editor={ClassicEditor}
                    data={description}
                    onChange={(event, editor) => {
                      const data = editor.getData();
                      handleCKEditor(data);
                    }}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Offer Main Image</Form.Label>
                  <ImageDrop
                    imageUploaded={(image, index) => gotImage(image, 0)}
                  ></ImageDrop>
                </Form.Group>

                <Button variant="primary" onClick={onSubmit}>
                  Submit
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </Base>
  );
}
export default Create;
