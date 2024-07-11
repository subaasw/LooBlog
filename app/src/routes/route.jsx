import { createBrowserRouter, Outlet } from "react-router-dom";
import Home from "@/pages/Home";
import Register from "@/pages/Register";
import Login from "@/pages/Login";
import Single from "@/pages/Single";
import Write from "@/pages/Write";
import PasswordReset from "@/pages/PasswordReset";
import Contact from "@/pages/Contact";
import Page404 from "@/pages/404";

import Footer from "@/components/Footer";
import Header from "@/components/Header";

const Layout = () => {
  return (
    <>
      <Header />
      <main className="grow">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      ,
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/post/:id",
        element: <Single />,
      },
      {
        path: "/write",
        element: <Write />,
      },
      {
        path: "*",
        element: <Page404 />,
      },
    ],
  },
  {
    path: "/reset-password",
    element: <PasswordReset />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <Register />,
  },
]);

export default router;
