import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import logo from "./img/dub.png"

import { Header } from './components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      < Header logo={ logo }  />
    </>
  )
}

export default App
