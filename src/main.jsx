import React from 'react'
import ReactDOM from 'react-dom/client'
  

import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import LandingPage from './components/LandingPage.jsx'
import LoginScreen from './components/LoginScreen.jsx'
import SignupScreen from './components/SignupScreen.jsx'
import Profilepage from './components/Profilepage.jsx'
import Layout from './components/Layout.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='LandingPage' element={<LandingPage />} />
      <Route path='LoginScreen' element={<LoginScreen />} />
      <Route path='SignupScreen' element={<SignupScreen />} />
      <Route path='Profilepage' element={<Profilepage />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
