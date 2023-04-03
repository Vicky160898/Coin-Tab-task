import React from "react";
import { Navigate } from "react-router-dom";

export default function PrivateRoute({ children }) {
    let user = JSON.parse(localStorage.getItem("userInfo"));
  if (!user) {
    return <Navigate to="/login" />;
  }
  return children;
}
