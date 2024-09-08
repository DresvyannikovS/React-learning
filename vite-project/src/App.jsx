import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import logo from "./img/logo.svg"

import  { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import { Header } from './components/Header'
import { Menu_hidden } from './components/Menu_hidden'
import { Catalog } from './components/Catalog'
import { Footer } from './components/Footer'

function App() {

  return (
    <>
      < Header logo />

      < Menu_hidden />

      < Catalog />

      < Footer logo={ logo }  />
    </>
  )
}

export default App
