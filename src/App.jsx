import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import HomePage from './components/HomePage'
import EvmPracticePage from './components/EvmPracticePage'

function App() {
  return (
    <div className="font-sans bg-white min-h-screen">
      {/* Navbar */}
      <Navbar />
      
      {/* Routes */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/evm-practice" element={<EvmPracticePage />} />
      </Routes>
    </div>
  )
}

export default App
