import React from "react";
import { Outlet } from "react-router-dom";

function AdminMiddleware() {
  let token =localStorage.getItem("token");
  if (!token){
    window.location.href="/";
  }
  return (
    <React.Fragment>
      <h1>Hello admin</h1>
      <Outlet />
    </React.Fragment>
  );
}

export default AdminMiddleware;

// we use middleware most of the time to protect routes
//Backend middleware → Protects routes, validates requests before they reach controllers.
//Frontend middleware → Protects routes/components, avoids showing things users shouldn’t see.
