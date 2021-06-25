import { API } from "../api/backend";
import { Redirect } from "react-router-dom";
const firebase = require("firebase");
export const signup = (user) => {
  return fetch(`${API}signup`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const login = (user) => {
  return fetch(`${API}auth/admin/login`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};
export const googlesignin = (user) => {
  return fetch(`${API}google/signin`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const authenticate = (data, next) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("jwt", JSON.stringify(data));
    next();
  }
};
export const googlesignup = (user) => {
  return fetch(`${API}google/signup`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};
export const logout = (next) => {
  if (typeof window !== "undefined") {
    localStorage.clear();
    localStorage.removeItem("jwt");
    localStorage.removeItem("cart");
    return fetch(`${API}logout`, {
      method: "GET",
    })
      .then((response) => {
        console.log("signout success", response);
        return next();
      })
      .catch((err) => console.log(err));
  }
};
