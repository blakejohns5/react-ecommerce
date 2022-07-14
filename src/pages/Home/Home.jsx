import React from 'react'
import ProductDash from '../../components/ProductDash/ProductDash';
import ShoppingCart from '../../components/ShoppingCart/ShoppingCart';

function Home({ products, cart, setCartItems, addToStorage, removeFromStorage, totalItems, totalCost }) {
  return (    
      <>
      <main className='home  vh-100 d-flex margin5'>
      <ProductDash products={products} cart={cart} setCartItems={setCartItems} addToStorage={addToStorage} />
      <ShoppingCart cart={cart} setCartItems={setCartItems} addToStorage={addToStorage} removeFromStorage={removeFromStorage} totalItems={totalItems} totalCost={totalCost} />
      </main>
    </>
  )
}

export default Home;
