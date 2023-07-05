import { createBrowserRouter, Navigate } from "react-router-dom";


import { Layout, Login, ChapterForm, Register, MangaForm } from "./index";
import Home from "../pages/Home";

import NotAllow from "../pages/NotAllow";


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
        path: "/manga-form",
        element: <MangaForm />
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: token ? <Register /> : <Navigate to="*" />
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
