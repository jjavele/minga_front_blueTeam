import { createBrowserRouter } from "react-router-dom";


import { Layout, Login, ChapterForm, MangaForm } from "./index";
import Home from "../pages/Home"
import NotAllow from "../pages/NotAllow";




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
        path: "/:manga_id/chapter-form",
        element: <ChapterForm />,
      },
      {
        path: "*",
        element: <NotAllow />
      },
      {
        path: "/manga-form",
        element: <MangaForm />
      }
    ],
  },
]);
export default router;
