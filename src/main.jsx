import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './layouts/Main/Main';
import Catagory from './Pages/Home/Catagory/Catagory';
import NewsLayout from './layouts/NewsLayout/NewsLayout';
import News from './Pages/News/News/News';
import AuthProvider from './provider/AuthProvider';
import LoginLayout from './layouts/LoginLayout';
import Login from './Pages/Login';
import Register from './Pages/Register';
import PrivetRoute from './Pages/PrivetRoute';
import Trems from './Pages/Trems';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,

    children: [
      {
        path: '/',
        element: <Catagory></Catagory>,
        loader: () => fetch('https://dragon-news-server-mirza2018.vercel.app/news')
      },
      {
        path: '/category/:id',
        element: <Catagory></Catagory>,
        loader: ({ params }) => fetch(`https://dragon-news-server-mirza2018.vercel.app/categories/${params.id}`)
      }
    ]
  },
  {
    path: '/news',
    element: <NewsLayout></NewsLayout>,
    children: [
      {
        path: '/news/:id',
        element: <PrivetRoute><News></News></PrivetRoute>,
        loader: ({ params }) => fetch(`https://dragon-news-server-mirza2018.vercel.app/news/${params.id}`)
      }
    ]
  },
  {
    path: '/login',
    element: <LoginLayout></LoginLayout>,
    children: [
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/login/register",
        element: <Register></Register>
      },
      {
        path: '/login/register/trems',
        element: <Trems></Trems>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)
