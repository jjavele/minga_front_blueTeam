import React from "react";
import ReactDOM from "react-dom/client";
/* import App from "./App.jsx"; */
import { RouterProvider } from "react-router-dom";
import "./index.css";

import router from "./router/router";
import { Provider } from 'react-redux'
import { store } from './redux/store'
/*
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
*/
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router}/>
  </Provider>,
)
