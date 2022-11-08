import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const Login = () => {
  // Heading animation with framer motion
  const line = "Bup Leave Register";
  const headingSentence = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        staggerChildren: 0.08,
      },
    },
  };
  const headingLetter = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  };
  // Heading animation with framer motion ends
  return (
    <div id="auth">
      <div className="container">
        <div className="row">
          <div className="col-md-5 col-sm-12 mx-auto">
            <div className="card pt-4">
              <div className="card-body">
                <div className="text-center mb-5">
                  <div className="loginCard d-flex justify-content-between mb-3">
                    <img src="assets/images/bupLogo.png" alt="bupLogo" />
                    <motion.h2 variants={headingSentence} initial="hidden" animate="visible" className="text-dark mx-auto">
                      {line.split("").map((char, index) => {
                        return (
                          <motion.span key={char + "-" + index} variants={headingLetter}>
                            {char}
                          </motion.span>
                        );
                      })}
                    </motion.h2>
                  </div>
                  <h3>Sign In</h3>
                </div>
                <div action="employee.html">
                  <div className="form-group position-relative has-icon-left">
                    <label htmlFor="username">Username</label>
                    <div className="position-relative">
                      <input type="text" className="form-control" id="username" />
                      <div className="form-control-icon">
                        <i className="fa fa-user"></i>
                      </div>
                    </div>
                  </div>
                  <div className="form-group position-relative has-icon-left">
                    <div className="clearfix">
                      <label htmlFor="password">Password</label>
                      <a href="#" className="float-end">
                        <small>Forgot password?</small>
                      </a>
                    </div>
                    <div className="position-relative">
                      <input type="password" className="form-control" id="password" />
                      <div className="form-control-icon">
                        <i className="fa fa-key"></i>
                      </div>
                    </div>
                  </div>

                  <div className="form-check clearfix my-4">
                    <div className="checkbox float-start mx-2">
                      <Link to="/admin" className="float-end">
                        <small>admin</small>
                      </Link>
                    </div>
                    <div className="checkbox float-start mx-2">
                      <Link to="/employee" className="float-end">
                        <small>employee</small>
                      </Link>
                    </div>
                  </div>
                  <div className="clearfix">
                    <button className="btn btn-primary float-end">Login</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
