import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import ImageDrop from "../../Components/ImageDrop";
import Base from "../../Components/Base";
import { createCategory } from "../../api/helper";
import swal from "sweetalert2";

function Create() {
  const [values, setValues] = useState({
    eng_name: "",
    nep_name: "",
    image: null,
    description: "",
    short_name: "",
    error: "",
    loading: false,
    redirectNow: false,
  });
  useEffect(() => {
    setValues({ ...values, error: "", success: false });
  }, []);
  const gotImage = (image) => {
    console.log(image);
    setValues({ ...values, image: image });
  };
  const {
    eng_name,
    nep_name,
    description,
    short_name,
    error,
    loading,
    redirectNow,
    image,
  } = values;
  const handleChange = (name) => (event) => {
    const value = event.target.value;
    setValues({ ...values, [name]: value });
  };
  const onSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false, loading: true });
    console.log(values);
    createCategory(values)
      .then((data) => {
        console.log(data);
        if (data.error_message) {
          swal.fire({ title: data.error_message, icon: "error" });

          setValues({ ...values, error: data.error });
        } else {
          setValues({
            eng_name: "",
            nep_name: "",
            description: "",
            short_name: "",
            image: "",
            loading: false,
          });
          swal.fire({ title: "Category Added", icon: "success" });

          window.location.reload(true);
        }
      })
      .catch((err) => {
        console.log(err);
        swal.fire({ title: "Something wrong occured", icon: "error" });
      });
  };

  //   styles for image preview

  return (
    <Base>
      <div className="row" style={{ width: "100%" }}>
        <div className="col-lg-10 offset-lg-1 p-3">
          <h4>Add Category</h4>
          <div className="alert alert-primary">
            <Form>
              <Form.Group>
                <Form.Label>English Name </Form.Label>
                <Form.Control
                  onChange={handleChange("eng_name")}
                  type="text"
                  placeholder="Enter English name"
                />
                <Form.Text className="text-muted"></Form.Text>
              </Form.Group>
              <Form.Group>
                <Form.Label>Nepali Name </Form.Label>
                <Form.Control
                  onChange={handleChange("nep_name")}
                  type="text"
                  placeholder="Enter Nepali name"
                />
                <Form.Text className="text-muted"></Form.Text>
              </Form.Group>
              <Form.Group>
                <Form.Label>Short Name</Form.Label>
                <Form.Control
                  onChange={handleChange("short_name")}
                  type="text"
                  placeholder="Enter short name"
                />
                <Form.Text className="text-muted"></Form.Text>
              </Form.Group>
              <Form.Group>
                <Form.Label>Description </Form.Label>
                <Form.Control
                  as="textarea"
                  onChange={handleChange("description")}
                  rows={3}
                />
                <Form.Text className="text-muted"></Form.Text>
              </Form.Group>
              <Form.Group>
                <Form.Label>Category Image</Form.Label>
                <ImageDrop imageUploaded={gotImage}></ImageDrop>
              </Form.Group>
              <small className="text-danger">{error}</small> <br></br>
              <Button variant="primary" onClick={onSubmit}>
                Submit
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </Base>
  );
}

export default Create;
