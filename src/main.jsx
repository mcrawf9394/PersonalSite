import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import App from './components/App.jsx'
import Home from './components/Home.jsx'
import Contact from './components/Contact.jsx'
import Projects from './components/Projects.jsx'
import './stylesheet/index.css'
const Router = createBrowserRouter([
  {
    element: <App />,
    path: '*',
    children: [
      {
        path: '',
        element: <Home />
      },
      {
        path: 'projects',
        element: <Projects />
      },
      {
        path: 'contact',
        element: <Contact />
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={Router} />
  </React.StrictMode>,
)