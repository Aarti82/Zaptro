import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Product from './Pages/Product';
import About from './Pages/About'
import Cart from './Pages/Cart';
import Navbar from './Components/Navbar'
import Contact from './Pages/Contact';
import axios from 'axios'
import Footer from './Components/Footer'
import SingleProduct from './Pages/SingleProduct'
import CategoryProduct from './Pages/CategoryProduct'
import { useCart } from './Context/CartContext'
import ProtectedRoute from './Components/ProtectedRoute';


const App = () => {
  const [location, setLocation] = useState()
  const [openDropdown, setOpenDropdown] = useState(false)
  const { cartItem, setCartItem } = useCart()

  const getLocation = async () => {
    navigator.geolocation.getCurrentPosition(async pos => {
      const { latitude, longitude } = pos.coords

      const url = `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
      try {
        const location = await axios.get(url)
        const exactLocation = location.data.address
        setLocation(exactLocation)
        setOpenDropdown(false)


      } catch (error) {
        console.log(error);

      }

    })
  }

  useEffect(() => {
    getLocation()
  }, [])


  useEffect(() => {
    const storedCart = localStorage.getItem('cartItem')
    if (storedCart) {
      setCartItem(JSON.parse(storedCart))
    }
  }, []);


  useEffect(() => {
    localStorage.setItem('cartItem', JSON.stringify(cartItem))
  }, [cartItem])

  return (
    <BrowserRouter>
      <Navbar location={location} getLocation={getLocation} openDropdown={openDropdown} setOpenDropdown={setOpenDropdown} />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/product' element={<Product />}></Route>
        <Route path='/product/:id' element={<SingleProduct />}></Route>
        <Route path='/category/:category' element={<CategoryProduct />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/cart' element={
          <Cart location={location} getLocation={getLocation} />
       } />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App;