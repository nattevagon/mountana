import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, Mountain, MountainDetail } from '../../pages';
import { Navigation } from '../../components';

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
          path='/mountain/:id'
          element={
            <MountainDetail/>
          }
        />
         <Route
          path='/order'
          element={
            <Mountain/>
          }
        />
         <Route
          path='/wishlist'
          element={
            <Mountain/>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}
