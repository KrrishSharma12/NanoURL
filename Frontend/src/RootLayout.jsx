import React from 'react'
import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage';
import LoginForm from './components/LoginForm';
import Navbar from './components/Navbar';
import { Outlet } from '@tanstack/react-router'

const App = () => {
  return (
    <>
    <Navbar />
      <Outlet />
      </>
  )
}

export default App;


