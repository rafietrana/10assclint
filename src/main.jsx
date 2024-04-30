import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
// tostyfi
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./Component/Home";
import Login from "./Component/Login";
import Register from "./Component/Register";
import AuthProvider from "./Component/AuthProvider";
import AddCraft from "./Component/AddCraft";
import PrivetRoute from "./Component/PrivetRoute";
import ErrorPage from "./Component/ErrorPage";
import ViewDetails from "./Component/ViewDetails";
import ShowAllCard from "./Component/ShowAllCard";
import AllViewDetails from "./Component/AllViewDetails";
import CraftList from "./Component/CraftList";
import Update from "./Component/Update";

import SubCategory from "./Component/SubCategory";
import SubView from "./Component/SubView";
import WeLoading from "./Component/WeLoading";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: (
          <WeLoading>
            <Home></Home>
          </WeLoading>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/addcraft",
        element: (
          <PrivetRoute>
            <AddCraft></AddCraft>
          </PrivetRoute>
        ),
      },
      {
        path: "/allcraft",
        element: <ShowAllCard></ShowAllCard>,
        loader: () =>
          fetch("https://my-assignment-10-server-two.vercel.app/postdata"),
      },
      {
        path: "/craftlist/:email",
        element: (
          <PrivetRoute>
            <CraftList></CraftList>
          </PrivetRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://my-assignment-10-server-two.vercel.app/mycard/${params.email}`
          ),
      },
      {
        path: "/viewdetails/:id",
        element: <ViewDetails></ViewDetails>,
        loader: ({ params }) =>
          fetch(
            `https://my-assignment-10-server-two.vercel.app/finddata/${params.id}`
          ),
      },

      {
        path: "/subcards/:category",
        element: <SubCategory></SubCategory>,
        loader: ({ params }) =>
          fetch(
            `https://my-assignment-10-server-two.vercel.app/findsub/${params.category}`
          ),
      },
      {
        path: "/suview/:id",
        element: <SubView></SubView>,
        loader: ({ params }) =>
          fetch(
            `https://my-assignment-10-server-two.vercel.app/finddata/${params.id}`
          ),
      },

      {
        path: "/allviewdetails/:id",
        element: (
          <PrivetRoute>
            {" "}
            <AllViewDetails></AllViewDetails>
          </PrivetRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://my-assignment-10-server-two.vercel.app/finddata/${params.id}`
          ),
      },
      {
        path: "update/:id",
        element: <Update></Update>,
        loader: ({ params }) =>
          fetch(
            `https://my-assignment-10-server-two.vercel.app/finddata/${params.id}`
          ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider
        fallbackElement={
          <div className="w-9/12 mx-auto flex justify-center items-center h-screen ">
            <span className="loading loading-bars loading-lg"></span>
          </div>
        }
        router={router}
      />
    </AuthProvider>
    <ToastContainer />
  </React.StrictMode>
);
