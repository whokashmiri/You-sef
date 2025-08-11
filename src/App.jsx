import { Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import { HublotPage } from './components/HublotPage'
import GraffPage from './components/GraffPage'
import ChopardPage from './components/ChopardPage'
import ItemDetails from './components/ItemDetails'
import ContactUs from './components/Contact'
import ChopardJewelry from './components/ChopardJewelry'
import AzzaJewelry from './components/AzzaJewelry'
import GraffJewelry from './components/GraffJewelry'
import AboutUs from './components/AboutUs.jsx'






function App() {

  return (
   <>
   <Routes>
     <Route path='/' element={<Home/>}/>
      <Route path='*' element={<Home/>}/>

      <Route path="/home" element={<Home />} />
      <Route path="/hublot" element={<HublotPage />} />
      <Route path="/graff" element={<GraffPage />} />
      <Route path="/chopard" element={<ChopardPage/>} />
       <Route path="/item/:id" element={<ItemDetails />} />

        <Route path="/contact" element={<ContactUs/>} />
        <Route path="/choprdjewelry" element={<ChopardJewelry/>} />
        <Route path="/azza" element={<AzzaJewelry/>} />
        <Route path="/graffjewelry" element={<GraffJewelry/>} />
        <Route path="/about" element={<AboutUs/>} />





      {/* <Route path="/odoo-integration" element={<OodoIntegration />} /> */} 
   </Routes>
   

   {/* <Hero/>
   <Jewellary/>
   <ImageVideoSection/>
   <PreciousTimeSection/>
  
   <Luc/>
   <ProductCarousel3/>
    <ExploreCreations/>
    <ProductCarousel4/>
    <MaisonChopard/>
    // <ServicesSection/>*/}
    
   </>
  )
}

export default App
