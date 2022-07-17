import React from 'react'
import ProductDash from '../../components/ProductDash/ProductDash';
import ShoppingCart from '../../components/ShoppingCart/ShoppingCart';


function Home({ products, addToStorage, removeFromStorage, totalItems, totalCost }) {
  

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
