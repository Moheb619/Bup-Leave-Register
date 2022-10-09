import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import TopNav from "./TopNav";

const LeaveStatus = (props) => {
  return (
    <>
      <Helmet>
        <title>Leave Status | BUP Leave Register</title>
      </Helmet>
      <div id="main">
        <TopNav updateSidebarState={props.updateSidebarState}></TopNav>

        <div className="main-content container-fluid">
          <div className="page-title">
            <div className="row">
              <div className="col-12 col-md-6 order-md-1 order-last">
                <h3>Leave Status</h3>
              </div>
              <div className="col-12 col-md-6 order-md-2 order-first">
                <nav aria-label="breadcrumb" className="breadcrumb-header">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="/employee" className="text-success">
                        Dashboard
                      </Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Leave Status
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
                        <span className="badge bg-info">Pending</span>
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
