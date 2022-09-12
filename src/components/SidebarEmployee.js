import React from "react";
import { Link } from "react-router-dom";

const SidebarEmployee = () => {
  return (
    <>
      <div id="sidebar" className="active">
        <div className="sidebar-wrapper active">
          <div className="sidebar-header" style={{ height: "50px", marginTop: "-30px" }}>
            <i className="text-success me-4">
              <img src="assets/images/bupLogo.png" alt="" className="mb-2" />
            </i>
            <span>BLR</span>
          </div>
          <div className="sidebar-menu">
            <ul className="menu">
              <li className="sidebar-item">
                <Link to="/employee" className="sidebar-link">
                  <i className="fa fa-home text-success"></i>
                  <span>Dashboard</span>
                </Link>
              </li>
              <li className="sidebar-item ">
                <Link to="apply_leave" className="sidebar-link">
                  <i className="fa fa-plane text-success"></i>
                  <span>Apply Leave</span>
                </Link>
              </li>
              <li className="sidebar-item ">
                <Link to="leave_status" className="sidebar-link">
                  <i className="fa fa-plane text-success"></i>
                  <span>Leave Status</span>
                </Link>
              </li>
            </ul>
          </div>
          <button className="sidebar-toggler btn x">
            <i data-feather="x"></i>
          </button>
        </div>
      </div>
    </>
  );
};

export default SidebarEmployee;
