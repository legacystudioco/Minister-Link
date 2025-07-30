// src/App.tsx
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AuthProvider } from '@/contexts/AuthContext'
import { ProtectedRoute } from '@/components/ProtectedRoute'
import { Login } from '@/pages/Login'
import { SignUp } from '@/pages/SignUp'
import SpeakerDashboard from '@/pages/SpeakerDashboard'
import ChurchDashboard from '@/pages/ChurchDashboard'
import Index from '@/pages/Index'

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          
          {/* Protected Routes */}
          <Route 
            path="/dashboard/speaker" 
            element={
              <ProtectedRoute requiredRole="Speaker">
                <SpeakerDashboard />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/dashboard/church" 
            element={
              <ProtectedRoute requiredRole="Church">
                <ChurchDashboard />
              </ProtectedRoute>
            } 
          />
          
          {/* Fallback route */}
          <Route path="*" element={<div>Page not found</div>} />
        </Routes>
      </Router>
    </AuthProvider>
  )
}

export default App