import "./App.css";
import Admin from "./pages/Admin";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Employee from "./pages/Employee";
import Login from "./pages/Login";
import DashboardAdmin from "./components/DashboardAdmin";
import DashboardEmployee from "./components/DashboardEmployee";
import ApplyLeave from "./components/ApplyLeave";
import LeaveStatus from "./components/LeaveStatus";
import SidebarEmployee from "./components/SidebarEmployee";
import { useState } from "react";
import Sidebar from "./components/SidebarAdmin";
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
          <Route path="/admin" element={<Admin></Admin>} panel="admin"></Route>
          <Route path="/employee" element={<Employee></Employee>} panel="employee"></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
