import React, { useEffect, useState } from 'react'
import { bell, calendar, heart, menuBar, mountana, search } from '../../../assets'
import { Link } from 'react-router-dom'
import PopUpMenu from '../PopUpMenu';

export default function Navigation() {
  const [isPopUpMenu, setPopUpMenu] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = event => {
      setScrollTop(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const openModal = () => {
    setPopUpMenu(true);
  };

  const closeModal = () => {
    setPopUpMenu(false);
  };

  return (
    <nav className={'px-6 py-4 lg:px-8 lg:py-4 flex items-center justify-between fixed top-0 w-full z-10'+(scrollTop > 32 ? ' bg-gray-100 shadow-md' : '')}>
      {/* Logo */}
      <Link className='md:mr-8 md:p-6' to='/'>
        <img className='w-40 lg:w-60' src={mountana} alt='Logo' />
      </Link>

      {/* Navigation Desktop */}
      <div className='bg-gray-100 p-4 rounded-full hidden lg:flex'>
        <div className="relative mx-2">
          <input
            type="text"
            placeholder="Search a destination"
            className="bg-gray-200 pl-4 pr-12 py-2.5 rounded-full w-64 focus:outline-none focus:border-gray-400"
          />
          <img
            src={search}
            alt="Search"
            className="absolute inset-y-2.5 right-3 w-6 h-6 pointer-events-none"
          />
        </div>
        <button className="bg-gray-200 hover:bg-gray-300 text-white py-2 px-4 mx-2 rounded-full">
          <img
            src={heart}
            alt="Favorite"
            className="w-6 h-6 inline-block"
          />
        </button>
        <button className="bg-gray-200 hover:bg-gray-300 text-white py-2 px-4 mx-2 rounded-full">
          <img
            src={calendar}
            alt="Calender"
            className="w-6 h-6 inline-block"
          />
        </button>
        <button className="bg-gray-200 hover:bg-gray-300 text-white py-2 px-4 mx-2 rounded-full">
          <img
            src={bell}
            alt="Bell"
            className="w-6 h-6 inline-block"
          />
        </button>
      </div>

      {/* Navigation Apps */}
      <button className='lg:hidden bg-gray-200 hover:bg-gray-300 text-white py-2 px-4 rounded-full' onClick={openModal}>
        <img
            src={menuBar}
            alt="Bell"
            className="w-6 h-6 inline-block"
          />
      </button>
      <PopUpMenu isOpen={isPopUpMenu} onClose={closeModal} />
    </nav>
  )
}
