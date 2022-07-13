import React from 'react'
import ProductDash from '../../components/ProductDash/ProductDash';
import ShoppingCart from '../../components/ShoppingCart/ShoppingCart';

function Home({ cart, setCartItems, addToStorage, removeFromStorage}) {
  return (    
      <>
      <main className='home d-flex margin5'>
      <ProductDash cart={cart} setCartItems={setCartItems} addToStorage={addToStorage} />
      <ShoppingCart cart={cart} setCartItems={setCartItems} addToStorage={addToStorage} removeFromStorage={removeFromStorage} />
      </main>
    </>
  )
}

export default Home
