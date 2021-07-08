import { API } from "./backend";
import axios from "axios";
import { handleCatch } from "./functions";
// admin apis
export const createAdmin = (data) => {
  return axios
    .post(API + "admin", data)
    .then((resp) => {
      console.log(resp.data);
      if (resp.data.error_message) {
        console.log(resp.data.error_message);

        return {
          error_message: resp.data.error_message,
        };
      } else {
        return resp.data;
      }
    })
    .catch((err) => {
      if (err.response) {
        return {
          error_message: err.response.data.error_message,
        };
      } else {
        console.log(err);
      }
    });
};
export const getProductToEdit = (id) => {
  return axios
    .get(API + "product/edit/" + id)
    .then((resp) => {
      console.log(resp);
      return resp.data;
    })
    .catch((err) => {
      if (err.response) {
        return {
          error_message: err.response.data.error_message,
        };
      } else {
        return err;
      }
    });
};
export const deleteAdmin = (data) => {
  return axios
    .delete(API + "admin/" + data._id)
    .then((resp) => {
      console.log(resp);
      return resp.data;
    })
    .catch((err) => {
      if (err.response) {
        return {
          error_message: err.response.data.error_message,
        };
      } else {
        return err;
      }
    });
};
export const deleteProduct = (data) => {
  return axios
    .delete(API + "product/" + data._id)
    .then((resp) => {
      console.log(resp);
      return resp.data;
    })
    .catch((err) => {
      if (err.response) {
        return {
          error_message: err.response.data.error_message,
        };
      } else {
        return err;
      }
    });
};
export const deleteOffer = (data) => {
  return axios
    .delete(API + "offer/" + data._id)
    .then((resp) => {
      console.log(resp);
      return resp.data;
    })
    .catch((err) => {
      if (err.response) {
        return {
          error_message: err.response.data.error_message,
        };
      } else {
        return err;
      }
    });
};
export const updateProduct = (data, update) => {
  return axios
    .put(API + "product", { query: { _id: data._id }, update })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      if (err.response) {
        return {
          error_message: err.response.data.error_message,
        };
      } else {
        return err;
      }
    });
};
export const updateOffer = (data, update) => {
  return axios
    .put(API + "offer", { query: { _id: data._id }, update })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      if (err.response) {
        return {
          error_message: err.response.data.error_message,
        };
      } else {
        return err;
      }
    });
};

export const getAllAdmins = (data) => {
  return axios
    .get(API + "admin")
    .then((resp) => {
      console.log(resp);
      return resp.data;
    })
    .catch((err) => {
      if (err.response) {
        return {
          error_message: err.response.data.error_message,
        };
      } else {
        return err;
      }
    });
};
//user calls
export const getUsers = (userId, token) => {
  return fetch(`${API}/users/all/${userId}`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};
//user details
export const getUserDetails = (userid, token, uid) => {
  return fetch(`${API}user/detail/${userid}?uid=${uid}`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};
//category calls
export const createCategory = (data) => {
  return axios
    .post(API + "category", data)
    .then((res) => {
      console.log(res);
      return res.data;
    })
    .catch((err) => {
      if (err.response) {
        console.log(err.response);
        return {
          error_message: err.response.data.error_message,
        };
      } else {
        return err;
      }
    });
};
// product create

export const createProduct = (data) => {
  return axios
    .post(API + "product", data)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      if (err.response) {
        return {
          error_message: err.response.data.error_message,
        };
      } else {
        return err;
      }
    });
};

export const editProduct = (data, id) => {
  return axios
    .put(API + "product/" + id, data)
    .then((res) => {
      console.log(res).data;
      return res.data;
    })
    .catch((err) => {
      if (err.response) {
        return {
          error_message: err.response.data.error_message,
        };
      } else {
        return err;
      }
    });
};

export const createOffer = (data) => {
  return axios
    .post(API + "offer", data)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      if (err.response) {
        return {
          error_message: err.response.data.error_message,
        };
      } else {
        return err;
      }
    });
};

export const editOffer = (data, id) => {
  return axios
    .put(API + "offer/" + id, data)
    .then((res) => {
      console.log(res).data;
      return res.data;
    })
    .catch((err) => {
      if (err.response) {
        return {
          error_message: err.response.data.error_message,
        };
      } else {
        return err;
      }
    });
};

export const updateCategory = (data, update) => {
  return axios
    .put(API + "category", { query: { _id: data._id }, update })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      if (err.response) {
        return {
          error_message: err.response.data.error_message,
        };
      } else {
        return err;
      }
    });
};

//get all categories
export const getCategories = () => {
  return axios
    .get(`${API}category`)
    .then((response) => {
      return response.data;
    })
    .catch((err) => console.log(err));
};
export const getCategory = (id) => {
  return axios
    .get(`${API}category/single/` + id)
    .then((response) => {
      return response.data;
    })
    .catch((err) => console.log(err));
};

//get all orders
export const getOrders = (userId, token) => {
  return fetch(`${API}order/all/${userId}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

//Product calls

//create a product
export const createaProduct = (userId, token, product) => {
  return fetch(`${API}product/create/${userId}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: product,
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

//get all products
export const getAllProducts = () => {
  return axios
    .get(`${API}product`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      if (err.response) {
        return {
          error_message: err.response.data.error_message,
        };
      } else {
        return err;
      }
    });
};
//get all offers
export const getAllOffers = () => {
  return axios
    .get(`${API}offer`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      if (err.response) {
        return {
          error_message: err.response.data.error_message,
        };
      } else {
        return err;
      }
    });
};

//delete  categories
export const deleteCategory = (category) => {
  return axios
    .delete(API + "category/" + category._id)
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};
