import React from 'react'
import {BrowserRouter, Routes, Route } from  'react-router-dom';
import Home from '../pages/home/Home';
import Search from '../pages/search/Search';
import User from '../pages/user/User';
import Favourites from '../pages/favourites/Favourites';

const router = () => {

  return (

    <BrowserRouter>
        <Routes>
            <Route element={<Home/>} path='/'/>
            <Route element={<Search/>} path={'/search/:search'}/>
            <Route element={<User/>} path={'/user/:user'}/>
            <Route element={<Favourites/>} path={'/favourites'}/>
            
        </Routes>
    
    </BrowserRouter>

  )
}

export default router