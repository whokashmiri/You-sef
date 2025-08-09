import { Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import { HublotPage } from './components/HublotPage'
import GraffPage from './components/GraffPage'
import ChopardPage from './components/ChopardPage'





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
