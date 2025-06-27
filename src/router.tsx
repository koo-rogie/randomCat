import Layout from "@/components/Layout";
import Home from "@/pages/Home";
import RandomCat from "@/pages/RandomCat";
import { createBrowserRouter, Navigate } from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "home", element: <Navigate to="/" /> },
      { path: "home", element: <Home /> },
      { path: "randomcat", element: <RandomCat /> },
    ],
  },
]);

export default router;
