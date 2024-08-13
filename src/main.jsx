import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './pages/About.jsx';
import Contact from './pages/contact.jsx';
import "./index.css"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path:"/about",
    element:<About />,
  },
  {
    path: "/contact",
    element:<Contact />
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
