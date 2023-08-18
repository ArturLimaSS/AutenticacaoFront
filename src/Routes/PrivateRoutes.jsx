import React from "react";
import { Navigate, Route, BrowserRouter, Routes } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

const PrivateRoute = ({ condition, element, redirectPath }) => {
  const { user, isLogged } = useAuth();
  const auth_token = localStorage.getItem("auth_token");

  if (condition === true) {
    return <Routes><Route element={element} /></Routes>;
  } else {
    return <Navigate to={redirectPath} />;
  }
};

export default PrivateRoute;
