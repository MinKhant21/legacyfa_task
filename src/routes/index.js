import React, { useContext } from "react";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Dashboard from "../pages/Dashboard.js";
import Layout from "../pages/components/Layout.js";

export default function Routes() {

  let routes = [
    {
      path: "/",
      element: <Layout/>,
      children: [
        {
          path: "",
          element:<Dashboard/>,
        },
      ],
    },
    
  ];
  const router = createBrowserRouter(routes);

  return   <RouterProvider router={router} />;
}