import React from 'react'
import products from '../data/ProductsData'
import Product from '../components/ui/Product'

export default function ProductPage() {

  return (
    <div className="container mx-auto my-8">
      <h1 className="text-4xl font-bold mb-8">Featured Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}
