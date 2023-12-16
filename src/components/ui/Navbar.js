import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav class="bg-gray-800 p-4">
      <div class="container mx-auto flex items-center justify-between">

        <Link to="/" class="text-white text-2xl font-bold">YourLogo</Link>

        <div class="space-x-4">
          <Link to="/" class="text-white">Home</Link>
          <Link to="#" class="text-white">Shop</Link>
          <Link to="#" class="text-white">Categories</Link>
          <Link to="#" class="text-white">Contact</Link>
        </div>

        <div class="flex items-center space-x-4">
          <Link to="/auth/login" class="text-white">Login</Link>
          <Link to="/auth/signup" class="text-white">Signup</Link>
          <Link to="#" class="text-white">Cart</Link>
        </div>
      </div>
    </nav>
  )
}
