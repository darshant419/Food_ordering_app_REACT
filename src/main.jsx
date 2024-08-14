import React,{lazy,Suspense} from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import BodyEle from './component/body';
// import AboutUs from './component/AboutUs';
import Contact from './component/ContactUs.jsx';
import Error from './component/Error.jsx';
import RestoMenu from './component/RestoMenu.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


const AboutUs = lazy(()=>import("./component/AboutUs") 
)

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [

      {
        path: "/",
        element: <BodyEle />,
      
  
      },
      {
      path: "/AboutUs",
      element: <Suspense fallback = {"this is fallback...."} ><AboutUs /></Suspense> ,

    },
    {
      path: "/ContactUs",
      element: <Contact />

    },
    {
      path: "/restaurants/:resID",
      element: <RestoMenu/>,
     
    }
  ],
    errorElement: <Error/>,
  },

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>,
)
