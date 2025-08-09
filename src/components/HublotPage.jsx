import React from 'react'
import Header from './Header'
import ProductCarousel from './ProductCarousel'
import NewsletterSection from './NewsletterSection'
import Footer from './Footer'
import HublotShow from './HublotShow'

export const HublotPage = () => {
  return (
    <>
    <Header/>
    <HublotShow/>
    <ProductCarousel/>
    <NewsletterSection/>
    <Footer/>
    
    </>
  )
}
