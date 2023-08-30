import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './components/Main/Main';
import SignUp from './components/SignUp/SignUp';
import Login from './components/Login/Login';
import ForgotPassword from './components/ForgotPassword/ForgotPassword';
import Home from './components/Home/Home';


const router = createBrowserRouter([
{
   path:'/',
   element:<Main></Main>,
   children:[
    {
      path:'/signUp',
      element:<SignUp></SignUp>
    },
    {
      path:'/login',
      element:<Login></Login>,
    },
    {
      path:'/forgotPassword',
      element:<ForgotPassword></ForgotPassword>,
    },
    {
      path:'/Home',
      element:<Home></Home>
    }
   ]
},

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
