import React from "react"
import { Outlet, Navigate } from "react-router-dom";

const ProtectedRoute = (props) => {
  return (
    localStorage.getItem('loggedUser') ? props.children : < Navigate to={"/signin"} replace />
  )
};

export default ProtectedRoute;