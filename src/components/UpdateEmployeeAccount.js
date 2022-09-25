import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const UpdateEmployeeAccount = (props) => {
  return (
    <>
      <Helmet>
        <title>Update Employee Account | BUP Leave Register</title>
      </Helmet>
      <div id="main">
        <nav className="navbar navbar-header navbar-expand navbar-light">
          <div onClick={() => props.updateSidebarState()} className="sidebar-toggler" style={{ cursor: "pointer" }}>
            <span className="navbar-toggler-icon"></span>
          </div>
          <button
            className="btn navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav d-flex align-items-center navbar-light ms-auto">
              <li className="dropdown">
                <a href="#" data-bs-toggle="dropdown" className="nav-link dropdown-toggle nav-link-lg nav-link-user">
                  <div className="avatar me-1">
                    <img src="/assets/images/admin.png" alt="" />
                  </div>
                  <div className="d-none d-md-block d-lg-inline-block">Hi, Employee</div>
                </a>
                <div className="dropdown-menu dropdown-menu-end">
                  <a className="dropdown-item" href="update.html">
                    <i data-feather="user"></i> Account
                  </a>
                  <a className="dropdown-item" href="update_password.html">
                    <i data-feather="settings"></i> Settings
                  </a>
                  <div className="dropdown-divider"></div>
                  <Link to="/" className="dropdown-item">
                    <i data-feather="log-out"></i> Logout
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </nav>

        <div className="main-content container-fluid">
          <div className="page-title">
            <div className="row">
              <div className="col-12 col-md-6 order-md-1 order-last">
                <h3>Update Profile</h3>
              </div>
              <div className="col-12 col-md-6 order-md-2 order-first">
                <nav aria-label="breadcrumb" className="breadcrumb-header">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="/employee" className="text-success">
                        Dashboard
                      </Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Update Profile
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>

          {/* <!-- // Basic multiple Column Form section start --> */}
          <section id="multiple-column-form">
            <div className="row match-height">
              <div className="col-12">
                <div className="card">
                  <div className="card-content">
                    <div className="card-body">
                      <form className="form">
                        <div className="row">
                          <div className="col-md-6 col-12">
                            <div className="form-group has-icon-left">
                              <label for="first-name-icon">ID Number</label>
                              <div className="position-relative">
                                <input type="text" className="form-control" placeholder="id number" id="first-name-icon" value="123456" />
                                <div className="form-control-icon">
                                  <i className="fa fa-hash"></i>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6 col-12">
                            <div className="form-group has-icon-left">
                              <label for="first-name-icon">Gender</label>
                              <div className="position-relative">
                                <fieldset className="form-group">
                                  <select className="form-select" id="basicSelect">
                                    <option>Male</option>
                                    <option>Female</option>
                                  </select>
                                </fieldset>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-12">
                            <div className="form-group has-icon-left">
                              <label for="first-name-icon">First Name</label>
                              <div className="position-relative">
                                <input type="text" className="form-control" placeholder="first name" id="first-name-icon" value="John" />
                                <div className="form-control-icon">
                                  <i className="fa fa-user"></i>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-12">
                            <div className="form-group has-icon-left">
                              <label for="first-name-icon">Middle Name</label>
                              <div className="position-relative">
                                <input type="text" className="form-control" placeholder="middle name" id="first-name-icon" value="M." />
                                <div className="form-control-icon">
                                  <i className="fa fa-user"></i>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-12">
                            <div className="form-group has-icon-left">
                              <label for="first-name-icon">Last Name</label>
                              <div className="position-relative">
                                <input type="text" className="form-control" placeholder="last name" id="first-name-icon" value="Doe" />
                                <div className="form-control-icon">
                                  <i className="fa fa-user"></i>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-3 col-12">
                            <div className="form-group has-icon-left">
                              <label for="first-name-icon">Age</label>
                              <div className="position-relative">
                                <input type="text" className="form-control" placeholder="age" id="first-name-icon" value="24" />
                                <div className="form-control-icon">
                                  <i className="fa fa-user"></i>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-3 col-12">
                            <div className="form-group has-icon-left">
                              <label for="first-name-icon">Email</label>
                              <div className="position-relative">
                                <input type="text" className="form-control" placeholder="email" id="first-name-icon" value="john@gmail.com" />
                                <div className="form-control-icon">
                                  <i className="fa fa-envelope"></i>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-3 col-12">
                            <div className="form-group has-icon-left">
                              <label for="first-name-icon">Contact</label>
                              <div className="position-relative">
                                <input type="text" className="form-control" placeholder="contact" id="first-name-icon" value="091234567898" />
                                <div className="form-control-icon">
                                  <i className="fa fa-phone"></i>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-3 col-12">
                            <div className="form-group has-icon-left">
                              <label for="first-name-icon">Profile</label>
                              <div className="position-relative">
                                <input type="file" className="form-control" placeholder="" id="first-name-icon" />
                                <div className="form-control-icon">
                                  <i className="fa fa-user"></i>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6 col-12">
                            <div className="form-group">
                              <label for="country-floating">Deapartment</label>
                              <fieldset className="form-group">
                                <select className="form-select" id="basicSelect">
                                  <option>IT</option>
                                  <option>ENGINEERING</option>
                                  <option>HR</option>
                                  <option>FINANCE</option>
                                </select>
                              </fieldset>
                            </div>
                          </div>
                          <div className="col-md-6 col-12">
                            <div className="form-group">
                              <label for="company-column">Designation</label>
                              <fieldset className="form-group">
                                <select className="form-select" id="basicSelect">
                                  <option>IT</option>
                                  <option>MANAGER</option>
                                  <option>SUPERVISOR</option>
                                  <option>ENGINEER</option>
                                </select>
                              </fieldset>
                            </div>
                          </div>
                          <div className="col-md-6 col-12">
                            <div className="form-group has-icon-left">
                              <label for="first-name-icon">Username</label>
                              <div className="position-relative">
                                <input type="text" className="form-control" placeholder="username" id="first-name-icon" />
                                <div className="form-control-icon">
                                  <i className="fa fa-user"></i>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6 col-12">
                            <div className="form-group has-icon-left">
                              <label for="first-name-icon">Password</label>
                              <div className="position-relative">
                                <input type="password" className="form-control" placeholder="passsword" id="first-name-icon" />
                                <div className="form-control-icon">
                                  <i className="fa fa-key"></i>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-12 d-flex justify-content-end">
                            <button type="submit" className="btn btn-primary me-1 mb-1">
                              Submit
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* <!-- // Basic multiple Column Form section end --> */}
        </div>
      </div>
    </>
  );
};

export default UpdateEmployeeAccount;
