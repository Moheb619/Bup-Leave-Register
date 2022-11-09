import axios from "axios";
import React from "react";
import { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import TopNav from "./TopNav";
const AddDepartment = (props) => {
  const [departmentName, setDepartmentName] = useState("");
  const [departmentShortDetails, setDepartmentShortDetails] = useState("");
  const [message, setMessage] = useState("");
  const [messageColor, setMessageColor] = useState("");
  const addDepartment = (e) => {
    e.preventDefault();
    const departmentData = new FormData();
    departmentData.append("department_name", departmentName);
    departmentData.append("department_short_details", departmentShortDetails);
    axios
      .post(`http://localhost:8000/api/addDepartment`, departmentData, { headers: { "Content-Type": "application/json" } })
      .then((response) => {
        if (response.data.Message.department_name) {
          setMessage(response.data.Message.department_name);
          setMessageColor(response.data.MessageColor);
          setTimeout(function () {
            setMessage("");
            setMessageColor("");
          }, 2000);
        } else {
          setMessage(response.data.Message);
          const elements = document.getElementsByClassName("form-control");
          for (let i = 0; i < elements.length; i++) {
            elements[i].value = "";
          }
          setMessageColor(response.data.MessageColor);
          setTimeout(function () {
            setMessage("");
            setMessageColor("");
          }, 2000);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <>
      <Helmet>
        <title>Add Department | BUP Leave Register</title>
      </Helmet>
      <div id="main">
        <TopNav updateSidebarState={props.updateSidebarState}></TopNav>
        <div className="main-content container-fluid">
          <div className="page-title">
            <div className="row">
              <div className="col-12 col-md-6 order-md-1 order-last">
                <h3>Add Department</h3>
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
                      Add Department
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
                                <label htmlFor="first-name-icon">Department Name</label>
                                <div className="position-relative">
                                  <input onChange={(e) => setDepartmentName(e.target.value)} type="text" className="form-control" placeholder="Input Faculty" id="first-name-icon" />
                                  <div className="form-control-icon">
                                    <i className="fa fa-table"></i>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-12">
                              <div className="form-group has-icon-left">
                                <label htmlFor="first-name-icon">Department Short Details</label>
                                <div className="position-relative">
                                  <input onChange={(e) => setDepartmentShortDetails(e.target.value)} type="text" className="form-control" placeholder="Input Department" id="first-name-icon" />
                                  <div className="form-control-icon">
                                    <i className="fa fa-table"></i>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="col-6 d-flex justify-content-start">
                              <p id="addDepartmentSuccessMessage" className={messageColor}>
                                {message}
                              </p>
                            </div>
                            <div className="col-6 d-flex justify-content-end">
                              <button onClick={addDepartment} className="btn btn-primary me-1 mb-1">
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

export default AddDepartment;
