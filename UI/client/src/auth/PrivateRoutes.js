import React from "react";
import { Route, Redirect } from "react-router-dom";
import {useHistory} from 'react-router-dom'
import swal from "sweetalert2"
const PrivateRoute = ({ component: Component, ...rest }) => {
  let history = useHistory();
  const isAutheticated=()=>{
    let state= JSON.parse(localStorage.getItem("store"))
    if (state && state.user && state.user.token) {
        return true
    } else {
      return false
    }
  }
  const goBack=()=>{
    swal.fire("Please Login First")
    return history.goBack()
    
  }
  return (
    <Route {...rest} render={props =>
        isAutheticated() ? (
          <Component {...props} />
        ) : (
goBack()
        )
      }
    />
  );
};

export default PrivateRoute;
