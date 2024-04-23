import React from 'react'
import { Outlet, Router} from 'react-router-dom'
function Layout() {
  return (
    <>
    <Router>
    <Outlet/>
    </Router>
     
    </>
  )
}

export default Layout
