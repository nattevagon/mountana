import React, { useEffect, useState } from 'react'
import { accountCircle, bell, calendar, close, heart, logout, mountain, mountana, settings } from '../../../assets';
import { Link, useNavigate } from 'react-router-dom';
import { List, ListItem, ListItemPrefix, ListItemSuffix, Chip, Accordion, AccordionHeader, AccordionBody, Typography, Button } from "@material-tailwind/react";
import PopUpLogin from '../PopUpLogin';
import PopUpRegister from '../PopUpRegister';

export default function PopUpMenu({ isOpen, onClose }) {
  const history = useNavigate();
  const [isLogin, setLogin] = useState(false);
  const [isPopUpLogin, setPopUpLogin] = useState(false);
  const [isPopUpRegister, setPopUpRegister] = useState(false);
  const [open, setOpen] = useState(0);

  useEffect(() => {
    let isLogin = localStorage.getItem("isLogin");
    setLogin(isLogin)
  }, []);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  let handleClickMenu = (url) => {
    onClose();
    history(url);
  }

  let handleLoginRegister = (status) => {
    onClose();

    if (status === 'login') {
      setPopUpLogin(true)
    }
    else {
      setPopUpRegister(true)
    }
  }

  let handleLogout = () => {
    localStorage.removeItem("isLogin");
    window.location.reload();
  }

  return (
    <div className={`${isOpen ? 'fixed inset-0 flex items-center justify-center z-50' : 'hidden'}`} >
      <div className="modal-container bg-white z-50 overflow-y-auto lg:flex lg:items-center w-full h-full">
        <div className="modal-content text-left">
          <div className='px-4 py-4 lg:px-8 lg:py-4 flex items-center justify-between w-full z-10'>
            <img className='w-40 lg:w-60' src={mountana} alt='Logo' onClick={() => handleClickMenu('/mountain')} />
            <button className='lg:hidden bg-gray-200 hover:bg-gray-300 py-2 px-4 rounded-full' onClick={onClose}>
              <img
                src={close}
                alt="Bell"
                className="w-6 h-6 inline-block"
              />
            </button>
          </div>
          <div className="py-4 px-8">
            <List>
              {!isLogin ?
                <div>
                  <div className='flex items-center justify-between mb-4'>
                    <Button variant="gradient" color="black" className="py-2 px-4 mr-2 rounded-full w-full h-10" onClick={() => handleLoginRegister('login')}>
                      Login
                    </Button>
                    <Button variant="gradient" color="black" className="py-2 px-4 ml-2 rounded-full w-full h-10" onClick={() => handleLoginRegister('register')}>
                      Register
                    </Button>
                  </div>
                  <hr className="my-2 border-blue-gray-50" />
                </div>
                :
                <div>
                  <Accordion
                    open={open === 1}
                  // icon={
                  //   <ChevronDownIcon
                  //     strokeWidth={2.5}
                  //     className={`mx-auto h-4 w-4 transition-transform ${open === 1 ? "rotate-180" : ""}`}
                  //   />
                  // }
                  >
                    <ListItem className="p-0" selected={open === 1}>
                      <AccordionHeader onClick={() => handleOpen(1)} className="border-b-0 p-3">
                        <ListItemPrefix>
                          <img
                            className="w-8 h-8 m-auto rounded-full object-cover object-center"
                            src="https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
                            alt="nature image"
                          />
                        </ListItemPrefix>
                        <Typography color="blue-gray" className="mr-auto font-normal">
                          User Name
                        </Typography>
                      </AccordionHeader>
                    </ListItem>
                    <AccordionBody className="py-1">
                      <List className="p-0">
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
                    </AccordionBody>
                  </Accordion>
                  <hr className="my-2 border-blue-gray-50" />
                  <ListItem onClick={() => handleClickMenu('/wishlist')}>
                    <ListItemPrefix>
                      <img
                        src={heart}
                        alt="Wishlist"
                        className="w-6 h-6 inline-block my-auto"
                      />
                    </ListItemPrefix>
                    Wishlist
                  </ListItem>
                  <ListItem onClick={() => handleClickMenu('/schedule')}>
                    <ListItemPrefix>
                      <img
                        src={calendar}
                        alt="Schedule"
                        className="w-6 h-6 inline-block my-auto"
                      />
                    </ListItemPrefix>
                    Schedule
                  </ListItem>
                  <ListItem>
                    <ListItemPrefix>
                      <img
                        src={bell}
                        alt="Notification"
                        className="w-6 h-6 inline-block my-auto"
                      />
                    </ListItemPrefix>
                    Notification
                    <ListItemSuffix>
                      <Chip value="14" size="sm" variant="ghost" color="blue-gray" className="rounded-full" />
                    </ListItemSuffix>
                  </ListItem>
                </div>
              }
              <ListItem onClick={() => handleClickMenu('/mountain')}>
                <ListItemPrefix>
                  <img
                    src={mountain}
                    alt="Mountain"
                    className="w-6 h-6 inline-block my-auto"
                  />
                </ListItemPrefix>
                Mountain
              </ListItem>
            </List>
          </div>
        </div>
      </div>
      <PopUpLogin isOpen={isPopUpLogin} onClose={() => setPopUpLogin(false)} />
      <PopUpRegister isOpen={isPopUpRegister} onClose={() => setPopUpRegister(false)} />
    </div>
  );
}
