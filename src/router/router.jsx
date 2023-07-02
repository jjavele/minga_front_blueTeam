import { createBrowserRouter } from "react-router-dom";

import { Layout, SignIn } from "./index";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/signin",
        element: <SignIn />,
      },
    ],
  },
]);
export default router;
