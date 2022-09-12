import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddDepartment from "../components/AddDepartment";
import AddDesignation from "../components/AddDesignation";
import AddEmployee from "../components/AddEmployee";
import AddLeaveType from "../components/AddLeaveType";
import AddUser from "../components/AddUser";
import AllLeave from "../components/AllLeave";
import ApproveLeave from "../components/ApproveLeave";
import DashboardAdmin from "../components/DashboardAdmin";
import ManageDepartment from "../components/ManageDepartment";
import ManageEmployee from "../components/ManageEmployee";
import ManageLeaveType from "../components/ManageLeaveType";
import ManageUser from "../components/ManageUser";
import NotApproveLeave from "../components/NotApproveLeave";
import PendingLeave from "../components/PendingLeave";
import Sidebar from "../components/SidebarAdmin";
const Home = () => {
  const [sidebar, setSidebar] = useState(true);
  const updateSidebarState = () => {
    setSidebar(!sidebar);
  };
  return (
    <>
      <div></div>
      {/* <BrowserRouter>
        <div id="app">
          <Sidebar sidebarState={sidebar} updateSidebarState={updateSidebarState} print="anything"></Sidebar>
          <Routes>
            <Route path="/admin" element={<DashboardAdmin updateSidebarState={updateSidebarState} />}></Route>
            <Route path="/admin/add_department" element={<AddDepartment updateSidebarState={updateSidebarState} />}></Route>
            <Route path="/admin/manage_department" element={<ManageDepartment updateSidebarState={updateSidebarState} />}></Route>
            <Route path="/admin/add_designation" element={<AddDesignation updateSidebarState={updateSidebarState} />}></Route>
            <Route path="/admin/manage_designation" element={<ManageDepartment />}></Route>
            <Route path="/admin/add_employee" element={<AddEmployee updateSidebarState={updateSidebarState} />}></Route>
            <Route path="/admin/manage_employee" element={<ManageEmployee updateSidebarState={updateSidebarState} />}></Route>
            <Route path="/admin/add_leave_type" element={<AddLeaveType updateSidebarState={updateSidebarState} />}></Route>
            <Route path="/admin/manage_leave_type" element={<ManageLeaveType updateSidebarState={updateSidebarState} />}></Route>
            <Route path="/admin/all_leave" element={<AllLeave updateSidebarState={updateSidebarState} />}></Route>
            <Route path="/admin/pending_leave" element={<PendingLeave updateSidebarState={updateSidebarState} />}></Route>
            <Route path="/admin/approve_leave" element={<ApproveLeave updateSidebarState={updateSidebarState} />}></Route>
            <Route path="/admin/not_approve_leave" element={<NotApproveLeave updateSidebarState={updateSidebarState} />}></Route>
            <Route path="/admin/add_user" element={<AddUser updateSidebarState={updateSidebarState} />}></Route>
            <Route path="/admin/manage_user" element={<ManageUser updateSidebarState={updateSidebarState} />}></Route>
          </Routes>
        </div>
      </BrowserRouter> */}
    </>
  );
};

export default Home;
