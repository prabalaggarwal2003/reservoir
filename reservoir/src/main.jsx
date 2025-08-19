import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from './pages/Home.jsx'
import WebD from './pages/WebD.jsx'
import AppD from './pages/AppD.jsx'
import Blockchain from './pages/Blockchain.jsx'
import CyberSec from './pages/CyberSec.jsx'
import DSA from'./pages/DSA.jsx'
import DevOps from './pages/DevOps.jsx'
import Opensource from './pages/Opensource.jsx'
import DigitalMarketing from './pages/DigitalMarketing.jsx'
import UIDesign from './pages/UIDesign.jsx'
import AI from './pages/AI.jsx'
import DataAnalysis from './pages/DataAnalysis.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Join from './pages/Join.jsx'
import Domains from'./pages/Domains.jsx'


const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/webd",
          element: <WebD />,
        },{
          path: "/appd",
          element: <AppD />,
        },
        {
          path: "/dsa",
          element: <DSA />,
        },
        {
          path: "/opensource",
          element: <Opensource />,
        },
        {
          path: "/cybersec",
          element: < CyberSec/>,
        },
        {
          path: "/devops",
          element: <DevOps />,
        },
        {
          path: "/blockchain",
          element: <Blockchain />,
        },
        {
          path: "/digitalmarketing",
          element: <DigitalMarketing />,
        },
        {
          path: "/uidesign",
          element: <UIDesign />,
        },
        {
          path: "/dataanalysis",
          element: <DataAnalysis />,
        },
        {
          path: "/ai",
          element: <AI />,
        },
        {
          path: "/about",
          element: <About/>
        },
        {
          path: "/contact",
          element: <Contact/>
        },
        {
          path: "/join",
          element: <Join/>
        },
        {
          path: "/domains",
          element: <Domains/>
        }
      ]
    }
  ]
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
)
