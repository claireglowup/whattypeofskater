import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./style/index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./component/Home.tsx";
import { TeamPage } from "./component/TeamPage.tsx";
import { ErrorPage } from "./component/ErrorPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  { path: "team/:teamName", element: <TeamPage /> },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
