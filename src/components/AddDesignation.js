import React from "react";

const AddDesignation = (props) => {
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
              <li class="dropdown nav-icon">
                <a href="#" data-bs-toggle="dropdown" class="nav-link  dropdown-toggle nav-link-lg nav-link-user">
                  <div class="d-lg-inline-block">
                    <i data-feather="bell"></i>
                    <span class="badge bg-info">2</span>
                  </div>
                </a>
                <div class="dropdown-menu dropdown-menu-end dropdown-menu-large">
                  <h6 class="py-2 px-4">Notifications</h6>
                  <ul class="list-group rounded-none">
                    <li class="list-group-item border-0 align-items-start">
                      <div class="row mb-2">
                        <div class="col-md-12 notif">
                          <a href="leave_details.html">
                            <h6 class="text-bold">John Doe</h6>
                            <p class="text-xs">applied for leave at 05-21-2021</p>
                          </a>
                        </div>
                        <div class="col-md-12 notif">
                          <a href="leave_details.html">
                            <h6 class="text-bold">Jane Doe</h6>
                            <p class="text-xs">applied for leave at 05-21-2021</p>
                          </a>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </li>
              <li class="dropdown">
                <a href="#" data-bs-toggle="dropdown" class="nav-link dropdown-toggle nav-link-lg nav-link-user">
                  <div class="avatar me-1">
                    <img src="assets/images/admin.png" alt="" />
                  </div>
                  <div class="d-none d-md-block d-lg-inline-block">Hi, Admin</div>
                </a>
                <div class="dropdown-menu dropdown-menu-end">
                  <a class="dropdown-item" href="#">
                    <i data-feather="user"></i> Account
                  </a>
                  <a class="dropdown-item" href="#">
                    <i data-feather="settings"></i> Settings
                  </a>
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
                <h3>Add Designation</h3>
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
                      Add Designation
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>

          {/* <!-- Basic Vertical form layout section start --> */}
          <section id="basic-vertical-layouts">
            <div class="row match-height">
              <div class="col-md-8 col-12">
                <div class="card">
                  <div class="card-content">
                    <div class="card-body">
                      <form class="form form-vertical">
                        <div class="form-body">
                          <div class="row">
                            <div class="col-12">
                              <div class="form-group has-icon-left">
                                <label for="first-name-icon">Designation Name</label>
                                <div class="position-relative">
                                  <input type="text" class="form-control" placeholder="Input Designation" id="first-name-icon" />
                                  <div class="form-control-icon">
                                    <i class="fa fa-table"></i>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="col-12">
                              <div class="form-group has-icon-left">
                                <label for="email-id-icon">Description</label>
                                <div class="position-relative">
                                  <input type="text" class="form-control" placeholder="Input Description" id="email-id-icon" />
                                  <div class="form-control-icon">
                                    <i class="fa fa-table"></i>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div class="col-12 d-flex justify-content-end">
                              <button type="submit" class="btn btn-primary me-1 mb-1">
                                Submit
                              </button>
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

export default AddDesignation;
