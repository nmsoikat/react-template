import React, { useEffect } from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'
import DashboardRoutes from '../routes/dashboard.route'
import Sidebar from './Sidebar'
import Footer from '../pages/Footer'

export default function AuthLayout() {
  return (
    <>
      <div className="flex h-screen bg-gray-100">
        {/* Sidebar */}
        <Sidebar />

        {/* Content */}
        {/* <Outlet /> */}
        <Routes>
          {DashboardRoutes.map((route, i) => <Route key={i} path={route.path} element={route.component} ></Route>)}
        </Routes>
      </div>


      <Footer />
    </>
  )
}
