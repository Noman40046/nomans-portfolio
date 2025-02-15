import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './MainLayout';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Journey from './components/Journey';
import Services from './components/Services';
import Allprojects from './components/AllProjects';



 const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    children: [
      {
        path:"",
        element:<Home/>
      },
      {
        path:"about",
        element:<About/>
      },
      {
        path:"journey",
        element:<Journey/>
      }, 
      {
        path:"services",
        element:<Services/>
      },
      {
        path:"projects",
        element:<Allprojects/>
      },
      {
        path:"contact",
        element:<Contact/>
      },
    ]
  },
]); 

/* const router = createBrowserRouter (
  createRoutesFromElements(
    <Route path='/' element={<MainLayout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/photos' element={<Photos/>}/>
      <Route path='/contact' element={<Contact/>}/>
    </Route>
     
  )
)
 */

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
