import React, { useState, useEffect } from "react";
import {Form,Button} from 'react-bootstrap'
import ImageDrop from "../../Components/ImageDrop"
import {createAdmin} from "../../api/helper"
import axios from 'axios'
function Create() {   
    const [values, setValues] = useState({
        email: "",
        password: "",
        image:[],
        phone:'',
        address:'',
        error: "",
        loading: false,
        redirectNow: false,
      });
    useEffect(() => {
    setValues({ ...values, error: "", success: false});
    }, [])
    const gotImage=(image)=>{
      console.log(image)
      setValues({ ...values, 'image':image });
    }
    const { email, password,phone,address, error, loading, redirectNow ,image} = values;
    const handleChange = name => event => {
      const value =event.target.value;
      setValues({ ...values, [name]: value });
    };
    const onSubmit = event => {
        event.preventDefault();
        setValues({ ...values, error: false, loading: true });
        console.log(values)
        createAdmin(values).then(data=>{
          if (data.error) {
            setValues({ ...values, error: data.error });
          } else {
            setValues({
              name: "",
              description: "",
              price: "",
              photo: "",
              stock: "",
              loading: false,
            });
            window.location.reload(true)
          }  
        }).catch(err=>{
          console.log(err)
        })
      };



    //   styles for image preview
   
      
    return (
        <div className="row" style={{width:'100%'}}>
            <div className="col-lg-10 offset-lg-1 p-3">
                <h4>Add Admin</h4>
            <div className="alert alert-primary">
              
                 <Form>
                   <small className="text-danger">{error}</small>
  <Form.Group >
    <Form.Label>Name </Form.Label>
    <Form.Control onChange={handleChange("name")} type="text" placeholder="Enter name" />
    <Form.Text className="text-muted">
    </Form.Text>
  </Form.Group>
  <Form.Group >
    <Form.Label>Email address</Form.Label>
    <Form.Control onChange={handleChange("email")} type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
    </Form.Text>
  </Form.Group>
  <Form.Group >
    <Form.Label>Phone Number </Form.Label>
    <Form.Control onChange={handleChange("phone")} type="number" placeholder="Enter phone" />
    <Form.Text className="text-muted">
    </Form.Text>
  </Form.Group>
  <Form.Group >
    <Form.Label>Address</Form.Label>
    <Form.Control onChange={handleChange("address")} type="text" placeholder="Enter Address" />
    <Form.Text className="text-muted">
    </Form.Text>
  </Form.Group>
  <Form.Group >
  <Form.Label>Profile Image</Form.Label>
<ImageDrop  imageUploaded={gotImage}></ImageDrop>

</Form.Group>
  <Form.Group >
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" onChange={handleChange("password")} placeholder="Password" />
  </Form.Group>
 
  <Button variant="primary" onClick={onSubmit}>
    Submit
  </Button>
</Form>
            
        </div>
            </div>
        </div>
      
    )
}

export default Create
