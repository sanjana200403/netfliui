import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Row from './component/Row'
import Banner from './component/Banner/Banner'
import Navbar from './component/Navbar/Navbar'
import { Routes ,Route} from 'react-router-dom'
import LandingPage from './component/LandingPage/LandingPage'
import Home from './component/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

   
     <Routes>
      
     <Route exact path='/' element={<Home/>} />
      <Route exact path='/landing' element={<LandingPage/>} />
     </Routes>
    </>
  )
}

export default App
