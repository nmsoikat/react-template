import React from 'react'
import ProductPage from '../pages/ProductPage'
import Navbar from '../components/ui/Navbar'
import Footer from '../components/ui/Footer'

export default function WebsiteLayout() {
  return (
    <>
      <Navbar />
      <ProductPage />
      <Footer />
    </>
  )
}
