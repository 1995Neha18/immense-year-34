import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Homepage';
import Login from '../pages/Login';
import Cart from '../pages/Cart';


const AllRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/cart" element={<Cart />} />
            </Routes>
        </div>
       
    );
};

export default AllRoutes;