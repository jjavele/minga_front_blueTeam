import { createBrowserRouter } from "react-router-dom";


//import { Layout, Login } from "./index";
import { Layout, Login, ChapterForm } from "./index";
import Home from "../pages/Home";


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

      {
        path: "/chapter-form",
        element: <ChapterForm />,
      },


        path: "/login",
        element: <Login />,
      },

      {
        path: "/:manga_id/chapter-form",
        element: <ChapterForm/>,
      },
      {
        path: "*",
        element: <NotAllow/>
      }

    ],
  },
]);
export default router;
