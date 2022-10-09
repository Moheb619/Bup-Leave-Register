import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import TopNav from "./TopNav";

const NotApproveLeave = (props) => {
  return (
    <>
      <Helmet>
        <title>Not Approve Leave | BUP Leave Register</title>
      </Helmet>
      <div id="main">
        <TopNav updateSidebarState={props.updateSidebarState}></TopNav>

        <div className="main-content container-fluid">
          <div className="page-title">
            <div className="row">
              <div className="col-12 col-md-6 order-md-1 order-last">
                <h3>Not Approved</h3>
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
                      Not Approved
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
                      <th>Full Name</th>
                      <th>Leave Type</th>
                      <th>Posting Date</th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>John Doe</td>
                      <td>Sick Leave</td>
                      <td>2021-11-01</td>
                      <td>
                        <span className="badge bg-danger">Not Approved</span>
                      </td>
                      <td>
                        <a href="editDesignation.php">
                          <i className="fa fa-eye text-success"></i>
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>Juan Dela Cruz</td>
                      <td>Sick Leave</td>
                      <td>2021-11-01</td>
                      <td>
                        <span className="badge bg-danger">Not Approved</span>
                      </td>
                      <td>
                        <a href="editDesignation.php">
                          <i className="fa fa-eye text-success"></i>
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>Cardo Dalisay</td>
                      <td>Medical Leave</td>
                      <td>2021-11-01</td>
                      <td>
                        <span className="badge bg-danger">Not Approved</span>
                      </td>
                      <td>
                        <a href="editDesignation.php">
                          <i className="fa fa-eye text-success"></i>
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>John Doe</td>
                      <td>Sick Leave</td>
                      <td>2021-11-01</td>
                      <td>
                        <span className="badge bg-danger">Not Approved</span>
                      </td>
                      <td>
                        <a href="editDesignation.php">
                          <i className="fa fa-eye text-success"></i>
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

export default NotApproveLeave;
