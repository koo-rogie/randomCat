import Layout from "@/components/Layout";
import Home from "@/pages/Home";
import RandomCat from "@/pages/RandomCat";
import ErrorPage from "@pages/ErrorPage";
import { createBrowserRouter, Navigate } from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "home", element: <Navigate to="/" /> },
      { path: "/", element: <Home /> },
      { path: "randomcat", element: <RandomCat /> },
    ],
  },
]);

export default router;
