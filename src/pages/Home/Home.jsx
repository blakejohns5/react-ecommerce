import React from 'react'
import ProductDash from './ProductDash';
import Header from './Header';



function Home(props) {
  const { products, searchTerms, setSearchTerms, favState, favDispatch, wishlistInit } = props;
  

  return (    
    <>
      <main className='home'>
        <Header />
        <ProductDash products={products} searchTerms={searchTerms} setSearchTerms={setSearchTerms} favState={favState} favDispatch={favDispatch} wishlistInit={wishlistInit} />
      </main>
      
    </>
  )
}

export default Home;
