import { createBrowserRouter, Navigate } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import ProtectectionWhenLogged from "./ProtectectionWhenLogged";
import { Layout, Login, ChapterForm, Register, MangaForm, Author, Mangas, Pages} from "./index";
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
        element: <MangaForm />,
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
        ),
      },

      {
        path: "/register",
        element: (
          <ProtectedRoute>
            <Register />
          </ProtectedRoute>
        ),
      },
      {
        path: "/:manga_id/chapter-form",
        element: <ChapterForm />,
      },
      {
        path: "/chapter/:id/:manga_id/:page",
        element: (
          <ProtectedRoute>
            <Pages />
          </ProtectedRoute>
        ) 
        path: "/mangas",
        element: (
          <ProtectectionWhenLogged>
            <Mangas />
          </ProtectectionWhenLogged>
        ),
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
        ),
      },
    ],
  },
]);
export default router;
