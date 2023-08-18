import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignIn from "../Components/Auth/Login";
import SingUp from "../Components/Auth/SingUp";
import { RoutesList } from "./RoutesConfig";

export const AppRoutes = () => {
    const auth_token = localStorage.getItem('auth_token');
    return (
        <Router>
            <div>
                <Routes>
                    {RoutesList.map((route, index) => (
                        <Route key={index} path={route.path} element={auth_token ? route.element : < SignIn />} />
                    ))}
                    <Route path="signup" element={< SingUp />} />
                </Routes>
            </div>
        </Router>
    );
};
