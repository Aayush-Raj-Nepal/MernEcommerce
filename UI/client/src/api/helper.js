import { API } from "./backend";
import axios from "axios";

export const login=(userData)=>{

}
export const getLatestProducts = (data) => {
  return axios
    .get(API + "product/latest")
    .then((resp) => {
      console.log(resp);
      return resp.data;
    })
    .catch((err) => {
      console.log(" request failed", err);
      return err.error;
    });
};
export const getProductByCategory = (id, query) => {
  return axios
    .get(`${API}product/category/${id}`, query)
    .then((response) => {
      return response.data;
    })
    .catch((err) => console.log(err));
};
export const getHomeCategories = (id) => {
  return axios
    .get(`${API}category/inHome`)
    .then((response) => {
      return response.data;
    })
    .catch((err) => console.log(err));
};
export const getHomeNewProduct = (id) => {
  return axios
    .get(`${API}newproduct/inHome`)
    .then((response) => {
      return response.data;
    })
    .catch((err) => console.log(err));
};
export const featuredProducts = (data) => {
  return axios
    .get(API + "product/featured")
    .then((resp) => {
      console.log(resp);
      return resp.data;
    })
    .catch((err) => {
      console.log(" request failed", err);
      return err.error;
    });
};

export const getCategory = (data) => {
  return axios
    .get(API + "category")
    .then((resp) => {
      console.log(resp);
      return resp.data;
    })
    .catch((err) => {
      console.log(" request failed", err);
      return err.error;
    });
};

export const categoryProducts = (data) => {
  return axios
    .get(API + "category")
    .then((resp) => {
      console.log(resp);
      return resp.data;
    })
    .catch((err) => {
      console.log(" request failed", err);
      return err.error;
    });
};

export const getSingleProduct = (id) => {
  return axios
    .get(API + "product/single/" + id)
    .then((resp) => {
      console.log(resp);
      return resp.data;
    })
    .catch((err) => {
      console.log(" request failed", err);
      return err.error;
    });
};
