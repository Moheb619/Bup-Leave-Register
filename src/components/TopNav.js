import React from "react";
import { Link } from "react-router-dom";
import FeatherIcon from "feather-icons-react";
import { useState } from "react";
const TopNav = (props) => {
  const [userDropDown, setUserDropDown] = useState(false);
  return (
    <nav className="navbar navbar-header navbar-expand navbar-light">
      <div onClick={() => props.updateSidebarState()} className="sidebar-toggler" style={{ cursor: "pointer" }}>
        <span className="navbar-toggler-icon"></span>
      </div>
      <button
        className="btn navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded={userDropDown ? true : false}
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav d-flex align-items-center navbar-light ms-auto">
          <li className="dropdown nav-icon">
            <a href="#" data-bs-toggle="dropdown" className="nav-link  dropdown-toggle nav-link-lg nav-link-user">
              <div className="d-lg-inline-block">
                <FeatherIcon icon="bell"></FeatherIcon>
                <span className="badge bg-info">2</span>
              </div>
            </a>
            <div className="dropdown-menu dropdown-menu-end dropdown-menu-large">
              <h6 className="py-2 px-4">Notifications</h6>
              <ul className="list-group rounded-none">
                <li className="list-group-item border-0 align-items-start">
                  <div className="row mb-2">
                    <div className="col-md-12 notif">
                      <a href="leave_details.html">
                        <h6 className="text-bold">John Doe</h6>
                        <p className="text-xs">applied for leave at 05-21-2021</p>
                      </a>
                    </div>
                    <div className="col-md-12 notif">
                      <a href="leave_details.html">
                        <h6 className="text-bold">Jane Doe</h6>
                        <p className="text-xs">applied for leave at 05-21-2021</p>
                      </a>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </li>
          <li className="dropdown">
            <a
              style={{ cursor: "pointer" }}
              data-bs-toggle="dropdown"
              className={userDropDown ? "nav-link dropdown-toggle nav-link-lg nav-link-user show" : "nav-link dropdown-toggle nav-link-lg nav-link-user"}
            >
              <div className="avatar me-1">
                <img src="/assets/images/admin.png" alt="" />
              </div>
              <div className="d-none d-md-block d-lg-inline-block" onClick={() => setUserDropDown(!userDropDown)}>
                Hi, Admin
              </div>
            </a>
            <div className={userDropDown ? "dropdown-menu dropdown-menu-end show" : "dropdown-menu dropdown-menu-end"} data-bs-popper={userDropDown ? "none" : ""}>
              <a className="dropdown-item" href="#">
                <FeatherIcon icon="user"></FeatherIcon> Account
              </a>
              <a className="dropdown-item" href="#">
                <FeatherIcon icon="settings"></FeatherIcon> Settings
              </a>
              <div className="dropdown-divider"></div>
              <Link to="/" className="dropdown-item">
                <FeatherIcon icon="log-out"></FeatherIcon> Logout
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default TopNav;
