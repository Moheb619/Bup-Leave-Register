import React from "react";
import { Helmet } from "react-helmet";

const Report = (props) => {
  return (
    <>
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
            <div className="row">
              <div className="col-12 col-md-6 order-md-1 order-last">
                <h3>Reports</h3>
              </div>
              <div className="col-12 col-md-6 order-md-2 order-first">
                <nav aria-label="breadcrumb" className="breadcrumb-header">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="index.html" className="text-success">
                        Dashboard
                      </a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Reports
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>

          {/* <!-- Basic Vertical form layout section start --> */}
          <section id="basic-vertical-layouts">
            <div className="row match-height">
              <div className="col-md-12 col-12">
                <div className="card">
                  <div className="card-content">
                    <div className="card-body">
                      <form className="form form-vertical">
                        <div className="form-body">
                          <div className="row">
                            <div className="col-12">
                              <div className="card-body">
                                <div className="chart chart-lg">
                                  <canvas id="chartjs-pie"></canvas>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* <!-- // Basic Vertical form layout section end --> */}
        </div>
      </div>
    </>
  );
};

export default Report;
