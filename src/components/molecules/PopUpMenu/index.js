import React, { useEffect, useState } from "react";
import { accountCircle, bell, calendar, close, expandMore, explore, heart, logout, mountain, mountana, settings } from "assets";
import { Link, useNavigate } from "react-router-dom";
import { List, ListItem, ListItemPrefix, ListItemSuffix, Chip, Accordion, AccordionHeader, AccordionBody, Typography, Button, Drawer } from "@material-tailwind/react";
import { PopUpLogin, PopUpRegister } from "components";

export default function PopUpMenu(props) {
  const history = useNavigate();
  const [isLogin, setLogin] = useState(false);
  const [isPopUpLogin, setPopUpLogin] = useState(false);
  const [isPopUpRegister, setPopUpRegister] = useState(false);
  const [open, setOpen] = useState(0);

  useEffect(() => {
    let isLogin = localStorage.getItem("isLogin");
    setLogin(isLogin)

    if (props.isOpen) {
      // Save the current scroll position
      const scrollY = window.scrollY;

      // Disable scrolling on the body element
      document.body.classList.add("overflow-hidden", "xl:overflow-auto")

      // Restore the scroll position when the drawer is closed
      return () => {
        document.body.classList.remove("overflow-hidden", "xl:overflow-auto");
        window.scrollTo(0, scrollY);
      };
    }
  }, [props.isOpen]);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  let handleClickMenu = (url) => {
    props.onClose();
    history(url);
  }

  let handleLoginRegister = (status) => {
    props.onClose();

    if (status === "login") {
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

  let handleOpenNotification = () => {
    props.onClose();
    props.onOpenNotification(true)
  }

  return (
    <Drawer
      className="z-50 p-0"
      placement="right"
      open={props.isOpen}
      onClose={() => props.onClose()}
      size={1140}
      overlay={false}
    >
      <div className="modal-container bg-white z-50 overflow-y-hidden w-full h-full">
        <div className="container mx-auto modal-content text-left">
          <div className="px-4 py-4 lg:p-8">
            <div className="container mx-auto flex items-center justify-between w-full z-10">
              <a className="md:mr-8 md:p-6 md:pl-0" onClick={() => handleClickMenu("/mountain")}>
                <img className="w-40 lg:w-52" src={mountana} alt="Logo" />
              </a>
              <button className="bg-gray-200 hover:bg-gray-300 py-2 px-4 rounded-full" onClick={props.onClose}>
                <img
                  src={close}
                  alt="Bell"
                  className="w-6 h-6 inline-block"
                />
              </button>
            </div>
          </div>
          <hr className="mb-2 border-blue-gray-50" />
          <div>
            <List className="pl-1 pr-1">
              {!isLogin ?
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <Button variant="gradient" color="black" className="py-2 px-4 mr-2 rounded-full w-full h-10" onClick={() => handleLoginRegister("login")}>
                      Login
                    </Button>
                    <Button variant="gradient" color="black" className="py-2 px-4 ml-2 rounded-full w-full h-10" onClick={() => handleLoginRegister("register")}>
                      Register
                    </Button>
                  </div>
                </div>
                :
                <Accordion
                  open={open === 1}
                  icon={
                    <img
                      className={`mx-auto h-4 w-4 transition-transform ${open === 1 ? "rotate-180" : ""}`}
                      src={expandMore}
                      alt="Chevron"
                    />
                  }
                >
                  <ListItem className="p-0" selected={open === 1}>
                    <AccordionHeader onClick={() => handleOpen(1)} className="border-b-0 p-3">
                      <ListItemPrefix>
                        <img
                          className="w-8 h-8 m-auto rounded-full object-cover object-center"
                          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                          alt="Account"
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
                      <ListItem onClick={() => handleClickMenu("/wishlist")}>
                        <ListItemPrefix>
                          <img
                            src={heart}
                            alt="heart"
                            className="w-6 h-6 inline-block my-auto"
                          />
                        </ListItemPrefix>
                        Wishlist
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
              }
              <hr className="my-2 border-blue-gray-50" />
              <ListItem onClick={() => handleClickMenu("/explore")}>
                <ListItemPrefix>
                  <img
                    src={explore}
                    alt="Explore"
                    className="w-6 h-6 inline-block my-auto"
                  />
                </ListItemPrefix>
                Explore
              </ListItem>
              <ListItem onClick={() => handleClickMenu("/mountain")}>
                <ListItemPrefix>
                  <img
                    src={mountain}
                    alt="Mountain"
                    className="w-6 h-6 inline-block my-auto"
                  />
                </ListItemPrefix>
                Mountain
              </ListItem>
              {isLogin ?
                <div>
                  <ListItem onClick={() => handleClickMenu("/schedule")}>
                    <ListItemPrefix>
                      <img
                        src={calendar}
                        alt="Schedule"
                        className="w-6 h-6 inline-block my-auto"
                      />
                    </ListItemPrefix>
                    Schedule
                  </ListItem>
                  <ListItem onClick={() => handleOpenNotification()}>
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
                : null}
            </List>
          </div>
        </div>
      </div>
      <PopUpLogin isOpen={isPopUpLogin} isMobile={true} onClose={() => setPopUpLogin(false)} />
      <PopUpRegister isOpen={isPopUpRegister} isMobile={true} onClose={() => setPopUpRegister(false)} />
    </Drawer>

  );
}
