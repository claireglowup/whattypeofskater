import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./style/index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./component/Home.tsx";
import ErrorPage from "./component/ErrorPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  { path: "baker", element: <h1>COMING SOON</h1> },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
