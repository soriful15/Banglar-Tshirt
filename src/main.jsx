import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Componets/Home/Home';
import Main from './Componets/Layout/Main';
import OrderReview from './Componets/OrderReview/OrderReview';
import About from './Componets/About/About';
import Contact from './Componets/Contact/Contact';




const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
   
    children:[

      {
        path:'/',
        element: <Home></Home>,
        loader: ()=>fetch('data.json')
      },
      {
        path:'/review',
        element: <OrderReview></OrderReview>,
      },
      {
        path:'/about',
        element: <About></About>,
      },
      {
        path:'/contact',
        element: <Contact></Contact>,
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
 
   <RouterProvider router={router} />
 
)
