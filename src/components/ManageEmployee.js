import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import TopNav from "./TopNav";

const ManageEmployee = (props) => {
  const { data, loading, error } = useFetch(`http://localhost:8000/api/all_user`);
  const users = data.user;
  return (
    <>
      <Helmet>
        <title>Manage Employee | BUP Leave Register</title>
      </Helmet>
      <div id="main">
        <TopNav updateSidebarState={props.updateSidebarState}></TopNav>

        <div className="main-content container-fluid">
          <div className="page-title">
            <div className="row">
              <div className="col-12 col-md-6 order-md-1 order-last">
                <h3>Manage Employee</h3>
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
                      Manage Employee
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
                      <th>ID</th>
                      <th>Full Name</th>
                      <th>Gender</th>
                      <th>Age</th>
                      <th>Email</th>
                      <th>Contact</th>
                      <th>Profile</th>
                      <th>Department</th>
                      <th>Designation</th>
                      <th>User Name</th>
                      <th>Status</th>
                      <th>Reg Date</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users &&
                      users.map((us) => (
                        <tr key={us.id_number}>
                          <td>{us.id_number}</td>
                          <td>{us.first_name + " " + us.last_name}</td>
                          <td>{us.gender}</td>
                          <td>{us.age}</td>
                          <td>{us.email}</td>
                          <td>{us.contact}</td>
                          <td>{us.profile}</td>
                          <td>{us.department}</td>
                          <td>{us.designation}</td>
                          <td>{us.user_name}</td>
                          <td>
                            <span className="badge bg-success">Active</span>
                          </td>
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
                      ))}
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

export default ManageEmployee;
