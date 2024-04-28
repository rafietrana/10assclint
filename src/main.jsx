import React from 'react'
import ReactDOM from 'react-dom/client'
 
import './index.css'
// tostyfi
import { ToastContainer  } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './Layout/Layout';
import Home from './Component/Home';
import Login from './Component/Login';
import Register from './Component/Register';
import AuthProvider from './Component/AuthProvider';
import AddCraft from './Component/AddCraft';
import PrivetRoute from './Component/PrivetRoute';
import ErrorPage from './Component/ErrorPage';
import ViewDetails from './Component/ViewDetails';
 
 

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/addcraft',
        element: <PrivetRoute><AddCraft></AddCraft></PrivetRoute>
      },
      {
        path: '/viewdetails/:id',
        element: <ViewDetails></ViewDetails>,
         loader: ({params})=> fetch(`http://localhost:5000/finddata/${params.id}`)

      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
    <ToastContainer />
  </React.StrictMode>,
)
