import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Signup from './Auth/Signup/Signup';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './Auth/Login/Login';
import App from './App';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login/>
  },
   {
    path: "/signup",
    element: <Signup/>
  },
  {
      path:"/dashboard",
      element:<App/>

     }
  
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
