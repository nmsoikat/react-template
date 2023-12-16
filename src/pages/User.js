import React from 'react'

export default function User() {
  return (
    <div class="container mx-auto p-8">
      <h1 class="text-2xl font-bold mb-4">User List</h1>
      <table class="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th class="py-2 px-4 border-b">ID</th>
            <th class="py-2 px-4 border-b">Name</th>
            <th class="py-2 px-4 border-b">Email</th>
            <th class="py-2 px-4 border-b">Role</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="py-2 px-4 border-b">1</td>
            <td class="py-2 px-4 border-b">John Doe</td>
            <td class="py-2 px-4 border-b">john.doe@example.com</td>
            <td class="py-2 px-4 border-b">Admin</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b">2</td>
            <td class="py-2 px-4 border-b">Jane Doe</td>
            <td class="py-2 px-4 border-b">jane.doe@example.com</td>
            <td class="py-2 px-4 border-b">User</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b">3</td>
            <td class="py-2 px-4 border-b">Alice Johnson</td>
            <td class="py-2 px-4 border-b">alice.johnson@example.com</td>
            <td class="py-2 px-4 border-b">User</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b">4</td>
            <td class="py-2 px-4 border-b">Bob Smith</td>
            <td class="py-2 px-4 border-b">bob.smith@example.com</td>
            <td class="py-2 px-4 border-b">Admin</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
