import {
  createBrowserRouter,
  RouterProvider,Outlet
} from "react-router";
import React from 'react'


import Footer from '../components/Footer'
import Nav from '../components/Nav'
import Home from '../pages/Home'
import Carrer from '../pages/Carrer'
import About from '../pages/About'
import Support from '../pages/Support'


function Layout(){
return(
  <>
  <Nav />
  <Outlet />
  <Footer />
  </>
)
}


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children:[

{
  path:"/", element: <Home />
},
{
  path:"about",element:<About />
},
{
  path:"carrer",element:<Carrer />
},
{
  path:"support",element:<Support />
}

    ]
  },
]);



function Router() {
  return (
    <>
     <RouterProvider router={router} />
    </>
  )
}

export default Router