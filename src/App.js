import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import DashboardAdmin from "./components/DashboardAdmin";
import DashboardEmployee from "./components/DashboardEmployee";
import ApplyLeave from "./components/ApplyLeave";
import LeaveStatus from "./components/LeaveStatus";
import SidebarEmployee from "./components/SidebarEmployee";
import { useState } from "react";
import Sidebar from "./components/SidebarAdmin";
import AddDepartment from "./components/AddDepartment";
import ManageDepartment from "./components/ManageDepartment";
import AddDesignation from "./components/AddDesignation";
import ManageDesignation from "./components/ManageDesignation";
import AddEmployee from "./components/AddEmployee";
import ManageEmployee from "./components/ManageEmployee";
import AddLeaveType from "./components/AddLeaveType";
import ManageLeaveType from "./components/ManageLeaveType";
import AllLeave from "./components/AllLeave";
import PendingLeave from "./components/PendingLeave";
import ApproveLeave from "./components/ApproveLeave";
import NotApproveLeave from "./components/NotApproveLeave";
import AddUser from "./components/AddUser";
import ManageUser from "./components/ManageUser";
function App() {
  const [sidebar, setSidebar] = useState(true);
  const updateSidebarState = () => {
    setSidebar(!sidebar);
  };
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/employee">
            <Route
              path=""
              element={
                <>
                  <SidebarEmployee sidebarState={sidebar} updateSidebarState={updateSidebarState} />
                  <DashboardEmployee updateSidebarState={updateSidebarState} />
                </>
              }
            ></Route>
            <Route
              path="apply_leave"
              element={
                <>
                  <SidebarEmployee sidebarState={sidebar} updateSidebarState={updateSidebarState} />
                  <ApplyLeave updateSidebarState={updateSidebarState} />
                </>
              }
            ></Route>
            <Route
              path="leave_status"
              element={
                <>
                  <SidebarEmployee sidebarState={sidebar} updateSidebarState={updateSidebarState} />
                  <LeaveStatus updateSidebarState={updateSidebarState} />
                </>
              }
            ></Route>
          </Route>
          <Route path="/admin">
            <Route
              path=""
              element={
                <>
                  <Sidebar sidebarState={sidebar} updateSidebarState={updateSidebarState} />
                  <DashboardAdmin updateSidebarState={updateSidebarState} />
                </>
              }
            ></Route>
            <Route
              path="add_department"
              element={
                <>
                  <Sidebar sidebarState={sidebar} updateSidebarState={updateSidebarState} />
                  <AddDepartment updateSidebarState={updateSidebarState} />
                </>
              }
            ></Route>
            <Route
              path="manage_department"
              element={
                <>
                  <Sidebar sidebarState={sidebar} updateSidebarState={updateSidebarState} />
                  <ManageDepartment updateSidebarState={updateSidebarState} />
                </>
              }
            ></Route>
            <Route
              path="add_designation"
              element={
                <>
                  <Sidebar sidebarState={sidebar} updateSidebarState={updateSidebarState} />
                  <AddDesignation updateSidebarState={updateSidebarState} />
                </>
              }
            ></Route>
            <Route
              path="manage_designation"
              element={
                <>
                  <Sidebar sidebarState={sidebar} updateSidebarState={updateSidebarState} />
                  <ManageDesignation updateSidebarState={updateSidebarState} />
                </>
              }
            ></Route>
            <Route
              path="add_employee"
              element={
                <>
                  <Sidebar sidebarState={sidebar} updateSidebarState={updateSidebarState} />
                  <AddEmployee updateSidebarState={updateSidebarState} />
                </>
              }
            ></Route>
            <Route
              path="manage_employee"
              element={
                <>
                  <Sidebar sidebarState={sidebar} updateSidebarState={updateSidebarState} />
                  <ManageEmployee updateSidebarState={updateSidebarState} />
                </>
              }
            ></Route>
            <Route
              path="add_leave_type"
              element={
                <>
                  <Sidebar sidebarState={sidebar} updateSidebarState={updateSidebarState} />
                  <AddLeaveType updateSidebarState={updateSidebarState} />
                </>
              }
            ></Route>
            <Route
              path="manage_leave_type"
              element={
                <>
                  <Sidebar sidebarState={sidebar} updateSidebarState={updateSidebarState} />
                  <ManageLeaveType updateSidebarState={updateSidebarState} />
                </>
              }
            ></Route>
            <Route
              path="all_leave"
              element={
                <>
                  <Sidebar sidebarState={sidebar} updateSidebarState={updateSidebarState} />
                  <AllLeave updateSidebarState={updateSidebarState} />
                </>
              }
            ></Route>
            <Route
              path="pending_leave"
              element={
                <>
                  <Sidebar sidebarState={sidebar} updateSidebarState={updateSidebarState} />
                  <PendingLeave updateSidebarState={updateSidebarState} />
                </>
              }
            ></Route>
            <Route
              path="approve_leave"
              element={
                <>
                  <Sidebar sidebarState={sidebar} updateSidebarState={updateSidebarState} />
                  <ApproveLeave updateSidebarState={updateSidebarState} />
                </>
              }
            ></Route>
            <Route
              path="not_approve_leave"
              element={
                <>
                  <Sidebar sidebarState={sidebar} updateSidebarState={updateSidebarState} />
                  <NotApproveLeave updateSidebarState={updateSidebarState} />
                </>
              }
            ></Route>
            <Route
              path="add_user"
              element={
                <>
                  <Sidebar sidebarState={sidebar} updateSidebarState={updateSidebarState} />
                  <AddUser updateSidebarState={updateSidebarState} />
                </>
              }
            ></Route>
            <Route
              path="manage_user"
              element={
                <>
                  <Sidebar sidebarState={sidebar} updateSidebarState={updateSidebarState} />
                  <ManageUser updateSidebarState={updateSidebarState} />
                </>
              }
            ></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
