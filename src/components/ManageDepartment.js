import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import TopNav from "./TopNav";

const ManageDepartment = (props) => {
  return (
    <>
      <Helmet>
        <title>Manage Department | BUP Leave Register</title>
      </Helmet>
      <div id="main">
        <TopNav updateSidebarState={props.updateSidebarState}></TopNav>

        <div className="main-content container-fluid">
          <div className="page-title">
            <div className="row">
              <div className="col-12 col-md-6 order-md-1 order-last">
                <h3>Manage Department</h3>
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
                      Manage Department
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
                      <th>Department Name</th>
                      <th>Department Short Name</th>
                      <th>Creation Date</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Human Resource</td>
                      <td>HR</td>
                      <td>2021-11-01</td>
                      <td>
                        <a href="editdepartment.php">
                          <i className="fa fa-pen text-success"></i>
                        </a>{" "}
                        <a href="editdepartment.php">
                          <i className="fa fa-trash text-danger"></i>
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>Information technology</td>
                      <td>IT</td>
                      <td>2021-11-01</td>
                      <td>
                        <a href="editdepartment.php">
                          <i className="fa fa-pen text-success"></i>
                        </a>{" "}
                        <a href="editdepartment.php">
                          <i className="fa fa-trash text-danger"></i>
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>Engineering</td>
                      <td>ENG'G</td>
                      <td>2017-11-01</td>
                      <td>
                        <a href="editdepartment.php">
                          <i className="fa fa-pen text-success"></i>
                        </a>{" "}
                        <a href="editdepartment.php">
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

export default ManageDepartment;
