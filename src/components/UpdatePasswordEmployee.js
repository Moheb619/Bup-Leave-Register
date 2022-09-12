import React from "react";

const UpdatePasswordEmployee = (props) => {
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
                  <a class="dropdown-item" href="update.html">
                    <i data-feather="user"></i> Account
                  </a>
                  <a class="dropdown-item" href="update_password.html">
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
                <h3>Update Password</h3>
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
                      Update Password
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>

          {/* <!-- // Basic multiple Column Form section start --> */}
          <section id="multiple-column-form">
            <div class="row match-height">
              <div class="col-8">
                <div class="card">
                  <div class="card-content">
                    <div class="card-body">
                      <form class="form">
                        <div class="row">
                          <div class="col-md-12 col-12">
                            <div class="form-group has-icon-left">
                              <label for="first-name-icon">Old Password</label>
                              <div class="position-relative">
                                <input type="password" class="form-control" placeholder="old password" id="first-name-icon" />
                                <div class="form-control-icon">
                                  <i class="fa fa-key"></i>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="col-md-12 col-12">
                            <div class="form-group has-icon-left">
                              <label for="first-name-icon">New Password</label>
                              <div class="position-relative">
                                <input type="password" class="form-control" placeholder="new password" id="first-name-icon" />
                                <div class="form-control-icon">
                                  <i class="fa fa-key"></i>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="col-md-12 col-12">
                            <div class="form-group has-icon-left">
                              <label for="first-name-icon">Confirm Password</label>
                              <div class="position-relative">
                                <input type="password" class="form-control" placeholder="confirm passsword" id="first-name-icon" />
                                <div class="form-control-icon">
                                  <i class="fa fa-key"></i>
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

export default UpdatePasswordEmployee;
