import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { NavBar } from './componentes/NavBar/NavBar.jsx'
import { GlobalStyle } from "./GlobalStyle.jsx"
import { Home } from './pages/Home/Home.jsx'
import { Search } from './pages/Search/Search.jsx'
import { Signup } from './pages/Signup/Signup.jsx';
import { Signin } from './pages/Signin/Signin.jsx';
import { Profile } from './pages/Profile/Profile.jsx'
import { Postagem } from './componentes/Postagem/Postagem.jsx';

const Router = createBrowserRouter([
  {
    path: "/",
    element: <NavBar />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/search/:name",
        element: <Search />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },

      {
        path: "/postagem",
        element: <Postagem />,
      },
    ],
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/signin",
    element: <Signin />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyle />
    <RouterProvider router={Router} />
  </React.StrictMode>
);
