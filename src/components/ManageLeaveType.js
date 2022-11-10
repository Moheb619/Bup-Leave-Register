import axios from "axios";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import TopNav from "./TopNav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faPen, faTrash, faSpinner } from "@fortawesome/free-solid-svg-icons";

const ManageLeaveType = (props) => {
  const [leaves, setLeaves] = useState("");
  const [editable, setEditable] = useState(false);
  useEffect(() => {
    axios.get(`http://localhost:8000/api/getLeaves`).then((res) => {
      setLeaves(res.data.leaves);
    });
  }, []);

  const deleteLeave = (id) => {
    const notEditable = document.getElementById(`leaveNotEditable${id}`);
    notEditable.classList = "d-none";

    axios.delete(`http://localhost:8000/api/deleteLeave/${id}`).then((res) => {});
  };
  const makeEditable = (id) => {
    const editable = document.getElementById(`leaveEditable${id}`);
    const noteditable = document.getElementById(`leaveNotEditable${id}`);

    noteditable.classList = "d-none";
    editable.classList = "";
  };
  const makeNotEditable = (id) => {
    const editable = document.getElementById(`leaveEditable${id}`);
    const noteditable = document.getElementById(`leaveNotEditable${id}`);

    editable.classList = "d-none";
    noteditable.classList = "";

    updateLeave(id);
  };

  const updateLeave = (id) => {
    const leave_name = document.getElementById(`leaveEditableName${id}`).value;
    const leave_short_details = document.getElementById(`leaveEditableDetails${id}`).value;
    const number_of_days_allowed = parseInt(document.getElementById(`leaveEditableNumberOfDaysAllowed${id}`).value);
    const leaveData = new FormData();
    leaveData.append("leave_name", leave_name);
    leaveData.append("leave_description", leave_short_details);
    leaveData.append("number_of_days_allowed", number_of_days_allowed);
    document.getElementById(`leaveNotEditableName${id}`).innerText = leave_name;
    document.getElementById(`leaveNotEditableShortDetails${id}`).innerText = leave_short_details;
    document.getElementById(`leaveNotEditableNumberOfDaysAllowed${id}`).innerText = number_of_days_allowed;
    console.log(leaveData, " ", id);
    axios
      .post(`http://localhost:8000/api/updateLeave/${id}`, leaveData, { headers: { "Content-Type": "application/json" } })
      .then((response) => {})
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <>
      <Helmet>
        <title>Manage Leave | BUP Leave Register</title>
      </Helmet>
      <div id="main">
        <TopNav updateSidebarState={props.updateSidebarState}></TopNav>

        <div className="main-content container-fluid">
          <div className="page-title">
            <div className="row">
              <div className="col-12 col-md-6 order-md-1 order-last">
                <h3>Manage Leave</h3>
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
                      Manage Leave
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
                      <th>Leave Details</th>
                      <th>Number of Days Allowed</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {leaves &&
                      leaves.map((d) => (
                        <>
                          <tr key={d.id} id={`leaveEditable${d.id}`} className="d-none">
                            <td>
                              <input id={`leaveEditableName${d.id}`} type="text" defaultValue={d.leave_name} />
                            </td>
                            <td>
                              <input id={`leaveEditableDetails${d.id}`} type="text" defaultValue={d.leave_description} />
                            </td>
                            <td>
                              <input id={`leaveEditableNumberOfDaysAllowed${d.id}`} type="text" defaultValue={d.number_of_days_allowed} />
                            </td>
                            <td>
                              <span
                                onClick={() => {
                                  makeNotEditable(d.id);
                                }}
                              >
                                <span style={{ cursor: "pointer", color: "green", fontWeight: "bolder" }}>
                                  <FontAwesomeIcon icon={faCheck} size="lg" className="text-success" />
                                </span>
                              </span>
                            </td>
                          </tr>
                          <tr key={d.id} id={`leaveNotEditable${d.id}`} className="">
                            <td id={`leaveNotEditableName${d.id}`}>{d.leave_name}</td>
                            <td id={`leaveNotEditableShortDetails${d.id}`}>{d.leave_description}</td>
                            <td id={`leaveNotEditableNumberOfDaysAllowed${d.id}`}>{d.number_of_days_allowed}</td>
                            <td>
                              <span style={{ cursor: "pointer" }} onClick={() => makeEditable(d.id)}>
                                <FontAwesomeIcon icon={faPen} size="s" className="text-success" />
                              </span>{" "}
                              <span
                                style={{ cursor: "pointer" }}
                                onClick={() => {
                                  deleteLeave(d.id);
                                }}
                              >
                                <FontAwesomeIcon icon={faTrash} size="s" className="text-danger" />
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

export default ManageLeaveType;
