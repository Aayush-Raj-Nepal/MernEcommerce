import React from "react";
import ReactDOM from "react-dom";
import Routes from "./Route";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { store, persistor } from "./store";
import interceptorConfig from "./api/interceptors";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// some styles
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/css/styles.css";
import "./styles/css/admin-style.css";
import "./styles/vendor/bootstrap/css/bootstrap.min.css";
import "./styles/vendor/fontawesome-free/css/all.min.css";
interceptorConfig();

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ToastContainer newestOnTop={true} />
      <Routes />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
