import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './component/Root.jsx';
import Home from './component/Home.jsx';
import Login from './component/Login.jsx';
import Authprovider from './component/Authprovider';
import Register from './component/Register';
import AboutUs from './component/AboutUs';
import CardDetails from './component/CardDetails';
import Private from './component/Private';
import Contact from './component/Contact';
import Error from './component/Error';
import VisitUs from './component/VisitUs';






const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<Error></Error>,
    children:[
      {
        path: "/",
        element:<Home></Home>
      }
      ,{
        path: "/login",
        element:<Login></Login>
      }
      ,{
        path: "/register",
        element:<Register></Register>
      }
      ,{
        path:"/aboutUs",
        element:<AboutUs></AboutUs>
      }
      ,
      {
        path:"/carddetails/:id",
        element:<Private><CardDetails></CardDetails></Private>,
        
      },
      {
        path:"/contact",
        element:<Contact></Contact>
      },
      {
        path:"/visit",
        element:<Private><VisitUs></VisitUs></Private>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Authprovider>
       <RouterProvider router={router} />
    </Authprovider>
      
    
  </React.StrictMode>,
)
