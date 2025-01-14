import { Routes, Route } from 'react-router';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true)
  return (
    <>
      <Navbar />
      <main className='px-[5vw] py-4 bg-primaryBG-light dark:bg-primaryBG-dark'>
        <Routes>
          <Route path='/' element={ isLoggedIn ? <Dashboard/> :<Home /> } />
        </Routes>
      </main>
    </>
  )
}

export default App
