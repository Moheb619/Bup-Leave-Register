import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import TopNav from "./TopNav";

const ManageDepartment = (props) => {
  const [departments, setDepartments] = useState("");
  const [editable, setEditable] = useState(false);
  useEffect(() => {
    axios.get(`http://localhost:8000/api/getDepartments`).then((res) => {
      setDepartments(res.data.departments);
    });
  }, []);

  const deleteDepartment = (id) => {
    axios.delete(`http://localhost:8000/api/deleteDepartment/${id}`).then((res) => alert("Message"));
  };
  const makeEditable = (id) => {
    const editable = document.getElementById(`departmentEditable${id}`);
    const noteditable = document.getElementById(`departmentNotEditable${id}`);

    noteditable.classList = "d-none";
    editable.classList = "";
  };
  const makeNotEditable = (id) => {
    const editable = document.getElementById(`departmentEditable${id}`);
    const noteditable = document.getElementById(`departmentNotEditable${id}`);

    editable.classList = "d-none";
    noteditable.classList = "";

    updateDepartment(id);
  };

  const updateDepartment = (id) => {
    const department_name = document.getElementById(`departmentEditableNames${id}`);
    const department_short_details = document.getElementById(`departmentEditableDetails${id}`);
    const employeeData = new FormData();
    employeeData.append("department_name", department_name);
    employeeData.append("department_short_details", department_short_details);

    axios
      .post(`http://localhost:8000/api/updateDepartment/${id}`, employeeData, { headers: { "Content-Type": "application/json" } })
      .then((response) => {
        alert(JSON.stringify(response.data.Message));
      })
      .catch(function (error) {
        console.log(error);
      });
  };
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
                      <th>Department Short Details</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {departments &&
                      departments.map((d) => (
                        <>
                          <tr key={d.id} id={`departmentEditable${d.id}`} className="d-none">
                            <td>
                              <input id={`departmentEditableName${d.id}`} type="text" defaultValue={d.department_name} />
                            </td>
                            <td>
                              <input id={`departmentEditableDetails${d.id}`} type="text" defaultValue={d.department_short_details} />
                            </td>
                            <td>
                              <span
                                onClick={() => {
                                  makeNotEditable(d.id);
                                }}
                              >
                                <span style={{ cursor: "pointer", color: "green", fontWeight: "bolder" }}>OK</span>
                              </span>
                            </td>
                          </tr>
                          <tr key={d.id} id={`departmentNotEditable${d.id}`} className="">
                            <td>{d.department_name}</td>
                            <td>{d.department_short_details}</td>
                            <td>
                              <span style={{ cursor: "pointer" }} onClick={() => makeEditable(d.id)}>
                                <i className="fa fa-pen text-success"></i>
                              </span>{" "}
                              <span
                                style={{ cursor: "pointer" }}
                                onClick={() => {
                                  deleteDepartment(d.id);
                                }}
                              >
                                <i className="fa fa-trash text-danger"></i>
                              </span>
                            </td>
                          </tr>
                        </>
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

export default ManageDepartment;
