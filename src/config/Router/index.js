import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Mountain, MountainDetail, Schedule, Wishlist } from "../../pages";
import { Footer, Navigation } from "../../components";

export default function Router() {
  return (
    <BrowserRouter>
      <Navigation/>
      <Routes>
        <Route exact path={`${process.env.PUBLIC_URL}/`} element={ <Home/> } />
        <Route exact path={`${process.env.PUBLIC_URL}/mountain`} element={ <Mountain/> } />
        <Route exact path={`${process.env.PUBLIC_URL}/wishlist`} element={ <Wishlist/> } />
        <Route exact path={`${process.env.PUBLIC_URL}/schedule`} element={ <Schedule/> } />
        <Route exact path={`${process.env.PUBLIC_URL}/mountain/:id`} element={ <MountainDetail/> } />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}
