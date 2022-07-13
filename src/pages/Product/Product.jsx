import React from 'react'
import { useParams } from 'react-router-dom';
import { products } from '../../products.js';
import ShoppingCart from '../../components/ShoppingCart/ShoppingCart.jsx';
import ProductDetail from '../../components/ProductDetail/ProductDetail';


function Product({ cart, setCartItems, addToStorage, removeFromStorage }) {
  const { id } = useParams();  
  const product = products.find((item) => parseInt(item.id) === parseInt(id));
  
  return (
    <>
      <main className='product__main vh-100 col-12 d-flex margin10'>
        <ProductDetail img={product.img} name={product.name} price={product.price} id={product.id} addToStorage={addToStorage} removeFromStorage={removeFromStorage} />
        <div className='product__cart col-10 px-3'>
        <ShoppingCart key={'cp'+product.id} cart={cart} setCartItems={setCartItems} addToStorage={addToStorage} removeFromStorage={removeFromStorage} />
        </div>
      </main>
    </>
  )
}

export default Product;

