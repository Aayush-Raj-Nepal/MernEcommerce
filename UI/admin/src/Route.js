import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import { AdminRoute } from "./auth/helper";

// now routes start here
import Dashboard from "./views/Dashboard";
import AdminIndex from "./views/Admin/Index.js";
import Login from "./views/Auth/Login";
import CategoryCreate from "./views/Category/CreateCategory";
import AllCategories from "./views/Category/AllCategory";
import ProductCreate from "./views/Products/Create";
import AllProducts from "./views/Products/AllProduct";
import ProductEdit from "./views/Products/Edit";
import CategoryEdit from "./views/Category/Edit";
import Contact from "./views/Contact/Index";
import About from "./views/About/Index";
const Routes = () => {
  return (
    <HashRouter>
      <Switch>
        <AdminRoute path="/" exact component={Dashboard}></AdminRoute>
        <AdminRoute path="/admins" component={AdminIndex}></AdminRoute>
        <AdminRoute
          exact
          path="/category/create"
          component={CategoryCreate}
        ></AdminRoute>{" "}
        <AdminRoute
          exact
          path="/category/all"
          component={AllCategories}
        ></AdminRoute>
        <AdminRoute
          exact
          path="/product/create"
          component={ProductCreate}
        ></AdminRoute>
        <AdminRoute
          path="/product/edit/:id"
          component={ProductEdit}
        ></AdminRoute>
        <AdminRoute
          path="/category/edit/:id"
          component={CategoryEdit}
        ></AdminRoute>
        <AdminRoute
          exact
          path="/product/all"
          component={AllProducts}
        ></AdminRoute>
        <AdminRoute exact path="/contactus" component={Contact}></AdminRoute>
        <AdminRoute exact path="/aboutus" component={About}></AdminRoute>
        <Route exact path="/login" component={Login}></Route>
      </Switch>
    </HashRouter>
  );
};
export default Routes;
