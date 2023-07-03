import { createBrowserRouter } from "react-router-dom";

//import { Layout, Login } from "./index";
import { Layout, Login, ChapterForm } from "./index";
import Home from "../pages/Home";

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
        path: "/chapter-form",
        element: <ChapterForm />,
      },
    ],
  },
]);
export default router;
