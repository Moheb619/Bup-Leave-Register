import axios from "axios";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import TopNav from "./TopNav";

const AddDesignation = (props) => {
  const [designations, setDesignations] = useState("");
  const [message, setMessage] = useState("");
  const [messageColor, setMessageColor] = useState("");
  useEffect(() => {
    axios.get(`http://localhost:8000/api/getDesignations`).then((res) => {
      setDesignations(res.data.designations);
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
    designations &&
      designations.map((des) => {
        if (inputField === "designation_name") {
          if (des.designation_name === val) {
            isUnique = false;
            return isUnique;
          }
        }
      });
    return isUnique;
  };
  const onSubmit = (data) => {
    const designationData = new FormData();
    designationData.append("designation_name", data.designation_name);
    designationData.append("designation_short_details", data.designation_short_details);

    axios
      .post("http://localhost:8000/api/addDesignation", designationData, { headers: { "Content-Type": "application/json" } })
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
        <title>Add Designation | BUP Leave Register</title>
      </Helmet>
      <div id="main">
        <TopNav updateSidebarState={props.updateSidebarState}></TopNav>

        <div className="main-content container-fluid">
          <div className="page-title">
            <div className="row">
              <div className="col-12 col-md-6 order-md-1 order-last">
                <h3>Add Designation</h3>
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
                      Add Designation
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
                                <label htmlFor="first-name-icon">Designation Name</label>
                                <div className="position-relative">
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Input Designation"
                                    id="first-name-icon"
                                    {...register("designation_name", {
                                      required: "Designation Name is Required",
                                      validate: (value) => handleUnique("designation_name", value) || "Designation is already taken",
                                    })}
                                  />
                                  <div className="form-control-icon">
                                    <i className="fa fa-table"></i>
                                  </div>
                                </div>
                              </div>
                              {errors.designation_name && <p className="text-danger">{errors.designation_name.message}</p>}
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
                                    {...register("designation_short_details", {
                                      required: "Designation Details is required",
                                    })}
                                  />
                                  <div className="form-control-icon">
                                    <i className="fa fa-table"></i>
                                  </div>
                                </div>
                              </div>
                              {errors.designation_short_details && <p className="text-danger">{errors.designation_short_details.message}</p>}
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

export default AddDesignation;
