import React, { useEffect, useState } from 'react'
import { accountCircle, bell, calendar, close, heart, logout, menuBar, mountain, mountana, search, settings } from '../../../assets'
import { PopUpLogin, PopUpRegister, PopUpMenu, Notification } from '../../../components'
import { Link } from 'react-router-dom'
import { Menu, MenuHandler, MenuList, MenuItem, Button, List, ListItem, ListItemPrefix, Badge } from '@material-tailwind/react';

export default function Navigation() {
  const [isLogin, setLogin] = useState(false);
  const [isPopUpMenu, setPopUpMenu] = useState(false);
  const [isPopUpLogin, setPopUpLogin] = useState(false);
  const [isPopUpRegister, setPopUpRegister] = useState(false);
  const [isNotification, setNotification] = useState(false);
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
    <nav className={'px-4 py-4 fixed top-0 w-full z-10 transition duration-300' + (scrollTop > 20 ? ' bg-gray-100 shadow-md' : 'bg-transparent')}>
      <div className='container flex items-center justify-between mx-auto relative'>
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
              <Link to={process.env.PUBLIC_URL + "/mountain"}>
                <button className="bg-gray-200 hover:bg-gray-300 text-white py-2 px-4 mx-2 rounded-full w-14 h-12">
                  <img
                    src={mountain}
                    alt="Mountain"
                    className="w-6 h-6 inline-block"
                  />
                </button>
              </Link>
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
              <Badge content="3" className='top-2 right-4'>
                <button className="bg-gray-200 hover:bg-gray-300 text-white py-2 px-4 mx-2 rounded-full w-14 h-12" onClick={() => setNotification(true)}>
                  <img
                    src={bell}
                    alt="Bell"
                    className="w-6 h-6 inline-block"
                  />
                </button>
              </Badge>
              <Menu placement="bottom-end" animate={{ mount: { y: 16 }, unmount: { y: 0 } }}>
                <MenuHandler>
                  <button className="bg-gray-200 hover:bg-gray-300 text-white py-2 px-4 mx-2 rounded-full h-12 flex">
                    <img
                      className="w-8 h-8 m-auto rounded-full object-cover object-center"
                      src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                      alt="Account"
                    />
                    {/* <p className='ml-2 text-black my-auto hidden xlg:flex'>User Name</p> */}
                  </button>
                </MenuHandler>
                <MenuList className='rounded-xlg'>
                  <List className='outline-none p-0'>
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
              <Link to={process.env.PUBLIC_URL + "/mountain"}>
                <button className="bg-gray-200 hover:bg-gray-300 text-white py-2 px-4 mx-2 rounded-full w-14 h-12">
                  <img
                    src={mountain}
                    alt="Mountain"
                    className="w-6 h-6 inline-block"
                  />
                </button>
              </Link>
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
        <PopUpMenu isOpen={isPopUpMenu} onClose={() => setPopUpMenu(false)} onOpenNotification={(status) => setNotification(status)} />
        <PopUpLogin isOpen={isPopUpLogin} onClose={() => setPopUpLogin(false)} />
        <PopUpRegister isOpen={isPopUpRegister} onClose={() => setPopUpRegister(false)} />
        <Notification isOpen={isNotification} onClose={() => setNotification(false)} />
      </div>
    </nav>
  )
}
