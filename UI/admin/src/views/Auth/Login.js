import React, { useState, useEffect, Fragment } from "react";
import { Redirect, useHistory } from "react-router-dom";
import { login, isAutheticated } from "../../auth/index";
import { useSelector, useDispatch } from "react-redux";
import { authenticate } from "../../store/actions/auth";
import LoadingOverlay from "react-loading-overlay";

function Login() {
  let history = useHistory();
  const dispatch = useDispatch();
  const [values, setValues] = useState({
    email: "",
    password: "",
    error: "",
    loading: false,
    redirectNow: false,
  });
  const [isSignedIn, setIsSignedIn] = useState(false);
  useEffect(() => {
    setValues({ ...values, error: "", success: false });
  }, []);
  const { email, password, error, loading, redirectNow } = values;
  const { user } = isAutheticated();

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };
  const onSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false, loading: true });
    login({ email, password })
      .then((data) => {
        if (data.error) {
          setValues({ ...values, error: data.error, loading: false });
        } else {
          try {
            dispatch(authenticate(data));
            setValues({ ...values, error: false, loading: false });
            history.push("/");
          } catch (error) {
            setValues({
              ...values,
              error: "Invalid Credentials",
              loading: false,
            });
          }
        }
      })
      .catch((err) => {
        setValues({ ...values, error: "Invalid Credentials", loading: false });
        console.log("Login request failed", err);
      });
  };
  return (
    <div>
      <LoadingOverlay
        active={loading}
        spinner
        text="please wait for a while ..."
      >
        {isAutheticated() && <Redirect to="/"></Redirect>}

        {!isAutheticated() && (
          <div id="layoutAuthentication">
            <div id="layoutAuthentication_content">
              <main>
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-lg-5">
                      <div className="card shadow-lg border-0 rounded-lg mt-5">
                        <div className="card-header card-sign-header">
                          <h3 className="text-center font-weight-light my-4">
                            Subidhaonline{" "}
                          </h3>
                          <hr></hr>
                          <h4 className="text-center font-weight-light my-4">
                            Admin Login
                          </h4>
                        </div>
                        <div className="card-body">
                          <form>
                            <small className="text-danger">{error}</small>
                            <div className="form-group">
                              <label className="form-label">Email*</label>
                              <input
                                className="form-control py-3"
                                id="inputEmailAddress"
                                type="email"
                                onChange={handleChange("email")}
                                value={email}
                                placeholder="Enter email address"
                              />
                            </div>
                            <div className="form-group">
                              <label className="form-label">Password*</label>
                              <input
                                className="form-control py-3"
                                id="inputPassword"
                                type="password"
                                onChange={handleChange("password")}
                                value={password}
                                placeholder="Enter password"
                              />
                            </div>
                            {/* <div className="form-group">
                                                <div className="custom-control custom-checkbox">
													<input className="custom-control-input" id="rememberPasswordCheck" type="checkbox" />
													<label className="custom-control-label" >Remember password</label>
												</div>
                                            </div> */}
                            <div className="form-group d-flex align-items-center justify-content-between mt-4 mb-0">
                              <a
                                className="btn btn-sign hover-btn"
                                onClick={(e) => onSubmit(e)}
                              >
                                Login
                              </a>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </main>
            </div>
          </div>
        )}
        {redirectNow && <Redirect to="/" />}
      </LoadingOverlay>
    </div>
  );
}

export default Login;
