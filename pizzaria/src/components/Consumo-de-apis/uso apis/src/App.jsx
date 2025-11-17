import React, { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UsoApis from './components/UsoApis.jsx'
import Nombre from './components/Nombre.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <UsoApis></UsoApis> */}
      <Nombre></Nombre>
    </>
  )
}

export default App
