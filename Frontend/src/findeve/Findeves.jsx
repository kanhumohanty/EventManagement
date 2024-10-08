import React from 'react'
import Navbar from '../components/Navbar'
import Findeve from '../components/Findeve'
import Footer from '../components/Footer'


function Findeves() {
  return (
    <>
    <Navbar/>
   <div className="min-h-screen"> <Findeve/></div>
    <Footer/>
    
    
    </>
  )
}

export default Findeves