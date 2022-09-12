import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div id="auth">
      <div className="container">
        <div className="row">
          <div className="col-md-5 col-sm-12 mx-auto">
            <div className="card pt-4">
              <div className="card-body">
                <div className="text-center mb-5">
                  <h3>Sign In</h3>
                </div>
                <form action="employee.html">
                  <div className="form-group position-relative has-icon-left">
                    <label for="username">Username</label>
                    <div className="position-relative">
                      <input type="text" className="form-control" id="username" />
                      <div className="form-control-icon">
                        <i className="fa fa-user"></i>
                      </div>
                    </div>
                  </div>
                  <div className="form-group position-relative has-icon-left">
                    <div className="clearfix">
                      <label for="password">Password</label>
                      <a href="#" className="float-end">
                        <small>Forgot password?</small>
                      </a>
                    </div>
                    <div className="position-relative">
                      <input type="password" className="form-control" id="password" />
                      <div className="form-control-icon">
                        <i className="fa fa-key"></i>
                      </div>
                    </div>
                  </div>

                  <div className="form-check clearfix my-4">
                    <div className="checkbox float-start mx-2">
                      <Link to="/admin" className="float-end">
                        <small>admin</small>
                      </Link>
                    </div>
                    <div className="checkbox float-start mx-2">
                      <Link to="/employee" className="float-end">
                        <small>employee</small>
                      </Link>
                    </div>
                  </div>
                  <div className="clearfix">
                    <button className="btn btn-primary float-end">Login</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
