import React from 'react'
import ProductDash from '../../components/ProductDash/ProductDash';
import ShoppingCart from '../../components/ShoppingCart/ShoppingCart';
import CartContext from '../../context/CartProvider';
import { useContext } from 'react';

function Home({ products, addToStorage, removeFromStorage, totalItems, totalCost }) {
  const { cart, setCartItems } = useContext(CartContext);

  return (    
      <>
      <main className='home  vh-100 d-flex margin5'>
      <ProductDash products={products} addToStorage={addToStorage} />
      <ShoppingCart addToStorage={addToStorage} removeFromStorage={removeFromStorage} totalItems={totalItems} totalCost={totalCost} />
      </main>
    </>
  )
}

export default Home;
