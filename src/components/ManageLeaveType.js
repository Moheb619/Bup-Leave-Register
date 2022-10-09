import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import TopNav from "./TopNav";

const ManageLeaveType = (props) => {
  return (
    <>
      <Helmet>
        <title>Manage Leave Type | BUP Leave Register</title>
      </Helmet>
      <div id="main">
        <TopNav updateSidebarState={props.updateSidebarState}></TopNav>

        <div className="main-content container-fluid">
          <div className="page-title">
            <div className="row">
              <div className="col-12 col-md-6 order-md-1 order-last">
                <h3>Manage Leave Type</h3>
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
                      Manage Leave Type
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
          <section className="section">
            <div className="card">
              <div className="card-body">
                <table className="table" id="table1">
                  <thead>
                    <tr>
                      <th>Leave Name</th>
                      <th>Description</th>
                      <th>Days Allowed</th>
                      <th>Creation Date</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Casual Leave</td>
                      <td>Casual Leave</td>
                      <td>3</td>
                      <td>2021-11-01</td>
                      <td>
                        <a href="editDesignation.php">
                          <i className="fa fa-pen text-success"></i>
                        </a>{" "}
                        <a href="editDesignation.php">
                          <i className="fa fa-trash text-danger"></i>
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>Restricted Leave</td>
                      <td>Restricted Leave</td>
                      <td>5</td>
                      <td>2021-11-01</td>
                      <td>
                        <a href="editDesignation.php">
                          <i className="fa fa-pen text-success"></i>
                        </a>{" "}
                        <a href="editDesignation.php">
                          <i className="fa fa-trash text-danger"></i>
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>Sick Leave</td>
                      <td>Sick Leave</td>
                      <td>2</td>
                      <td>2021-11-01</td>
                      <td>
                        <a href="editDesignation.php">
                          <i className="fa fa-pen text-success"></i>
                        </a>{" "}
                        <a href="editDesignation.php">
                          <i className="fa fa-trash text-danger"></i>
                        </a>
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

export default ManageLeaveType;
