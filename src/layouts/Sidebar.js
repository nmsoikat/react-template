import React from 'react'
import { Link } from 'react-router-dom'

export default function Sidebar() {
  return (
    <div className="w-64 bg-gray-800 text-white p-4">
      <h2 className="text-2xl font-semibold mb-4">Dashboard</h2>
      {/* Add navigation links */}
      <ul>
        <li className="mb-2">
          <Link to="/dashboard" className="text-gray-300 hover:text-white">
            Dashboard
          </Link>
        </li>
        <li className="mb-2">
          <Link to="/dashboard/users" className="text-gray-300 hover:text-white">
            Users
          </Link>
        </li>
        <li className="mb-2">
          <Link to="/dashboard/products" className="text-gray-300 hover:text-white">
            Products
          </Link>
        </li>
        {/* Add more navigation links as needed */}
      </ul>
    </div>
  )
}
