import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import TopNav from "./TopNav";

const AddLeaveType = (props) => {
  return (
    <>
      <Helmet>
        <title>Add Leave Type | BUP Leave Register</title>
      </Helmet>
      <div id="main">
        <TopNav updateSidebarState={props.updateSidebarState}></TopNav>

        <div className="main-content container-fluid">
          <div className="page-title">
            <div className="row">
              <div className="col-12 col-md-6 order-md-1 order-last">
                <h3>Add Leave Type</h3>
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
                      Add Leave Type
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>

          {/* <!-- Basic Vertical form layout section start --> */}
          <section id="basic-vertical-layouts">
            <div className="row match-height">
              <div className="col-md-8 col-12">
                <div className="card">
                  <div className="card-content">
                    <div className="card-body">
                      <form className="form form-vertical">
                        <div className="form-body">
                          <div className="row">
                            <div className="col-12">
                              <div className="form-group has-icon-left">
                                <label htmlFor="first-name-icon">Leave Name</label>
                                <div className="position-relative">
                                  <input type="text" className="form-control" placeholder="Input leave type" id="first-name-icon" />
                                  <div className="form-control-icon">
                                    <i className="fa fa-table"></i>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-12">
                              <div className="form-group has-icon-left">
                                <label htmlFor="email-id-icon">Description</label>
                                <div className="position-relative">
                                  <input type="text" className="form-control" placeholder="Input Description" id="email-id-icon" />
                                  <div className="form-control-icon">
                                    <i className="fa fa-table"></i>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-12">
                              <div className="form-group has-icon-left">
                                <label htmlFor="email-id-icon">Number of days Allowed</label>
                                <div className="position-relative">
                                  <input type="text" className="form-control" placeholder="Input days allowed" id="email-id-icon" />
                                  <div className="form-control-icon">
                                    <i className="fa fa-table"></i>
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

export default AddLeaveType;
