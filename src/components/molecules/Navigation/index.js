import React, { useEffect, useState } from 'react'
import { accountCircle, bell, calendar, heart, logout, menuBar, mountana, search, settings } from '../../../assets'
import { Link } from 'react-router-dom'
import PopUpMenu from '../PopUpMenu';
import PopUpLogin from '../PopUpLogin';
import { Menu, MenuHandler, MenuList, MenuItem, Button, List, ListItem, ListItemPrefix } from '@material-tailwind/react';
import PopUpRegister from '../PopUpRegister';

export default function Navigation() {
  const [isLogin, setLogin] = useState(false);
  const [isPopUpMenu, setPopUpMenu] = useState(false);
  const [isPopUpLogin, setPopUpLogin] = useState(false);
  const [isPopUpRegister, setPopUpRegister] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = event => {
      setScrollTop(window.scrollY);
    };

    let isLogin = localStorage.getItem("isLogin");
    setLogin(isLogin)

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  let handleLogout = () => {
    localStorage.removeItem("isLogin");
    window.location.reload();
  }

  return (
    <nav className={'px-4 py-4 lg:px-8 lg:py-4 fixed top-0 w-full z-10 transition duration-300' + (scrollTop > 20 ? ' bg-gray-100 shadow-md' : 'bg-transparent')}>
      <div className='container flex items-center justify-between mx-auto'>
        <Link className='md:mr-8 md:p-6 md:pl-0' to={process.env.PUBLIC_URL}>
          <img className='w-40 lg:w-52' src={mountana} alt='Logo' />
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
          {isLogin ?
            <div className='flex'>
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
              <Menu placement="bottom-end">
                <MenuHandler>
                  <button className="bg-gray-200 hover:bg-gray-300 text-white py-2 px-4 mx-2 rounded-full h-12 flex">
                    <img
                      className="w-8 h-8 m-auto rounded-full object-cover object-center"
                      src="https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
                      alt="nature image"
                    />
                    {/* <p className='ml-2 text-black my-auto hidden xlg:flex'>User Name</p> */}
                  </button>
                </MenuHandler>
                <MenuList>
                  <List className='outline-none'>
                    <ListItem>
                      <ListItemPrefix>
                        <img
                          src={accountCircle}
                          alt="Account"
                          className="w-6 h-6 inline-block my-auto"
                        />
                      </ListItemPrefix>
                      Account
                    </ListItem>
                    <ListItem>
                      <ListItemPrefix>
                        <img
                          src={settings}
                          alt="Settings"
                          className="w-6 h-6 inline-block my-auto"
                        />
                      </ListItemPrefix>
                      Settings
                    </ListItem>
                    <ListItem onClick={() => handleLogout()}>
                      <ListItemPrefix>
                        <img
                          src={logout}
                          alt="Logout"
                          className="w-6 h-6 inline-block my-auto"
                        />
                      </ListItemPrefix>
                      Logout
                    </ListItem>
                  </List>
                </MenuList>
              </Menu>
            </div>
            :
            <div className='flex'>
              <Button variant="gradient" color="black" className="py-2 px-4 mx-2 rounded-full w-24" onClick={() => setPopUpLogin(true)}>
                Login
              </Button>
              <Button variant="gradient" color="black" className="py-2 px-4 mx-2 rounded-full w-24" onClick={() => setPopUpRegister(true)}>
                Register
              </Button>
            </div>
          }
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
        <PopUpLogin isOpen={isPopUpLogin} onClose={() => setPopUpLogin(false)} />
        <PopUpRegister isOpen={isPopUpRegister} onClose={() => setPopUpRegister(false)} />
      </div>
    </nav>
  )
}
