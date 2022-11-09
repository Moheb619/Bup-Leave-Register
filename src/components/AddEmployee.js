import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import TopNav from "./TopNav";
import axios from "axios";
import { useForm } from "react-hook-form";
import useFetch from "../hooks/useFetch";
import { useEffect } from "react";
const AddEmployee = (props) => {
  const [departments, setDepartments] = useState("");
  useEffect(() => {
    axios.get(`http://localhost:8000/api/getDepartments`).then((res) => {
      setDepartments(res.data.departments);
    });
  }, []);
  const { data, loading, error } = useFetch(`http://localhost:8000/api/all_user`);
  const users = data.user;
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const handleUnique = (inputField, val) => {
    let isUnique = true;
    users &&
      users.map((us) => {
        if (inputField === "contact") {
          if (us.contact === val) {
            isUnique = false;
            return isUnique;
          }
        } else if (inputField === "email") {
          if (us.email === val) {
            isUnique = false;
            return isUnique;
          }
        } else if (inputField === "user_name") {
          if (us.user_name === val) {
            isUnique = false;
            return isUnique;
          }
        } else if (inputField === "id_number") {
          if (us.id_name === val) {
            isUnique = false;
            return isUnique;
          }
        }
      });
    return isUnique;
  };

  const onSubmit = (data) => {
    const employeeData = new FormData();
    employeeData.append("id_number", data.id_number);
    employeeData.append("gender", data.gender);
    employeeData.append("first_name", data.first_name);
    employeeData.append("last_name", data.last_name);
    employeeData.append("age", data.age);
    employeeData.append("email", data.email);
    employeeData.append("contact", data.contact);
    employeeData.append("profile", data.profile[0]);
    employeeData.append("department", data.department);
    employeeData.append("designation", data.designation);
    employeeData.append("user_name", data.user_name);
    employeeData.append("password", data.password);

    axios
      .post("http://localhost:8000/api/register", employeeData, { headers: { "Content-Type": "application/json" } })
      .then((response) => {
        alert(JSON.stringify(response.data.success));
        reset();
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <>
      <Helmet>
        <title>Add Employee | BUP Leave Register</title>
      </Helmet>
      <div id="main">
        <TopNav updateSidebarState={props.updateSidebarState}></TopNav>

        <div className="main-content container-fluid">
          <div className="page-title">
            <div className="row">
              <div className="col-12 col-md-6 order-md-1 order-last">
                <h3>Add Employee</h3>
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
                      Add Employee
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>

          {/* <!-- // Basic multiple Column Form section start --> */}
          <section id="multiple-column-form">
            <div className="row match-height">
              <div className="col-12">
                <div className="card">
                  <div className="card-content">
                    <div className="card-body">
                      <form onSubmit={handleSubmit(onSubmit)} className="form">
                        <div className="row">
                          <div className="col-md-6 col-12">
                            <div className="form-group has-icon-left">
                              <label htmlFor="first-name-icon">ID Number</label>
                              <div className="position-relative">
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="id number"
                                  id="first-name-icon"
                                  {...register("id_number", {
                                    required: "Id Number is required",
                                    validate: (value) => handleUnique("id_number", value) || "Id is already taken",
                                  })}
                                />
                                <div className="form-control-icon">
                                  <i className="fa fa-hash"></i>
                                </div>
                              </div>
                            </div>
                            {errors.id_number && <p className="text-danger">{errors.id_number.message}</p>}
                          </div>
                          <div className="col-md-6 col-12">
                            <div className="form-group has-icon-left">
                              <label htmlFor="first-name-icon">Gender</label>
                              <div className="position-relative">
                                <fieldset className="form-group">
                                  <select
                                    className="form-select"
                                    id="basicSelect"
                                    {...register("gender", {
                                      required: "Gender is required",
                                    })}
                                  >
                                    <option>Male</option>
                                    <option>Female</option>
                                  </select>
                                </fieldset>
                              </div>
                            </div>
                            {errors.gender && <p className="text-danger">{errors.gender.message}</p>}
                          </div>
                          <div className="col-md-4 col-12">
                            <div className="form-group has-icon-left">
                              <label htmlFor="first-name-icon">First Name</label>
                              <div className="position-relative">
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="first name"
                                  id="first-name-icon"
                                  {...register("first_name", {
                                    required: "First Name is Required",
                                  })}
                                />
                                <div className="form-control-icon">
                                  <i className="fa fa-user"></i>
                                </div>
                              </div>
                            </div>
                            {errors.first_name && <p className="text-danger">{errors.first_name.message}</p>}
                          </div>
                          <div className="col-md-4 col-12">
                            <div className="form-group has-icon-left">
                              <label htmlFor="first-name-icon">Last Name</label>
                              <div className="position-relative">
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="last name"
                                  id="first-name-icon"
                                  {...register("last_name", {
                                    required: "Last name is required",
                                  })}
                                />
                                <div className="form-control-icon">
                                  <i className="fa fa-user"></i>
                                </div>
                              </div>
                            </div>
                            {errors.last_name && <p className="text-danger">{errors.last_name.message}</p>}
                          </div>
                          <div className="col-md-3 col-12">
                            <div className="form-group has-icon-left">
                              <label htmlFor="first-name-icon">Age</label>
                              <div className="position-relative">
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="age"
                                  id="first-name-icon"
                                  {...register("age", {
                                    required: "Age is required",
                                    pattern: {
                                      value: /^[1-9]?[0-9]{1}$|^100$/,
                                      message: "Age is invalid",
                                    },
                                  })}
                                />
                                <div className="form-control-icon">
                                  <i className="fa fa-user"></i>
                                </div>
                              </div>
                            </div>
                            {errors.age && <p className="text-danger">{errors.age.message}</p>}
                          </div>
                          <div className="col-md-3 col-12">
                            <div className="form-group has-icon-left">
                              <label htmlFor="first-name-icon">Email</label>
                              <div className="position-relative">
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="email"
                                  id="first-name-icon"
                                  {...register("email", {
                                    required: "Email is required",
                                    pattern: {
                                      value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                      message: "Email is invalid",
                                    },
                                    validate: (value) => handleUnique("email", value) || "Email is already taken",
                                  })}
                                />
                                <div className="form-control-icon">
                                  <i className="fa fa-envelope"></i>
                                </div>
                              </div>
                            </div>
                            {errors.email && <p className="text-danger">{errors.email.message}</p>}
                          </div>
                          <div className="col-md-3 col-12">
                            <div className="form-group has-icon-left">
                              <label htmlFor="first-name-icon">Contact</label>
                              <div className="position-relative">
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="contact"
                                  id="first-name-icon"
                                  {...register("contact", {
                                    required: "Contact is Required",
                                    pattern: { value: /^(?:\+88|88)?(01[3-9]\d{8})$/, message: "Contact must follow Bangladesh Number Format" },
                                    validate: (value) => handleUnique("contact", value) || "Contact is already taken",
                                  })}
                                />
                                <div className="form-control-icon">
                                  <i className="fa fa-phone"></i>
                                </div>
                              </div>
                            </div>
                            {errors.contact && <p className="text-danger">{errors.contact.message}</p>}
                          </div>
                          <div className="col-md-3 col-12">
                            <div className="form-group has-icon-left">
                              <label htmlFor="first-name-icon">Profile</label>
                              <div className="position-relative">
                                <input
                                  type="file"
                                  className="form-control"
                                  placeholder=""
                                  id="first-name-icon"
                                  {...register("profile", {
                                    required: "Profile Image is Required",
                                  })}
                                />
                                <div className="form-control-icon">
                                  <i className="fa fa-user"></i>
                                </div>
                              </div>
                            </div>
                            {errors.profile && <p className="text-danger">{errors.profile.message}</p>}
                          </div>
                          <div className="col-md-6 col-12">
                            <div className="form-group">
                              <label htmlFor="country-floating">Department</label>
                              <fieldset className="form-group">
                                <select
                                  className="form-select"
                                  id="basicSelect"
                                  {...register("department", {
                                    required: "Department is Required",
                                  })}
                                >
                                  {departments && departments.map((d) => <option>{d.department_name}</option>)}
                                </select>
                              </fieldset>
                            </div>
                            {errors.department && <p className="text-danger">{errors.department.message}</p>}
                          </div>
                          <div className="col-md-6 col-12">
                            <div className="form-group">
                              <label htmlFor="company-column">Designation</label>
                              <fieldset className="form-group">
                                <select
                                  className="form-select"
                                  id="basicSelect"
                                  {...register("designation", {
                                    required: "Designation is Required",
                                  })}
                                >
                                  <option>Chairman</option>
                                  <option>Stuff</option>
                                  <option>Faculty</option>
                                  <option>Lecturar</option>
                                </select>
                              </fieldset>
                            </div>
                            {errors.designation && <p className="text-danger">{errors.designation.message}</p>}
                          </div>
                          <div className="col-md-6 col-12">
                            <div className="form-group has-icon-left">
                              <label htmlFor="first-name-icon">Username</label>
                              <div className="position-relative">
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="username"
                                  id="first-name-icon"
                                  {...register("user_name", {
                                    required: "User Name is Required",
                                    validate: (value) => handleUnique("user_name", value) || "User Name is already Taken",
                                  })}
                                />
                                <div className="form-control-icon">
                                  <i className="fa fa-user"></i>
                                </div>
                              </div>
                            </div>
                            {errors.user_name && <p className="text-danger">{errors.user_name.message}</p>}
                          </div>
                          <div className="col-md-6 col-12">
                            <div className="form-group has-icon-left">
                              <label htmlFor="first-name-icon">Password</label>
                              <div className="position-relative">
                                <input
                                  type="password"
                                  className="form-control"
                                  placeholder="passsword"
                                  id="first-name-icon"
                                  {...register("password", {
                                    required: "Password is required",
                                    pattern: {
                                      value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/,
                                      message: "Password must containts 8-16 characters,1 Uppercase Letter, 1 Number , 1 Special Character, e.g., ! @ # ?",
                                    },
                                  })}
                                />
                                <div className="form-control-icon">
                                  <i className="fa fa-key"></i>
                                </div>
                              </div>
                            </div>
                            {errors.password && <p className="text-danger">{errors.password.message}</p>}
                          </div>
                          <div className="col-12 d-flex justify-content-end">
                            <button type="submit" className="btn btn-primary me-1 mb-1">
                              Submit
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* <!-- // Basic multiple Column Form section end --> */}
        </div>
      </div>
    </>
  );
};

export default AddEmployee;
