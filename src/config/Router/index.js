import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, Mountain, MountainDetail, Wishlist } from '../../pages';
import { Footer, Navigation } from '../../components';

export default function Router() {
  return (
    <BrowserRouter>
      <Navigation/>
      <Routes>
        <Route
          path='/'
          element={
            <Home/>
          }
        />
        <Route
          path='/mountain'
          element={
            <Mountain/>
          }
        />
        <Route
          path='/wishlist'
          element={
            <Wishlist/>
          }
        />
        <Route
          path='/mountain/:id'
          element={
            <MountainDetail/>
          }
        />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}
