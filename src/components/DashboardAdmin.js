import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import FeatherIcon from "feather-icons-react";
import TopNav from "./TopNav";
const DashboardAdmin = (props) => {
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  return (
    <>
      <Helmet>
        <title>Dashboard | BUP Leave Register</title>
      </Helmet>
      <div id="main">
        <TopNav updateSidebarState={props.updateSidebarState}></TopNav>
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
              </motion.div>
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
              </motion.div>
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
              </motion.div>
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
              </motion.div>
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

export default DashboardAdmin;
