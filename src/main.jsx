import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import "./index.css";
import Edit from "./pages/Edit.jsx";
import Home from "./pages/Home/Home.jsx";
import Layout from "./Route.jsx"; // تأكد أنه يحتوي على <Outlet />

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "edit/:id",
          element: <Edit />,
        },
      ],
    },
  ],
  {
    basename: "/Crud-With-Json-Server",
  }
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
