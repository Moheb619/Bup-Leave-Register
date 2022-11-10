import axios from "axios";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import TopNav from "./TopNav";

const AddLeaveType = (props) => {
  const [leaves, setLeaves] = useState("");
  const [message, setMessage] = useState("");
  const [messageColor, setMessageColor] = useState("");
  useEffect(() => {
    axios.get(`http://localhost:8000/api/getLeaves`).then((res) => {
      setLeaves(res.data.leaves);
    });
  }, []);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const handleUnique = (inputField, val) => {
    let isUnique = true;
    leaves &&
      leaves.map((des) => {
        if (inputField === "leave_name") {
          if (des.leave_name === val) {
            isUnique = false;
            return isUnique;
          }
        }
      });
    return isUnique;
  };
  const onSubmit = (data) => {
    const leaveData = new FormData();
    leaveData.append("leave_name", data.leave_name);
    leaveData.append("leave_description", data.leave_description);
    leaveData.append("number_of_days_allowed", data.number_of_days_allowed);

    axios
      .post("http://localhost:8000/api/addLeave", leaveData, { headers: { "Content-Type": "application/json" } })
      .then((response) => {
        reset();
        setMessage(response.data.Message);
        setMessageColor(response.data.MessageColor);
        setTimeout(function () {
          setMessage("");
          setMessageColor("");
        }, 2000);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <>
      <Helmet>
        <title>Add Leave Type | BUP Leave Register</title>
      </Helmet>
      <div id="main">
        <TopNav updateSidebarState={props.updateSidebarState}></TopNav>

        <div className="main-content container-fluid">
          <div className="page-title">
            <div className="row">
              <div className="col-12 col-md-6 order-md-1 order-last">
                <h3>Add Leave Type</h3>
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
                      Add Leave Type
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
                      <form onSubmit={handleSubmit(onSubmit)} className="form form-vertical">
                        <div className="form-body">
                          <div className="row">
                            <div className="col-12">
                              <div className="form-group has-icon-left">
                                <label htmlFor="first-name-icon">Leave Name</label>
                                <div className="position-relative">
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Input leave type"
                                    id="first-name-icon"
                                    {...register("leave_name", {
                                      required: "Leave Name is Required",
                                      validate: (value) => handleUnique("leave_name", value) || "Leave is already taken",
                                    })}
                                  />
                                  <div className="form-control-icon">
                                    <i className="fa fa-table"></i>
                                  </div>
                                </div>
                              </div>
                              {errors.leave_name && <p className="text-danger">{errors.leave_name.message}</p>}
                            </div>
                            <div className="col-12">
                              <div className="form-group has-icon-left">
                                <label htmlFor="email-id-icon">Description</label>
                                <div className="position-relative">
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Input Description"
                                    id="email-id-icon"
                                    {...register("leave_description", {
                                      required: "Leave Description is Required",
                                    })}
                                  />
                                  <div className="form-control-icon">
                                    <i className="fa fa-table"></i>
                                  </div>
                                </div>
                              </div>
                              {errors.leave_description && <p className="text-danger">{errors.leave_description.message}</p>}
                            </div>
                            <div className="col-12">
                              <div className="form-group has-icon-left">
                                <label htmlFor="email-id-icon">Number of days Allowed</label>
                                <div className="position-relative">
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Input days allowed"
                                    id="email-id-icon"
                                    {...register("number_of_days_allowed", {
                                      required: "Leave Duration is Required",
                                    })}
                                  />
                                  <div className="form-control-icon">
                                    <i className="fa fa-table"></i>
                                  </div>
                                </div>
                              </div>
                              {errors.number_of_days_allowed && <p className="text-danger">{errors.number_of_days_allowed.message}</p>}
                            </div>
                            <div className="col-6 d-flex justify-content-start">
                              <p className={messageColor}>{message}</p>
                            </div>
                            <div className="col-6 d-flex justify-content-end">
                              <button type="submit" className="btn btn-primary me-1 mb-1">
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

export default AddLeaveType;
