import { faCheck, faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import TopNav from "./TopNav";

const ManageEmployee = (props) => {
  const [users, setDepartments] = useState("");
  const [editable, setEditable] = useState(false);
  useEffect(() => {
    axios.get(`http://localhost:8000/api/all_user`).then((res) => {
      setDepartments(res.data.users);
    });
  }, []);

  const deleteDepartment = (id) => {
    const notEditable = document.getElementById(`userNotEditable${id}`);
    notEditable.classList = "d-none";

    axios.delete(`http://localhost:8000/api/deleteDepartment/${id}`).then((res) => {});
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

    updateDepartment(id);
  };

  const updateDepartment = (id) => {
    const user_name = document.getElementById(`userEditableName${id}`).value;
    const user_short_details = document.getElementById(`userEditableDetails${id}`).value;
    const userData = new FormData();
    userData.append("user_name", user_name);
    userData.append("user_short_details", user_short_details);
    document.getElementById(`userNotEditableName${id}`).innerText = user_name;
    document.getElementById(`userNotEditableShortDetails${id}`).innerText = user_short_details;
    axios
      .post(`http://localhost:8000/api/updateDepartment/${id}`, userData, { headers: { "Content-Type": "application/json" } })
      .then((response) => {})
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
                    {users &&
                      users.map((d) => (
                        <>
                          <tr key={d.id} id={`userEditable${d.id}`} className="d-none">
                            <td>
                              <input id={`userEditableName${d.id}`} type="text" defaultValue={d.user_name} />
                            </td>
                            <td>
                              <input id={`userEditableDetails${d.id}`} type="text" defaultValue={d.user_short_details} />
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
                          <tr key={d.id} id={`userNotEditable${d.id}`} className="">
                            <td id={`userNotEditableName${d.id}`}>{d.user_name}</td>
                            <td id={`userNotEditableShortDetails${d.id}`}>{d.user_short_details}</td>
                            <td>
                              <span style={{ cursor: "pointer" }} onClick={() => makeEditable(d.id)}>
                                <FontAwesomeIcon icon={faPen} className="text-success" />
                              </span>{" "}
                              <span
                                style={{ cursor: "pointer" }}
                                onClick={() => {
                                  deleteDepartment(d.id);
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
