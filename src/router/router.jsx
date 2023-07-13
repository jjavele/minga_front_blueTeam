import { createBrowserRouter, Navigate } from "react-router-dom";


import ProtectedRoute from "./ProtectedRoute";
import ProtectectionWhenLogged from "./ProtectectionWhenLogged";



import { Layout, Login, ChapterForm, Register, MangaForm, Author, Mangas} from "./index";

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
        path: "/manga-form",
        element: <MangaForm />
      },
      {

        path: "/login",
        element: (
          <ProtectedRoute>
            <Login />
          </ProtectedRoute>
        ),
      },
      {
        path: "/:manga_id/chapter-form",
        element: (
          <ProtectectionWhenLogged>
            <ChapterForm />
          </ProtectectionWhenLogged>
        )
      },

      {
        path: "/register",
        element: (
          <ProtectedRoute>
            <Register />
          </ProtectedRoute>
        ) 
      },
      {
        path: "/:manga_id/chapter-form",
        element: <ChapterForm />,
      },
      {
        path: "*",
        element: <NotAllow />,
      },
      {
        path: "/me",
        element: (
          <ProtectectionWhenLogged>
            <Author />
          </ProtectectionWhenLogged>
          )
      }

]);
export default router;
