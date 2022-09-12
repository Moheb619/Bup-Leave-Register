import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Helmet } from "react-helmet";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <Helmet>
      <script src="assets/js/feather-icons/feather.min.js"></script>
      <script src="assets/vendors/perfect-scrollbar/perfect-scrollbar.min.js"></script>
      <script src="assets/js/app.js"></script>
      <script src="assets/vendors/chartjs/Chart.min.js"></script>
      <script src="assets/vendors/apexcharts/apexcharts.min.js"></script>
      <script src="assets/js/pages/dashboard.js"></script>
      <script src="assets/js/main.js"></script>
    </Helmet>
  </React.StrictMode>
);
