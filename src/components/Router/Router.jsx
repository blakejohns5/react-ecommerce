import { Routes, Route } from 'react-router';
import Home from '../../pages/Home/Home';
import Checkout from '../../pages/Checkout/Checkout';
import Product from '../../pages/Product/Product';
import User from '../../pages/User/User';
import NotFound from '../../pages/NotFound/NotFound';


import React from 'react'
import TestBtn from './TestBtn';
import Success from '../../pages/Checkout/Success';
import Cancel from '../../pages/Checkout/Cancel';

function Router(props) {
const { products, searchTerms, favState, favDispatch, checkoutStage, setCheckoutStage, wishlistInit } = props;

  return (
    <>
      <Routes>
        <Route path='/' element={<Home products={products} searchTerms={searchTerms} favState={favState} favDispatch={favDispatch} wishlistInit={wishlistInit} />} exact />
        <Route path='/product/:id' element={<Product products={products} favState={favState} favDispatch={favDispatch} />}  />
        <Route path='/checkout' element={<Checkout checkoutStage={checkoutStage} setCheckoutStage={setCheckoutStage} />}  />
        <Route path='/user' element={<User favState={favState} favDispatch={favDispatch} />}  />
        <Route path='/test' element={<TestBtn />} />
        <Route path='/success.html' element={<Success />} />
        <Route path='/cancel.html' element={<Cancel />} />
        <Route path='*' element={<NotFound />}  />
      </Routes>
    </>
  )
}

export default Router