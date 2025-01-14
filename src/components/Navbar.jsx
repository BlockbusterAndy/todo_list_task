import  { useState, useEffect } from 'react';
import logomark from '../assets/icons/logomark.svg';
import { Menu, SunMoon, Search, LayoutGrid } from 'lucide-react';

const Navbar = () => {

  const [theme, setTheme] = useState('light');
  const [showMenu, setShowMenu] = useState(true);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  }

  // Apply the theme to the document's root
  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  // Toggle theme function
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };


  return (
    <nav className='bg-primaryBG-light dark:bg-primaryBG-dark px-[5vw] py-4 flex justify-between items-center'>
      <div className='flex items-center gap-6'>
        <button onClick={()=>{toggleMenu}} className='text-primaryBG-dark dark:text-primaryBG-light' ><Menu size={35}/></button>
        <div className='flex justify-center items-center gap-2 py-2 font-mono'>
          <img src={logomark} alt='logomark' className='w-12 h-12' />
          <h1 className='text-4xl text-[#3F9142] font-bold'>DoIt</h1>
        </div>
      </div>

      <div className='flex items-center gap-6'>
        <button className='text-black dark:text-white'>
          <Search size={28} />
        </button>
        <button className='text-black dark:text-white'>
          <LayoutGrid size={28} />
        </button>
        <button onClick={toggleTheme} className='text-black dark:text-white'>
          <SunMoon size={28} />
        </button>
      </div>
    </nav>
  )
}

export default Navbar