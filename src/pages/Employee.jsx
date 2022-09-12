import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ApplyLeave from "../components/ApplyLeave";
import DashboardEmployee from "../components/DashboardEmployee";
import LeaveStatus from "../components/LeaveStatus";
import SidebarEmployee from "../components/SidebarEmployee";
import UpdateEmployeeAccount from "../components/UpdateEmployeeAccount";
const Employee = () => {
  const [sidebar, setSidebar] = useState(true);
  const updateSidebarState = () => {
    setSidebar(!sidebar);
  };
  return (
    <>
      <SidebarEmployee></SidebarEmployee>
      <Routes>
        <Route path="" element={<DashboardEmployee></DashboardEmployee>}></Route>
        <Route path="apply_leave" element={<ApplyLeave></ApplyLeave>}></Route>
        <Route path="leave_status" element={<LeaveStatus></LeaveStatus>}></Route>
      </Routes>
    </>
  );
};

export default Employee;
