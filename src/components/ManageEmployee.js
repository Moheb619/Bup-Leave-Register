import { faCheck, faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import TopNav from "./TopNav";

const ManageEmployee = (props) => {
  const [departments, setDepartments] = useState("");
  const [designations, setDesignations] = useState("");
  const [users, setUsers] = useState("");
  const [editable, setEditable] = useState(false);
  useEffect(() => {
    axios.get(`http://localhost:8000/api/getUsers`).then((res) => {
      setUsers(res.data.users);
    });
    axios.get(`http://localhost:8000/api/getDepartments`).then((res) => {
      setDepartments(res.data.departments);
    });
    axios.get(`http://localhost:8000/api/getDesignations`).then((res) => {
      setDesignations(res.data.designations);
    });
  }, []);

  const deleteUser = (id) => {
    const notEditable = document.getElementById(`userNotEditable${id}`);
    notEditable.classList = "d-none";

    axios.delete(`http://localhost:8000/api/deleteUser/${id}`).then((res) => {});
  };
  const makeEditable = (id) => {
    const editable = document.getElementById(`userEditable${id}`);
    const noteditable = document.getElementById(`userNotEditable${id}`);

    noteditable.classList = "d-none";
    editable.classList = "";
  };
  const makeNotEditable = (id) => {
    const editable = document.getElementById(`userEditable${id}`);
    const noteditable = document.getElementById(`userNotEditable${id}`);

    editable.classList = "d-none";
    noteditable.classList = "";

    updateUser(id);
  };

  const updateUser = (id) => {
    const id_number = document.getElementById(`userEditableId${id}`).value;
    const gender = document.getElementById(`userEditableGender${id}`).value;
    const first_name = document.getElementById(`userEditableFirstName${id}`).value;
    const last_name = document.getElementById(`userEditableLastName${id}`).value;
    const age = document.getElementById(`userEditableAge${id}`).value;
    const email = document.getElementById(`userEditableEmail${id}`).value;
    const contact = document.getElementById(`userEditableContact${id}`).value;
    const profile = document.getElementById(`userEditableProfile${id}`).value;
    const department = document.getElementById(`userEditableDepartment${id}`).value;
    const designation = document.getElementById(`userEditableDesignation${id}`).value;
    const user_name = document.getElementById(`userEditableUserName${id}`).value;
    const userData = new FormData();
    userData.append("id", id_number);
    userData.append("gender", gender);
    userData.append("first_name", first_name);
    userData.append("last_name", last_name);
    userData.append("age", age);
    userData.append("email", email);
    userData.append("contact", contact);
    userData.append("profile", profile);
    userData.append("department_id", department);
    userData.append("designation_id", designation);
    userData.append("user_name", user_name);
    document.getElementById(`userNotEditableId${id}`).innerText = id_number;
    document.getElementById(`userNotEditableGender${id}`).innerText = gender;
    document.getElementById(`userNotEditableFirstName${id}`).innerText = first_name;
    document.getElementById(`userNotEditableLastName${id}`).innerText = last_name;
    document.getElementById(`userNotEditableAge${id}`).innerText = age;
    document.getElementById(`userNotEditableEmail${id}`).innerText = email;
    document.getElementById(`userNotEditableContact${id}`).innerText = contact;
    document.getElementById(`userNotEditableProfile${id}`).innerText = profile;
    document.getElementById(`userNotEditableDepartment${id}`).innerText = department;
    document.getElementById(`userNotEditableDesignation${id}`).innerText = designation;
    document.getElementById(`userNotEditableUserName${id}`).innerText = user_name;
    axios
      .post(`http://localhost:8000/api/updateUser/${id}`, userData, { headers: { "Content-Type": "application/json" } })
      .then((response) => {})
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <>
      <Helmet>
        <title>Manage User | BUP Leave Register</title>
      </Helmet>
      <div id="main">
        <TopNav updateSidebarState={props.updateSidebarState}></TopNav>

        <div className="main-content container-fluid">
          <div className="page-title">
            <div className="row">
              <div className="col-12 col-md-6 order-md-1 order-last">
                <h3>Manage User</h3>
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
                      Manage User
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
                      <th>Id</th>
                      <th>Gender</th>
                      <th>First Name</th>
                      <th>Last Name</th>
                      <th>Age</th>
                      <th>Email</th>
                      <th>Contact</th>
                      <th>Profile Image</th>
                      <th>Department</th>
                      <th>Designation</th>
                      <th>User Name</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users &&
                      users.map((d) => (
                        <>
                          <tr key={d.id + "editable"} id={`userEditable${d.id}`} className="d-none">
                            <td>
                              <input id={`userEditableId${d.id}`} type="text" defaultValue={d.id} />
                            </td>
                            <td>
                              <fieldset className="form-group">
                                <select className="form-select" id={`basicSelect userEditableGender${d.id}`} defaultValue={d.gender}>
                                  <option>Female</option>
                                  <option>Male</option>
                                </select>
                              </fieldset>
                            </td>
                            <td>
                              <input id={`userEditableFirstName${d.id}`} type="text" defaultValue={d.first_name} />
                            </td>
                            <td>
                              <input id={`userEditableLastName${d.id}`} type="text" defaultValue={d.last_name} />
                            </td>
                            <td>
                              <input id={`userEditableAge${d.id}`} type="text" defaultValue={d.age} />
                            </td>
                            <td>
                              <input id={`userEditableEmail${d.id}`} type="text" defaultValue={d.email} />
                            </td>
                            <td>
                              <input id={`userEditableContact${d.id}`} type="text" defaultValue={d.contact} />
                            </td>
                            <td>
                              <input id={`userEditableProfile${d.id}`} type="text" defaultValue={d.profile} />
                            </td>
                            <td>
                              <fieldset className="form-group">
                                <select className="form-select" id={`basicSelect userEditableDepartment${d.id}`}>
                                  {departments && departments.map((dept) => <option selected={dept.id === d.designation_id ? "selected" : ""}>{dept.department_name}</option>)}
                                </select>
                              </fieldset>
                            </td>
                            <td>
                              <fieldset className="form-group">
                                <select className="form-select" id={`basicSelect userEditableDesignation${d.id}`}>
                                  {designations && designations.map((desg) => <option selected={desg.id === d.designation_id ? "selected" : ""}>{desg.designation_name}</option>)}
                                </select>
                              </fieldset>
                            </td>
                            <td>
                              <input id={`userEditableUserName${d.id}`} type="text" defaultValue={d.user_name} />
                            </td>
                            <td>
                              <span
                                onClick={() => {
                                  makeNotEditable(d.id);
                                }}
                              >
                                <span style={{ cursor: "pointer" }}>
                                  <FontAwesomeIcon icon={faCheck} size="lg" className="text-success" />
                                </span>
                              </span>
                            </td>
                          </tr>
                          <tr key={d.id + "notEditable"} id={`userNotEditable${d.id}`} className="">
                            <td id={`userNotEditableId${d.id}`}>{d.id}</td>
                            <td id={`userNotEditableGender${d.id}`}>{d.gender}</td>
                            <td id={`userNotEditableFirstName${d.id}`}>{d.first_name}</td>
                            <td id={`userNotEditableLastName${d.id}`}>{d.last_name}</td>
                            <td id={`userNotEditableAge${d.id}`}>{d.age}</td>
                            <td id={`userNotEditableEmail${d.id}`}>{d.email}</td>
                            <td id={`userNotEditableContact${d.id}`}>{d.contact}</td>
                            <td id={`userNotEditableProfile${d.id}`}>{d.profile}</td>
                            <td id={`userNotEditableDepartment${d.id}`}>
                              {departments &&
                                departments.map((dept) => {
                                  if (dept.id === d.department_id) {
                                    return dept.department_name;
                                  }
                                })}
                            </td>
                            <td id={`userNotEditableDesignation${d.id}`}>
                              {designations &&
                                designations.map((desg) => {
                                  if (desg.id === d.designation_id) {
                                    return desg.designation_name;
                                  }
                                })}
                            </td>
                            <td id={`userNotEditableUserName${d.id}`}>{d.user_name}</td>
                            <td>
                              <span style={{ cursor: "pointer" }} onClick={() => makeEditable(d.id)}>
                                <FontAwesomeIcon icon={faPen} className="text-success" />
                              </span>{" "}
                              <span
                                style={{ cursor: "pointer" }}
                                onClick={() => {
                                  deleteUser(d.id);
                                }}
                              >
                                <FontAwesomeIcon icon={faTrash} className="text-danger"></FontAwesomeIcon>
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

export default ManageEmployee;
