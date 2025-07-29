import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ChangeHeading from './Componats/ChangeHeading'
import Calculator from './Componats/Calculator'
import Vegetables from './Componats/vegetables'
import ContactForm from './Componats/Contact/ContactForm'

function App() {
 

  return (
    <>
    <ContactForm/>
      <Vegetables/>
      <ChangeHeading/>
      <Calculator/>
      
    </>
  )
}

export default App
