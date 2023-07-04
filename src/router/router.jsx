import { createBrowserRouter } from "react-router-dom";

import { Layout, SignIn, ChapterForm } from "./index";
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
        path: "/signin",
        element: <SignIn />,
      },
      {
        path: "/chapter-form",
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
