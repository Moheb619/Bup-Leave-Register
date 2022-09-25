import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const DashboardEmployee = (props) => {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0, scaleY: 0 },
    visible: {
      y: 0,
      opacity: 1,
      scaleY: 1,
      transition: {
        ease: "linear",
      },
    },
  };
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
              <li className="dropdown">
                <a href="#" data-bs-toggle="dropdown" className="nav-link dropdown-toggle nav-link-lg nav-link-user">
                  <div className="avatar me-1">
                    <img src="/assets/images/admin.png" alt="" />
                  </div>
                  <div className="d-none d-md-block d-lg-inline-block">Hi, Employee</div>
                </a>
                <div className="dropdown-menu dropdown-menu-end">
                  <Link to="/update_profile" className="dropdown-item">
                    <i data-feather="user"></i> Account
                  </Link>
                  <Link to="/update_password" className="dropdown-item">
                    <i data-feather="settings"></i> Change Password
                  </Link>
                  <div className="dropdown-divider"></div>
                  <Link className="dropdown-item" to="/">
                    <i data-feather="log-out"></i> Logout
                  </Link>
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
            <motion.div variants={container} initial="hidden" animate="visible" className="row mb-2">
              <motion.div variants={item} className="col-xl-4 col-md-12 mb-4">
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
              </motion.div>{" "}
              <motion.div variants={item} className="col-xl-4 col-md-12 mb-4">
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
              </motion.div>{" "}
              <motion.div variants={item} className="col-xl-4 col-md-12 mb-4">
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
              </motion.div>{" "}
              <motion.div variants={item} className="col-xl-4 col-md-12 mb-4">
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
              </motion.div>
            </motion.div>
          </section>
        </div>
      </div>
    </>
  );
};

export default DashboardEmployee;
