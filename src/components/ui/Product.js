import React from 'react'

export default function product({ product }) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img src={product.image} alt={product.title} className="w-full h-48 object-cover" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{product.title}</div>
        <p className="text-gray-700 text-base">{product.description}</p>
      </div>
      <div className="px-6 py-4">
        <span className="text-gray-700 text-base">${product.price}</span>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded float-right">
          Add to Cart
        </button>
      </div>
    </div>
  )
}
