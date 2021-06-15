import { API } from "./backend";
import axios from 'axios'

// admin apis
export const createAdmin=(data)=>{
 return axios.post(API+"admin",data).then(resp => {
   console.log(resp)
    return resp.data
    })
    .catch(err=>{
      console.log("Login request failed",err)
      return err.error

    })
}
export const deleteAdmin=(data)=>{
  return axios.delete(API+"admin/"+data._id).then(resp => {
    console.log(resp)
     return resp.data
     })
     .catch(err=>{
       console.log("Login request failed",err)
       return err.error
 
     })
 }
export const getAllAdmins=(data)=>{
  return axios.get(API+"admin").then(resp => {
    console.log(resp)
     return resp.data
     })
     .catch(err=>{
       console.log(" request failed",err)
       return err.error
     })
 }
//user calls
export const getUsers = (userId,token) => {
  return fetch(`${API}/users/all/${userId}`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`
    },
  })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};
//user details
export const getUserDetails = (userid, token,uid) => {
  return fetch(`${API}user/detail/${userid}?uid=${uid}`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};
//category calls
export const createCategory = (data) => {
 return  axios.post(API+"category",data).then(res => {
    console.log(res)
      return res.data
    })
    .catch(err =>{
      console.log("request failed",err.response.data)
      return err.response.data
    });
};
// product create

export const createProduct=(data)=>{
  return axios.post(API+"product",data).then(res=>{
    console.log(res).data
    return res.data
  }).catch(err=>{
    console.log("Production Creation Failed!",err.response.data)
    return err.response.data

  })
}




//get all categories
export const getCategories = () => {
  return axios.get(`${API}category`)
    .then(response => {
      return response.data;
    })
    .catch(err => console.log(err));
};
//get all orders
export const getOrders = (userId,token) => {
  return fetch(`${API}order/all/${userId}`, {
    method: "GET",
    headers:{

      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    }
  })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};

//Product calls

//create a product
export const createaProduct = (userId, token, product) => {
  return fetch(`${API}product/create/${userId}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`
    },
    body: product
  })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};

//get all products
export const getProducts = () => {
  return fetch(`${API}products`, {
    method: "GET"
  })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};

//delete a product

export const deleteProduct = (productId, userId, token) => {
  return fetch(`${API}product/${productId}/${userId}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`
    }
  })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};
//get categoryByID
export const getCategory = (categoryId) => {
  return fetch(`${API}category/${categoryId}`, {
    method: "GET"
    }
  )
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};
//delete  categories
export const deleteCategory = (categoryId, userId, token) => {
  return fetch(`${API}category/${categoryId}/${userId}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`
    }
  })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};

//get a product

export const getProduct = productId => {
  return fetch(`${API}product/${productId}`, {
    method: "GET"
  })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};

//update a product

export const updateProduct = (productId, userId, token, product) => {
  return fetch(`${API}product/${productId}/${userId}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`
    },
    body: product
  })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));

};

//update category


export const updateCategory = (CategoryId, userId, token, name) => {
  return fetch(`${API}category/${CategoryId}/${userId}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body:JSON.stringify(name)
  })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};
export const getUserOrders=(user,token,uid)=>{
  return fetch(`${API}user/orders/${user}/?uid=${uid}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    }
  })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
}