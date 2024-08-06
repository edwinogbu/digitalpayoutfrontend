
import React from 'react'
import InstructionSection from '../components/frontend/InstructionSection'
import AboutSection from '../components/frontend/AboutSection'
import Navbar from '../components/frontend/Navbar'
import Footer from '../components/frontend/Footer'
import TrendingCrypto from './../components/frontend/TrendingCrypto'
import MarketUpdate from './MarketUpdate'


export default function MarketCapScreen() {
  return (
    <>
    <Navbar /> 
  
      <section>
        <div className="title-wrapper text-center">
          <h1 className="h2 section-title text-center">
              Trending Crypto
          </h1>
        </div>
        <TrendingCrypto />
    </section>
     
        <MarketUpdate />
    {/* <InstructionSection /> */}
    <AboutSection />
      
    {/* </article>
  </main> */}
  <Footer />
    </>
  )
}
