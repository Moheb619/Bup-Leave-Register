import React from "react";
import { Link } from "react-router-dom";

const DashboardEmployee = (props) => {
  return (
    <>
      <div id="main">
        <nav class="navbar navbar-header navbar-expand navbar-light">
          <div onClick={() => props.updateSidebarState()} className="sidebar-toggler" style={{ cursor: "pointer" }}>
            <span className="navbar-toggler-icon"></span>
          </div>
          <button
            class="btn navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav d-flex align-items-center navbar-light ms-auto">
              <li class="dropdown">
                <a href="#" data-bs-toggle="dropdown" class="nav-link dropdown-toggle nav-link-lg nav-link-user">
                  <div class="avatar me-1">
                    <img src="assets/images/admin.png" alt="" />
                  </div>
                  <div class="d-none d-md-block d-lg-inline-block">Hi, Employee</div>
                </a>
                <div class="dropdown-menu dropdown-menu-end">
                  <Link to="/update_profile" class="dropdown-item">
                    <i data-feather="user"></i> Account
                  </Link>
                  <Link to="/update_password" class="dropdown-item">
                    <i data-feather="settings"></i> Change Password
                  </Link>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="login.html">
                    <i data-feather="log-out"></i> Logout
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </nav>
        <div class="main-content container-fluid">
          <div class="page-title">
            <h3>Dashboard</h3>
          </div>
          <section class="section">
            <div class="row mb-2">
              <div class="col-xl-4 col-md-12 mb-4">
                <div class="card">
                  <div class="card-body">
                    <div class="d-flex justify-content-between p-md-1">
                      <div class="d-flex flex-row">
                        <div class="align-self-center">
                          <i class="fa fa-plane text-success fa-3x me-4"></i>
                        </div>
                        <div>
                          <h4>Leave</h4>
                          <h2 class="h1 mb-0">25</h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>{" "}
              <div class="col-xl-4 col-md-12 mb-4">
                <div class="card">
                  <div class="card-body">
                    <div class="d-flex justify-content-between p-md-1">
                      <div class="d-flex flex-row">
                        <div class="align-self-center">
                          <i class="fa fa-check text-info fa-3x me-4"></i>
                        </div>
                        <div>
                          <h4>Approved</h4>
                          <h2 class="h1 mb-0">34</h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>{" "}
              <div class="col-xl-4 col-md-12 mb-4">
                <div class="card">
                  <div class="card-body">
                    <div class="d-flex justify-content-between p-md-1">
                      <div class="d-flex flex-row">
                        <div class="align-self-center">
                          <i class="fa fa-info text-warning fa-3x me-4"></i>
                        </div>
                        <div>
                          <h4>Pending</h4>
                          <h2 class="h1 mb-0">12</h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>{" "}
              <div class="col-xl-4 col-md-12 mb-4">
                <div class="card">
                  <div class="card-body">
                    <div class="d-flex justify-content-between p-md-1">
                      <div class="d-flex flex-row">
                        <div class="align-self-center">
                          <i class="fa fa-trash text-danger fa-3x me-4"></i>
                        </div>
                        <div>
                          <h4>Canceled</h4>
                          <h2 class="h1 mb-0">15</h2>
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

export default DashboardEmployee;
