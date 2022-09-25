import React, { useState } from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { ImCross } from "react-icons/im";
const Sidebar = (props) => {
  useEffect(() => {
    let url = window.location.href;
    url = url.split("/");
    if (url[3] === "admin" && url[4] === undefined) {
      setSubemenu(0);
    }
  }, [window.location.href]);

  const [submenu, setSubemenu] = useState(0);
  const handleSubmenu = (num) => {
    if (submenu === num) {
      setSubemenu(0);
    } else {
      setSubemenu(num);
    }
    console.log(submenu);
  };
  return (
    <>
      <div id="sidebar" className={props.sidebarState ? "active" : ""}>
        <div className="sidebar-wrapper active">
          <div className="sidebar-header" style={{ height: "50px", marginTop: "-30px" }}>
            <i className="text-success me-4">
              <img src="/assets/images/bupLogo.png" alt="" className="mb-2" />
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
                <div className="sidebar-link" onClick={() => handleSubmenu(1)}>
                  <i className="fa fa-building text-success"></i>
                  <span>Department</span>
                </div>
                <ul className={submenu === 1 ? "submenu active" : "submenu"}>
                  <li>
                    <Link to="/admin/add_department">Add Department</Link>
                  </li>
                  <li>
                    <Link to="/admin/manage_department">Manage Department</Link>
                  </li>
                </ul>
              </li>
              <li className="sidebar-item  has-sub">
                <div className="sidebar-link" onClick={() => handleSubmenu(2)}>
                  <i className="fa fa-table text-success"></i>
                  <span>Designation</span>
                </div>
                <ul className={submenu === 2 ? "submenu active" : "submenu"}>
                  <li>
                    <Link to="/admin/add_designation">Add Designation</Link>
                  </li>
                  <li>
                    <Link to="/admin/manage_designation">Manage Designation</Link>
                  </li>
                </ul>
              </li>
              <li className="sidebar-item  has-sub">
                <div className="sidebar-link" onClick={() => handleSubmenu(3)}>
                  <i className="fa fa-users text-success"></i>
                  <span>Employees</span>
                </div>
                <ul className={submenu === 3 ? "submenu active" : "submenu"}>
                  <li>
                    <Link to="/admin/add_employee">Add Employee</Link>
                  </li>
                  <li>
                    <Link to="/admin/manage_employee">Manage Employee</Link>
                  </li>
                </ul>
              </li>
              <li className="sidebar-item  has-sub">
                <div className="sidebar-link" onClick={() => handleSubmenu(4)}>
                  <i className="fa fa-table text-success"></i>
                  <span>Leave Type</span>
                </div>
                <ul className={submenu === 4 ? "submenu active" : "submenu"}>
                  <li>
                    <Link to="/admin/add_leave_type">Add Leave Type</Link>
                  </li>
                  <li>
                    <Link to="/admin/manage_leave_type">Manage Leave Type</Link>
                  </li>
                </ul>
              </li>
              <li className="sidebar-item  has-sub">
                <div className="sidebar-link" onClick={() => handleSubmenu(5)}>
                  <i className="fa fa-table text-success"></i>
                  <span>Leave Management</span>
                </div>
                <ul className={submenu === 5 ? "submenu active" : "submenu"}>
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
                <div className="sidebar-link" onClick={() => handleSubmenu(6)}>
                  <i className="fa fa-user text-success"></i>
                  <span>Users</span>
                </div>
                <ul className={submenu === 6 ? "submenu active" : "submenu"}>
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
            <ImCross />
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
