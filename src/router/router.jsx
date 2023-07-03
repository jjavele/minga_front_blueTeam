import { createBrowserRouter } from "react-router-dom";

import { Layout, SignIn, ChapterForm } from "./index";
import Home from "../pages/Home"

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
      }
    ],
  },
]);
export default router;
