import { createBrowserRouter, Navigate } from "react-router-dom";


import { Layout, Login, ChapterForm, Register } from "./index";
import Home from "../pages/Home";

import NotAllow from "../pages/NotAllow";
import { element } from "prop-types";

let token = true;


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: token ? <Register /> : <Navigate to="*"/>
      },
      {
        path: "/:manga_id/chapter-form",
        element: <ChapterForm />,
      },
    ],
  },
  {
    path: "*",
    element: <NotAllow />,
  },
]);
export default router;
