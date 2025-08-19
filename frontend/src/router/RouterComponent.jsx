import React from "react";
import { Routes, Route } from "react-router-dom";
import HomeComponents from "../components/pages/HomeComponents";
import AdminDashboard from "../components/admin/AdminDashboard";
import AdminMiddleware from "../middleware/AdminMiddleware";
import LoginComponent from "../auth/LoginComponent";
function RouterComponent() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomeComponents />} />
        <Route path="/admin" element={<AdminMiddleware />}>
          <Route path="/admin/" element={<AdminDashboard />} />
        </Route>
        <Route path="/login" element={<LoginComponent />} />
      </Routes>
    </div>
  );
}

export default RouterComponent;
