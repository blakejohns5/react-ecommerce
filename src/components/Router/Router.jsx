import { Routes, Route } from 'react-router';
import Home from '../../pages/Home/Home';
import Checkout from '../../pages/Checkout/Checkout';
import Product from '../../pages/Product/Product';
import User from '../../pages/User/User';
import NotFound from '../../pages/NotFound/NotFound';


import React from 'react'

function Router(props) {
const { products, searchTerms, addToStorage, removeFromStorage, totalItems, totalCost, favState, favDispatch, checkoutStage, setCheckoutStage, wishlistInit } = props;

  return (
    <>
      <Routes>
        <Route path='/' element={<Home products={products} searchTerms={searchTerms} addToStorage={addToStorage} removeFromStorage={removeFromStorage} totalItems={totalItems} totalCost={totalCost} favState={favState} favDispatch={favDispatch} wishlistInit={wishlistInit} />} exact />
        <Route path='/product/:id' element={<Product products={products} addToStorage={addToStorage} removeFromStorage={removeFromStorage} totalCost={totalCost} totalItems={totalItems} favState={favState} favDispatch={favDispatch} />}  />
        <Route path='/checkout' element={<Checkout addToStorage={addToStorage} removeFromStorage={removeFromStorage} totalItems={totalItems} totalCost={totalCost} checkoutStage={checkoutStage} setCheckoutStage={setCheckoutStage} />}  />
        <Route path='/user/' element={<User favState={favState} favDispatch={favDispatch} />}  />
        <Route path='*' element={<NotFound />}  />
      </Routes>
    </>
  )
}

export default Router