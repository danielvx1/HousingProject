import { useState } from 'react'
import './App.css'
import UserLoginPage from './components/UserLoginPage'
import { Router, Routes, Route } from 'react-router-dom'
import AdminPage from './pages/AdminPage'
import SocialPage from './pages/SocialPage'
import VolunteerPage from './pages/VolunteerPage'

function App() {

  return (
    <>    
      <Routes>
        <Route path="/" element={<UserLoginPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/social" element={<SocialPage />} />
        <Route path="/volunteer" element={<VolunteerPage />} />
      </Routes>
    </>
  )
}

export default App
