import React from 'react'
import ReactDOM from 'react-dom/client'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import IndexPage from './pages/IndexPage';

import "./styles/fonts.scss"
import "./styles/global.scss"
import "./styles/reset.scss"
import "./styles/utilities.scss"

const router = createBrowserRouter([
  {
    path: "/",
    element: <IndexPage/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
