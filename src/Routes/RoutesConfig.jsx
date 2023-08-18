import React from "react";
import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom';
import { Index } from "../Components/Index/Index";
import SingUp from "../Components/Auth/SingUp";
import SignIn from "../Components/Auth/Login";

export const RoutesList = [
    { path: '/', element: <Index /> }
    // { path: '/signup', elemment: <SingUp /> },
    // { path: '/signin', element: <SignIn /> }
]
