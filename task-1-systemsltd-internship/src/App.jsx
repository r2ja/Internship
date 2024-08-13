import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Title from './Components/title'
import Filler from './Components/basicComponent'
function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Title/>
      
      <Filler/>
    </>
  )
}

export default App
