import React from "react";
import { Link } from "react-router-dom";

const LeaveStatus = (props) => {
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
            <div class="row">
              <div class="col-12 col-md-6 order-md-1 order-last">
                <h3>Manage Leave Status</h3>
              </div>
              <div class="col-12 col-md-6 order-md-2 order-first">
                <nav aria-label="breadcrumb" class="breadcrumb-header">
                  <ol class="breadcrumb">
                    <li class="breadcrumb-item">
                      <a href="index.html" class="text-success">
                        Dashboard
                      </a>
                    </li>
                    <li class="breadcrumb-item active" aria-current="page">
                      Manage Leave Status
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
          <section class="section">
            <div class="card">
              <div class="card-body">
                <table class="table" id="table1">
                  <thead>
                    <tr>
                      <th>Leave Type</th>
                      <th>From</th>
                      <th>To</th>
                      <th>Posting Date</th>
                      <th>Remark</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Casual Leave</td>
                      <td>2021-11-02</td>
                      <td>2021-11-05</td>
                      <td>2021-11-01</td>
                      <td>waiting for approval</td>
                      <td>
                        <span class="badge bg-info">Pending</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default LeaveStatus;
