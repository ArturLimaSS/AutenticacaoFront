import { lazy } from "react";
import { Navigate } from "react-router-dom";
/****Layouts*****/
const FullLayout = lazy(() => import("../layouts/FullLayout/FullLayout.js"));
/****End Layouts*****/

/*****Pages******/
const Dashboard1 = lazy(() => import("../views/dashboards/Dashboard1.js"));

/*****Tables******/
const BasicTable = lazy(() => import("../views/tables/BasicTable.js"));

// form elements
const ExAutoComplete = lazy(() =>
  import("../views/FormElements/ExAutoComplete.js")
);
const ExButton = lazy(() => import("../views/FormElements/ExButton.js"));
const ExCheckbox = lazy(() => import("../views/FormElements/ExCheckbox.js"));
const ExRadio = lazy(() => import("../views/FormElements/ExRadio.js"));
const ExSlider = lazy(() => import("../views/FormElements/ExSlider.js"));
const ExSwitch = lazy(() => import("../views/FormElements/ExSwitch.js"));
// form layouts
const FormLayouts = lazy(() => import("../views/FormLayouts/FormLayouts.js"));

/*****Routes******/

/****My Imports ******/
import { useAuth } from "../components/Auth/Context/AuthContext";
import userServices from "../Api/apiServices.js";
import React, { useEffect, useState } from "react";


const ThemeRoutes = () => {
  const { isAuthenticated } = useAuth(); // Assuming your useAuth hook returns an object with an `isAuthenticated` property
  return [
    {
      path: "/",
      element: <FullLayout />,
      children: [
        {
          path: "dashboards/dashboard1",
          exact: true,
          element: isAuthenticated ? <Dashboard1 /> : <Navigate to="/login" />,
        },
        { path: "tables/basic-table", element: <BasicTable /> },
        { path: "/form-layouts/form-layouts", element: <FormLayouts /> },
        { path: "/form-elements/autocomplete", element: <ExAutoComplete /> },
        { path: "/form-elements/button", element: <ExButton /> },
        { path: "/form-elements/checkbox", element: <ExCheckbox /> },
        { path: "/form-elements/radio", element: <ExRadio /> },
        { path: "/form-elements/slider", element: <ExSlider /> },
        { path: "/form-elements/switch", element: <ExSwitch /> },
      ],
    },
  ];
};

export default ThemeRoutes;
