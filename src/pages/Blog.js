import React from 'react'
import Navbar from '../components/frontend/Navbar'
import Footer from '../components/frontend/Footer'
import CryptoNewsBlog from './CryptoNewsBlog'

export default function Blog() {
  return (
    <>
    <Navbar /> 
  
      <section>
        <div className="title-wrapper text-center">
          <h1 className="h2 section-title text-center">
              Trending Crypto
          </h1>
        </div>
       <CryptoNewsBlog />
    </section>
      <Footer />
    </>
  )
}
