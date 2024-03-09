import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Home from './pages/Home'
import Camp from './components/Camp'


function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
