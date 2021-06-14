import React, { useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

export const AdminRoute = ({ component: Component, ...rest }) => {
  const token = useSelector(state => state.auth.token)
  const loggedIn =useSelector(state=>state.auth.loggedIn)
  const isAuthenticated=token && loggedIn
  console.log(token,loggedIn)
  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
};

