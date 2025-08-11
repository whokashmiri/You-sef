import Header from './Header'
import NewsletterSection from './NewsletterSection'
import Footer from './Footer'
import Hero from './Hero'

import ChopardItemsList from './ChopardItemsList'

const ChopardPage = () => {
  return (
    <>
     <Header/>
<Hero/>
  <ChopardItemsList/>
    <NewsletterSection/>
    <Footer/>
    </>
  )
}

export default ChopardPage