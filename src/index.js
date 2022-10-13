import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import "bootstrap/dist/css/bootstrap.min.css";
import { Helmet } from "react-helmet";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <Helmet>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.perfect-scrollbar/1.5.5/perfect-scrollbar.min.js"></script>
      <script src="assets/js/app.js"></script>
      <script src="assets/js/main.js"></script>
    </Helmet>
  </React.StrictMode>
);
