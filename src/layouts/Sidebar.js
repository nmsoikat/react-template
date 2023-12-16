import React from 'react'

export default function Sidebar() {
  return (
    <div className="w-64 bg-gray-800 text-white p-4">
      <h2 className="text-2xl font-semibold mb-4">Dashboard</h2>
      {/* Add navigation links */}
      <ul>
        <li className="mb-2">
          <a href="#" className="text-gray-300 hover:text-white">
            Home
          </a>
        </li>
        <li className="mb-2">
          <a href="#" className="text-gray-300 hover:text-white">
            Analytics
          </a>
        </li>
        {/* Add more navigation links as needed */}
      </ul>
    </div>
  )
}
