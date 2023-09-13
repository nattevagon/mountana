import React, { useEffect, useState } from 'react'
import { bell, calendar, heart, menuBar, mountana, search } from '../../../assets'
import { Link } from 'react-router-dom'
import PopUpMenu from '../PopUpMenu';
import PopUpLogin from '../PopUpLogin';

export default function Navigation() {
  const [isPopUpMenu, setPopUpMenu] = useState(false);
  const [isPopUpLogin, setPopUpLogin] = useState(false);
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

  return (
    <nav className={'px-6 py-4 lg:px-8 lg:py-4 flex items-center justify-between fixed top-0 w-full z-10 transition duration-300' + (scrollTop > 20 ? ' bg-gray-100 shadow-md' : 'bg-transparent')}>
      {/* Logo */}
      <Link className='md:mr-8 md:p-6' to={process.env.PUBLIC_URL}>
        <img className='w-40 lg:w-60' src={mountana} alt='Logo' />
      </Link>

      {/* Navigation Desktop */}
      <div className='bg-gray-100 p-4 rounded-full hidden lg:flex '>
        <div className="relative mx-2 h-full">
          <input
            type="text"
            placeholder="Search a destination"
            className="bg-gray-200 pl-4 pr-12 py-2.5 rounded-full w-64 focus:outline-none focus:border-gray-400 h-12"
          />
          <img
            src={search}
            alt="Search"
            className="absolute inset-y-2.5 right-3 w-6 h-7 pointer-events-none"
          />
        </div>
        <Link to={process.env.PUBLIC_URL + "/wishlist"}>
          <button className="bg-gray-200 hover:bg-gray-300 text-white py-2 px-4 mx-2 rounded-full w-14 h-12">
            <img
              src={heart}
              alt="Wishlist"
              className="w-6 h-6 inline-block"
            />
          </button>
        </Link>
        <Link to={process.env.PUBLIC_URL + "/schedule"}>
          <button className="bg-gray-200 hover:bg-gray-300 text-white py-2 px-4 mx-2 rounded-full w-14 h-12">
            <img
              src={calendar}
              alt="Calender"
              className="w-6 h-6 inline-block"
            />
          </button>
        </Link>
        <button className="bg-gray-200 hover:bg-gray-300 text-white py-2 px-4 mx-2 rounded-full w-14 h-12">
          <img
            src={bell}
            alt="Bell"
            className="w-6 h-6 inline-block"
          />
        </button>
        <button className="bg-gray-200 hover:bg-gray-300 text-white py-2 px-4 mx-2 rounded-full h-12 flex" onClick={() => setPopUpLogin(true)}>
          <img
            className="w-8 h-8 m-auto rounded-full object-cover object-center"
            src="https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
            alt="nature image"
          />
          <p className='ml-2 text-black my-auto'>User Name</p>
        </button>
      </div>

      {/* Navigation Apps */}
      <button className='lg:hidden bg-gray-200 hover:bg-gray-300 text-white py-2 px-4 rounded-full' onClick={() => setPopUpMenu(true)}>
        <img
          src={menuBar}
          alt="Bell"
          className="w-6 h-6 inline-block"
        />
      </button>
      <PopUpMenu isOpen={isPopUpMenu} onClose={() => setPopUpMenu(false)} />
      <PopUpLogin isOpen={isPopUpLogin} onClose={() => setPopUpLogin(false)}/>
    </nav>
  )
}
