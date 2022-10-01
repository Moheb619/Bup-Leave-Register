import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import axios from "axios";
import { useForm } from "react-hook-form";
const AddUser = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <Helmet>
        <title>Add User | BUP Leave Register</title>
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
              <li className="dropdown nav-icon">
                <a href="#" data-bs-toggle="dropdown" className="nav-link  dropdown-toggle nav-link-lg nav-link-user">
                  <div className="d-lg-inline-block">
                    <i data-feather="bell"></i>
                    <span className="badge bg-info">2</span>
                  </div>
                </a>
                <div className="dropdown-menu dropdown-menu-end dropdown-menu-large">
                  <h6 className="py-2 px-4">Notifications</h6>
                  <ul className="list-group rounded-none">
                    <li className="list-group-item border-0 align-items-start">
                      <div className="row mb-2">
                        <div className="col-md-12 notif">
                          <a href="leave_details.html">
                            <h6 className="text-bold">John Doe</h6>
                            <p className="text-xs">applied for leave at 05-21-2021</p>
                          </a>
                        </div>
                        <div className="col-md-12 notif">
                          <a href="leave_details.html">
                            <h6 className="text-bold">Jane Doe</h6>
                            <p className="text-xs">applied for leave at 05-21-2021</p>
                          </a>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="dropdown">
                <a href="#" data-bs-toggle="dropdown" className="nav-link dropdown-toggle nav-link-lg nav-link-user">
                  <div className="avatar me-1">
                    <img src="/assets/images/admin.png" alt="" />
                  </div>
                  <div className="d-none d-md-block d-lg-inline-block">Hi, Admin</div>
                </a>
                <div className="dropdown-menu dropdown-menu-end">
                  <a className="dropdown-item" href="#">
                    <i data-feather="user"></i> Account
                  </a>
                  <a className="dropdown-item" href="#">
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
                <h3>Add User</h3>
              </div>
              <div className="col-12 col-md-6 order-md-2 order-first">
                <nav aria-label="breadcrumb" className="breadcrumb-header">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="/admin" className="text-success">
                        Dashboard
                      </Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Add User
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
                      <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="row">
                          <div className="col-md-12 col-12">
                            <div className="form-group has-icon-left">
                              <label htmlFor="first-name-icon">Full Name</label>
                              <div className="position-relative">
                                <input
                                  type="text"
                                  className="form-control addUserInput"
                                  placeholder="full name"
                                  id="first-name-icon"
                                  {...register("fullName", {
                                    required: true,
                                  })}
                                />
                                <div className="form-control-icon">
                                  <i className="fa fa-user"></i>
                                </div>
                              </div>
                            </div>
                            {errors.fullName && <p className="text-danger">Full Name Required</p>}
                          </div>
                          <div className="col-md-6 col-12">
                            <div className="form-group has-icon-left">
                              <label>Contact</label>
                              <div className="position-relative">
                                <input
                                  type="text"
                                  className="form-control addUserInput"
                                  placeholder="contact"
                                  id="first-name-icon"
                                  {...register("contact", {
                                    required: true,
                                    pattern: /^(?:\+88|88)?(01[3-9]\d{8})$/,
                                  })}
                                />
                                <div className="form-control-icon">
                                  <i className="fa fa-user"></i>
                                </div>
                              </div>
                            </div>
                            {errors.contact && <p className="text-danger">Please check the Contact</p>}
                          </div>
                          <div className="col-md-6 col-12">
                            <div className="form-group has-icon-left">
                              <label>Email</label>
                              <div className="position-relative">
                                <input
                                  type="text"
                                  className="form-control addUserInput"
                                  placeholder="email"
                                  id="first-name-icon"
                                  {...register("email", {
                                    required: true,
                                    pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                  })}
                                />
                                <div className="form-control-icon">
                                  <i className="fa fa-envelope"></i>
                                </div>
                              </div>
                            </div>
                            {errors.email && <p className="text-danger">Please check the Email</p>}
                          </div>
                          <div className="col-md-4 col-12">
                            <div className="form-group has-icon-left">
                              <label>Username</label>
                              <div className="position-relative">
                                <input
                                  type="text"
                                  className="form-control addUserInput"
                                  placeholder="username"
                                  id="first-name-icon"
                                  {...register("userName", {
                                    required: true,
                                  })}
                                />
                                <div className="form-control-icon">
                                  <i className="fa fa-user"></i>
                                </div>
                              </div>
                            </div>
                            {errors.userName && <p className="text-danger">Please check the User Name</p>}
                          </div>
                          <div className="col-md-4 col-12">
                            <div className="form-group has-icon-left">
                              <label>Password</label>
                              <div className="position-relative">
                                <input
                                  type="password"
                                  className="form-control addUserInput"
                                  placeholder="password"
                                  id="first-name-icon"
                                  {...register("password", {
                                    required: true,
                                    pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/,
                                  })}
                                />
                                <div className="form-control-icon">
                                  <i className="fa fa-key"></i>
                                </div>
                              </div>
                            </div>
                            {errors.password && <p className="text-danger">Please check the Password</p>}
                          </div>
                          <div className="col-md-4 col-12">
                            <div className="form-group has-icon-left">
                              <label>User Category</label>
                              <div className="position-relative">
                                <fieldset className="form-group">
                                  <select
                                    className="form-select"
                                    id="basicSelect"
                                    {...register("userCategory", {
                                      required: true,
                                    })}
                                  >
                                    <option>Admin</option>
                                    <option>Staff</option>
                                  </select>
                                </fieldset>
                              </div>
                            </div>
                          </div>
                          <div className="col-12 d-flex justify-content-end">
                            <button type="submit" className="btn btn-primary me-1 mb-1" onClick={handleSubmit}>
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

export default AddUser;
