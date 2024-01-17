import React from 'react'
import Header from './Header/Header'
import Font from './Header/Font'
import Footer from './Footer/Footer'
import ProductGrid from './Main/ProductGrid'
import ProductsCSS from '../css/Products.css'

export default function Products() {
  return (
    <div>
      <h1>Thiss products</h1>
        <Font />
        <Header />
        <ProductGrid />
        <Footer />

    </div>
  )
}
