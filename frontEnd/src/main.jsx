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

import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import UnProtectedRoute from "./components/UnProtectedRoute/UnProtectedRoute";

import { UserAuthContextProvider } from "./context/UserAuthContext";
import { useUserAuth } from "./context/UserAuthContext";

const router = createBrowserRouter([
{
   path:'/',
   element:<Main></Main>,
   children:[
    {
      path: '/',
      element: <ProtectedRoute>
             <Home />
          </ProtectedRoute>,        
    },
    {
      path:'/signUp',
      element:<UnProtectedRoute>
                <SignUp></SignUp>
              </UnProtectedRoute> 
    },
    {
      path:'/login',
      element: <UnProtectedRoute>
                  <Login></Login>
                </UnProtectedRoute> 
    },
    {
      path:'/forgotPassword',
      element:<ForgotPassword></ForgotPassword>,
    },
    {
      path: '/home',
      element: <ProtectedRoute>
             <Home />
          </ProtectedRoute>,
    }
   ]
},

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserAuthContextProvider> {/* Wrap your entire app in UserAuthContextProvider */}
      <RouterProvider router={router} />
    </UserAuthContextProvider>
  </React.StrictMode>,
)
