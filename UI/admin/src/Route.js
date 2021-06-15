import React from "react"
import {HashRouter,Switch,Route} from "react-router-dom"
import {AdminRoute} from "./auth/helper";


// now routes start here
import Dashboard from "./views/Dashboard"
import AdminIndex from "./views/Admin/Index.js"
import Login from "./views/Auth/Login"
import CategoryCreate from "./views/Category/CreateCategory"
import AllCategories from "./views/Category/AllCategory"
import ProductCreate from "./views/Products/Create"
import AllProducts from "./views/Products/Index"

const Routes=()=>{
    return(
        <HashRouter>
            <Switch>
                <AdminRoute  path="/"
          exact
          component={Dashboard}></AdminRoute>
           
                {/* <AdminRoute  path="/admins"
        
          component={AdminIndex}></AdminRoute> */}
          <Route  path="/admins"
        
        component={AdminIndex}></Route>
        
          <AdminRoute exact  path="/category/create"
        
        component={CategoryCreate}></AdminRoute> <AdminRoute exact  path="/category/all"
        
        component={AllCategories}></AdminRoute>
           <AdminRoute exact  path="/product/create"
        
        component={ProductCreate}></AdminRoute> <AdminRoute exact  path="/product/all"
        
        component={AllProducts}></AdminRoute>
            <Route exact path="/login" component={Login}></Route>
            </Switch>
        </HashRouter>
    )
}
export default Routes