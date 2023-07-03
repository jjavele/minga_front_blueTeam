import { createBrowserRouter } from "react-router-dom";

import { Layout, Login } from "./index";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [{}],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
export default router;
