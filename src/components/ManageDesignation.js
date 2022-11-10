import axios from "axios";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import TopNav from "./TopNav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faPen, faTrash } from "@fortawesome/free-solid-svg-icons";

const ManageDesignation = (props) => {
  const [designations, setDesignations] = useState("");
  const [editable, setEditable] = useState(false);
  useEffect(() => {
    axios.get(`http://localhost:8000/api/getDesignations`).then((res) => {
      setDesignations(res.data.designations);
    });
  }, []);

  const deleteDesignations = (id) => {
    const notEditable = document.getElementById(`designationNotEditable${id}`);
    notEditable.classList = "d-none";

    axios.delete(`http://localhost:8000/api/deleteDesignation/${id}`).then((res) => {});
  };
  const makeEditable = (id) => {
    const editable = document.getElementById(`designationEditable${id}`);
    const noteditable = document.getElementById(`designationNotEditable${id}`);

    noteditable.classList = "d-none";
    editable.classList = "";
  };
  const makeNotEditable = (id) => {
    const editable = document.getElementById(`designationEditable${id}`);
    const noteditable = document.getElementById(`designationNotEditable${id}`);

    editable.classList = "d-none";
    noteditable.classList = "";

    updateDesignations(id);
  };

  const updateDesignations = (id) => {
    const designation_name = document.getElementById(`designationEditableName${id}`).value;
    const designation_short_details = document.getElementById(`designationEditableDetails${id}`).value;
    const designationData = new FormData();
    designationData.append("designation_name", designation_name);
    designationData.append("designation_short_details", designation_short_details);
    document.getElementById(`designationNotEditableName${id}`).innerText = designation_name;
    document.getElementById(`designationNotEditableShortDetails${id}`).innerText = designation_short_details;
    axios
      .post(`http://localhost:8000/api/updateDesignation/${id}`, designationData, { headers: { "Content-Type": "application/json" } })
      .then((response) => {})
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <>
      <Helmet>
        <title>Manage Designations | BUP Leave Register</title>
      </Helmet>
      <div id="main">
        <TopNav updateSidebarState={props.updateSidebarState}></TopNav>

        <div className="main-content container-fluid">
          <div className="page-title">
            <div className="row">
              <div className="col-12 col-md-6 order-md-1 order-last">
                <h3>Manage Designations</h3>
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
                      Manage Designations
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
                      <th>Designations Name</th>
                      <th>Designations Short Details</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {designations &&
                      designations.map((d) => (
                        <>
                          <tr key={d.id} id={`designationEditable${d.id}`} className="d-none">
                            <td>
                              <input id={`designationEditableName${d.id}`} type="text" defaultValue={d.designation_name} />
                            </td>
                            <td>
                              <input id={`designationEditableDetails${d.id}`} type="text" defaultValue={d.designation_short_details} />
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
                          <tr key={d.id} id={`designationNotEditable${d.id}`} className="">
                            <td id={`designationNotEditableName${d.id}`}>{d.designation_name}</td>
                            <td id={`designationNotEditableShortDetails${d.id}`}>{d.designation_short_details}</td>
                            <td>
                              <span style={{ cursor: "pointer" }} onClick={() => makeEditable(d.id)}>
                                <FontAwesomeIcon icon={faPen} size="s" className="text-success" />
                              </span>{" "}
                              <span
                                style={{ cursor: "pointer" }}
                                onClick={() => {
                                  deleteDesignations(d.id);
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

export default ManageDesignation;
