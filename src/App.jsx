import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header.jsx'
import Banner from './Components/Banner.jsx'
import Practice from './Components/Practice.jsx'
import OurProcedure from './Components/OurProcedure.jsx'
import Carts from './Components/Carts.jsx'
import VideoPage from './Components/VideoPage.jsx'
import Mobile from './Components/Mobile.jsx'
import Footer from './Components/Footer.jsx'


function App() {

  return (
    <div>

      <Header></Header>
      <Banner></Banner>
      <OurProcedure></OurProcedure>
      <Practice></Practice>
      <Carts></Carts>
      <VideoPage></VideoPage>
      <Mobile></Mobile>
      <Footer></Footer>


    </div>
  )
}

export default App
