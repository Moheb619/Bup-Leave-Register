import React from "react";
import { Helmet } from "react-helmet";

const DashboardAdmin = (props) => {
  return (
    <>
      <Helmet>
        <title>Dashboard | BUP Leave Register</title>
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
                    <img src="assets/images/admin.png" alt="" />
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
                  <a className="dropdown-item" href="login.html">
                    <i data-feather="log-out"></i> Logout
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </nav>
        <div className="main-content container-fluid">
          <div className="page-title">
            <h3>Dashboard</h3>
          </div>
          <section className="section">
            <div className="row mb-2">
              <div className="col-xl-4 col-md-12 mb-4">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex justify-content-between p-md-1">
                      <div className="d-flex flex-row">
                        <div className="align-self-center">
                          <i className="fa fa-users text-warning fa-3x me-4"></i>
                        </div>
                        <div>
                          <h4>Employees</h4>
                          <h2 className="h1 mb-0">55</h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-md-12 mb-4">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex justify-content-between p-md-1">
                      <div className="d-flex flex-row">
                        <div className="align-self-center">
                          <i className="fa fa-plane text-success fa-3x me-4"></i>
                        </div>
                        <div>
                          <h4>Leave</h4>
                          <h2 className="h1 mb-0">25</h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>{" "}
              <div className="col-xl-4 col-md-12 mb-4">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex justify-content-between p-md-1">
                      <div className="d-flex flex-row">
                        <div className="align-self-center">
                          <i className="fa fa-check text-info fa-3x me-4"></i>
                        </div>
                        <div>
                          <h4>Approved</h4>
                          <h2 className="h1 mb-0">34</h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>{" "}
              <div className="col-xl-4 col-md-12 mb-4">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex justify-content-between p-md-1">
                      <div className="d-flex flex-row">
                        <div className="align-self-center">
                          <i className="fa fa-info text-warning fa-3x me-4"></i>
                        </div>
                        <div>
                          <h4>Pending</h4>
                          <h2 className="h1 mb-0">12</h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>{" "}
              <div className="col-xl-4 col-md-12 mb-4">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex justify-content-between p-md-1">
                      <div className="d-flex flex-row">
                        <div className="align-self-center">
                          <i className="fa fa-trash text-danger fa-3x me-4"></i>
                        </div>
                        <div>
                          <h4>Canceled</h4>
                          <h2 className="h1 mb-0">15</h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default DashboardAdmin;
