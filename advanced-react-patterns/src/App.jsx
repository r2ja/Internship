import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Component from './HOC/comp'
import UseCount from './HOC/wrappedcomp'
import Fetcher from './RenderProps/renderProp'
import ToggleButton from './CompoundComponents/ToggleButton'
import ToggleGroup from './CompoundComponents/ToggleGroup'

const ComponentWithCount = UseCount(Component);

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <ComponentWithCount /> */}
    {/* <Fetcher /> */}

    <ToggleGroup>
      <ToggleButton> Name </ToggleButton>
      <ToggleButton> Age </ToggleButton>
      <ToggleButton> Number </ToggleButton>
    </ToggleGroup>
      
    </>
  )
}

export default App
