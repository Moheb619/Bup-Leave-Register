import React, { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = (props) => {
  return (
    <div id="sidebar" className={props.sidebarState ? "active" : ""}>
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
              <Link to="/admin" className="sidebar-link">
                <i className="fa fa-home text-success"></i>
                <span>Dashboard</span>
              </Link>
            </li>
            <li className="sidebar-item  has-sub">
              <a href="#" className="sidebar-link">
                <i className="fa fa-building text-success"></i>
                <span>Department</span>
              </a>
              <ul className="submenu ">
                <li>
                  <Link to="/admin/add_department">Add Department</Link>
                </li>
                <li>
                  <Link to="/admin/manage_department">Manage Department</Link>
                </li>
              </ul>
            </li>
            <li className="sidebar-item  has-sub">
              <a href="#" className="sidebar-link">
                <i className="fa fa-table text-success"></i>
                <span>Designation</span>
              </a>
              <ul className="submenu ">
                <li>
                  <Link to="/admin/add_designation">Add Designation</Link>
                </li>
                <li>
                  <Link to="/admin/manage_designation">Manage Designation</Link>
                </li>
              </ul>
            </li>
            <li className="sidebar-item  has-sub">
              <a href="#" className="sidebar-link">
                <i className="fa fa-users text-success"></i>
                <span>Employees</span>
              </a>
              <ul className="submenu ">
                <li>
                  <Link to="/admin/add_employee">Add Employee</Link>
                </li>
                <li>
                  <Link to="/admin/manage_employee">Manage Employee</Link>
                </li>
              </ul>
            </li>
            <li className="sidebar-item  has-sub">
              <a href="#" className="sidebar-link">
                <i className="fa fa-table text-success"></i>
                <span>Leave Type</span>
              </a>
              <ul className="submenu ">
                <li>
                  <Link to="/admin/add_leave_type">Add Leave Type</Link>
                </li>
                <li>
                  <Link to="/admin/manage_leave_type">Manage Leave Type</Link>
                </li>
              </ul>
            </li>
            <li className="sidebar-item  has-sub">
              <a href="#" className="sidebar-link">
                <i className="fa fa-table text-success"></i>
                <span>Leave Management</span>
              </a>
              <ul className="submenu ">
                <li>
                  <Link to="/admin/all_leave">All Leaves</Link>
                </li>
                <li>
                  <Link to="/admin/pending_leave">Pending Leaves</Link>
                </li>
                <li>
                  <Link to="/admin/approve_leave">Approve Leaves</Link>
                </li>
                <li>
                  <Link to="/admin/not_approve_leave">Not Approve Leaves</Link>
                </li>
              </ul>
            </li>
            <li className="sidebar-item  has-sub">
              <a href="#" className="sidebar-link">
                <i className="fa fa-user text-success"></i>
                <span>Users</span>
              </a>
              <ul className="submenu ">
                <li>
                  <Link to="/admin/add_user">Add User</Link>
                </li>
                <li>
                  <Link to="/admin/manage_user">Manage Users</Link>
                </li>
              </ul>
            </li>
            {/* <li className="sidebar-item ">
              <a href="reports.html" className="sidebar-link">
                <i className="fa fa-chart-bar text-success"></i>
                <span>Reports</span>
              </a>
            </li> */}
          </ul>
        </div>
        <button className="sidebar-toggler btn x" onClick={() => props.updateSidebarState()}>
          <i data-feather="x"></i>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
