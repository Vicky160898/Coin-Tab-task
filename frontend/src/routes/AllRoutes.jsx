import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Task from "../pages/Task";
import PrivateRoute from "../component/PrivateRoute";

export default function AllRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<Home />} />
      <Route
        path="/"
        element={
          <PrivateRoute>
            <Task />
          </PrivateRoute>
        }
      />
    </Routes>
  );
}
