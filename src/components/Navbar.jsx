import  { useState, useEffect } from 'react';
import logomark from '../assets/icons/logomark.svg';
import { Menu, SunMoon } from 'lucide-react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleSidebar } from '../redux/slices/interfaceSlice';

const Navbar = () => {

  const token = useSelector((state) => state.auth.token);
  const [theme, setTheme] = useState('light');
  const [showMenu, setShowMenu] = useState(true);
  const dispatch = useDispatch();

  const toggleMenu = () => {
    console.log('clicked menu');
    setShowMenu(!showMenu);
    dispatch(toggleSidebar());
  }

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };


  return (
    <nav className='bg-primaryBG-light dark:bg-primaryBG-dark px-[5vw] py-4 flex justify-between items-center'>
      <div className='flex items-center gap-6'>
        {token && <button onClick={toggleMenu} className='text-primaryBG-dark dark:text-primaryBG-light' ><Menu size={35}/></button>}
        <div className='flex justify-center items-center gap-2 py-2 font-mono'>
          <img src={logomark} alt='logomark' className='w-12 h-12' />
          <h1 className='text-4xl text-[#3F9142] font-bold'>DoIt</h1>
        </div>
      </div>

      <div className='flex items-center gap-6'>
        <button onClick={toggleTheme} className='text-black dark:text-white'>
          <SunMoon size={28} />
        </button>
      </div>
    </nav>
  )
}

export default Navbar