import { useState } from 'react'
import './App.css'
import UserLoginPage from './components/UserLoginPage'
import { Router, Routes, Route } from 'react-router-dom'
import AdminPage from './pages/AdminPage'
import SocialPage from './pages/SocialPage'
import VolunteerPage from './pages/VolunteerPage'
import Property from './components/Property'

function App() {

  return (
    <>    
      <Routes>
        <Route path="/" element={<UserLoginPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/social" element={<SocialPage />} />
        <Route path="/volunteer" element={<VolunteerPage />} />
        <Route path="/create-property" element={<Property />} />
      </Routes>
    </>
  )
}

export default App
