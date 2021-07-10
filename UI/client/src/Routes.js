import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import PrivateRoute from "./auth/PrivateRoutes.js";
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
import CheckOutOffer from "./views/CheckoutOffer";
import BillSlip from "./views/Bill";
import Offer from "./views/Offer";
import FeaturedProduct from "./views/FeaturedProduct";
import FaQ from "./views/Faq";
import RequestProduct from "./views/Requestproduct";
import OrderPlaced from "./views/Orderplaced";
import Dashboard from "./views/Overview";
import PrivacyPolicy from "./views/Privacypolicy";
import TermsConditions from "./views/Termsconditions";
import RefundPolicy from "./views/Refundpolicy";
import CategoryProducts from "./views/CategoryProduct";
import SearchProducts from "./views/SearchProduct";
import EmailVerified from "./views/EmailVerified";
import PageNotFound from "./views/404";
import Payment from "./views/Payment";
import PFailure from "./views/pFailure";
import PSuccess from "./views/pSuccess";
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
        <Route path="/product/:id" component={SingleProductView} />
        <PrivateRoute path="/checkout" exact component={CheckOut} />
        <PrivateRoute
          path="/checkout/offer/:id"
          exact
          component={CheckOutOffer}
        />
        <PrivateRoute path="/payment/:id" component={Payment} />
        <Route path="/bill" exact component={BillSlip} />
        <Route path="/offers/:id" exact component={Offer} />
        <Route path="/offers" exact component={Offer} />
        <Route path="/faq" exact component={FaQ} />
        <Route path="/requestproduct" exact component={RequestProduct} />
        <Route path="/orderplaced" exact component={OrderPlaced} />
        <PrivateRoute path="/dashboard" component={Dashboard} />
        <Route path="/category/:id" component={CategoryProducts} />
        <Route path="/search/:query" component={SearchProducts} />
        <Route path="/privacypolicy" exact component={PrivacyPolicy} />
        <Route path="/terms" exact component={TermsConditions} />
        <Route path="/refundpolicy" exact component={RefundPolicy} />
        <Route path="/featuredproduct" exact component={FeaturedProduct} />
        <Route path="/verifyEmail" exact component={EmailVerified} />
        <PrivateRoute path="/pfailure" exact component={PFailure} />
        <PrivateRoute path="/psuccess" exact component={PSuccess} />
        <Route path="*" component={PageNotFound} />
      </Switch>
    </HashRouter>
  );
};

export default Routes;
