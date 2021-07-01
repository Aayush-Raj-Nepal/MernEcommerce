import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";

//importing routes 

import Home from "./views/Home";
import AboutUs from "./views/AboutUs";
import ContactUs from "./views/Contact";
import SignIn from "./views/Signin";
import SignUp from "./views/Signup";
import ForgetPassword from "./views/Forgetpassword";
import NewProduct from "./views/Newproduct";
import SingleProductView from "./views/Singleproductview";
import CheckOut from "./views/Checkout";
import BillSlip from "./views/Bill";
import OfferS from "./views/Offer";
import FaQ from "./views/Faq";
import RequestProduct from "./views/Requestproduct"
import OrderPlaced from "./views/Orderplaced"
import Dashboard from "./views/Overview"
import CategoryProducts from "./views/CategoryProduct"

import PageNotFound from "./views/404"

// import Signup from "./user/Signup";
// import Signin from "./user/Signin";
// import AdminRoute from "./auth/helper/AdminRoutes";
// import PrivateRoute from "./auth/helper/PrivateRoutes";
// import UserDashBoard from "./user/UserDashBoard";
// import AdminDashBoard from "./user/AdminDashBoard";
// import AddCategory from "./admin/AddCategory";
// import ManageCategories from "./admin/ManageCategories";
// import AddProduct from "./admin/AddProduct";
// import ManageUsers from "./admin/Users";
// import ManageProducts from "./admin/ManageProducts";
// import UpdateProduct from "./admin/UpdateProduct";
// import Cart from "./views/Cart"
// import ContactUs from "./views/contact";
// import ProductDetails from "./views/productdetails"
// import EditUser from "./user/edituser"
// import EsewaPay from "./views/payment/esewapay"
// import UpdateCategory from "./admin/UpdateCategory.js";
// import Category from "./views/category/category.js";
// import ManageOrders from "./admin/Orders.js"
// import Fail from "./user/paymentFail.js";
// import Success from "./user/paymentSuccess.js";
// import UserDetail from "./admin/UserDetails"
// import VerifyUser from "./user/verifyUser.js"
const Routes = () => {
 
  return (
    <HashRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/aboutus" exact component={AboutUs} />
        <Route path="/contact" exact component={ContactUs} />
        <Route path="/signin" exact component={SignIn} />
        <Route path="/signup" exact component={SignUp} />
        <Route path="/forgetpassword" exact component={ForgetPassword} />
        <Route path="/newproduct" exact component={NewProduct} />
        <Route path="/product/:id" component={SingleProductView}/>
        <Route path="/checkout" exact component={CheckOut}/>
        <Route path="/bill" exact component={BillSlip}/>
        <Route path="/offers" exact component={OfferS}/>
        <Route path="/faq" exact component={FaQ}/>
        <Route path="/requestproduct" exact component={RequestProduct}/>
        <Route path="/orderplaced" exact component={OrderPlaced}/>
        <Route path="/dashboard" component={Dashboard}/>
        <Route path="/category/:id" component={CategoryProducts}/>



        <Route path="*" component={PageNotFound}/>
        {/* <Route path="/signup" exact component={Signup} />
        <Route path="/signin" exact component={Signin} />
        <Route path="/contact" exact component={ContactUs} />
        <Route path="/product/:productId" exact component={ProductDetails} />
        <Route path="/cart" exact component={Cart} />
        <Route path="/category/:cid" exact component={Category} />
        <PrivateRoute path="/user/dashboard" exact component={UserDashBoard} />
        <PrivateRoute path='/user/edit' exact component={EditUser} />
        <AdminRoute path="/admin/dashboard" exact component={AdminDashBoard} />
        <PrivateRoute  path='/payment_success'  component={Success} />
        <PrivateRoute path="/payment/:oid" component ={EsewaPay} />
        <PrivateRoute path="/payment_fail" exact component={Fail} />
        <PrivateRoute path="/user/verify" exact component={VerifyUser} />

        <AdminRoute
          path="/admin/create/category"
          exact
          component={AddCategory}
        />
        <AdminRoute
          path="/admin/categories"
          exact
          component={ManageCategories}
        />
        <AdminRoute path="/admin/create/product" exact component={AddProduct} />

        <AdminRoute path="/admin/products" exact component={ManageProducts} />
        <AdminRoute path="/admin/orders" exact component={ManageOrders} />

        <AdminRoute
          path="/admin/product/update/:productId"
          exact
          component={UpdateProduct}
        />
        <AdminRoute
          path="/admin/category/update/:categoryId"
          exact
          component={UpdateCategory}
        />
        <AdminRoute
          path="/admin/users"
          exact
          component={ManageUsers}
        />
        <AdminRoute
          path="/admin/user/details/:userId"
          exact
          component={UserDetail}
        />
         */}
        

      </Switch>
    </HashRouter>
  );
};

export default Routes;
