import React from 'react'
import ProductDash from './ProductDash';
import Header from './Header';
// import ShoppingCart from '../../components/ShoppingCart/ShoppingCart';


function Home(props) {
  const { products, searchTerms, setSearchTerms, addToStorage, removeFromStorage, totalItems, totalCost, favState, favDispatch, wishlistInit } = props;
  

  return (    
    <>
      <main className='home'>
        <Header />
        <ProductDash products={products} searchTerms={searchTerms} setSearchTerms={setSearchTerms} addToStorage={addToStorage} totalItems={totalItems} totalCost={totalCost} favState={favState} favDispatch={favDispatch} wishlistInit={wishlistInit} />
        {/* <ShoppingCart addToStorage={addToStorage} removeFromStorage={removeFromStorage} totalItems={totalItems} totalCost={totalCost} /> */}
      </main>
    </>
  )
}

export default Home;
