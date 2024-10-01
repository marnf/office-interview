import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header.jsx'
import Banner from './Components/Banner.jsx'
import Practice from './Components/Practice.jsx'
import OurProcedure from './Components/OurProcedure.jsx'


function App() {

  return (
    <>
     <Header></Header>
     <Banner></Banner>
     <OurProcedure></OurProcedure>
     <Practice></Practice>
    
    
    </>
  )
}

export default App
