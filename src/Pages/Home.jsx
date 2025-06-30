import React, { useContext, useEffect } from 'react'
import Carousel from '../Components/Carousel'
import { DataProvider } from '../Context/DataContext'
import MidBanner from '../Components/MidBanner'
import Features from '../Components/Features'
import { Import } from 'lucide-react'

const Home = () => {
  
  return (
    <div className='overflow-x-hidden'>
      <Carousel />
      <MidBanner/>
      <Features/>
    </div>
  )
}

export default Home;