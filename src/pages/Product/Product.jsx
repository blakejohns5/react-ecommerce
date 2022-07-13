import React from 'react'
import { useParams } from 'react-router-dom';
import { products } from '../../products.js';
import AddBtn from '../../components/AddBtn/AddBtn.jsx';
import ShoppingCart from '../../components/ShoppingCart/ShoppingCart.jsx';


function Product({ cart, setCartItems, addToStorage, removeFromStorage }) {
  const { id } = useParams();  
  const product = products.find((item) => parseInt(item.id) === parseInt(id));
  const currency = '€';
  console.log(product.id, product.price, product.name, product.img);

  return (
    <>
      <main className='product__main vh-100 col-10 d-flex'>
        <section className='product__frame col-6 d-flex flex-column align-items-center justify-content-center text-center'>
          <img src={product.img} alt="selected product" className="img-fluid mb-3 col-8"/>
          <header>
          <h4><strong>{product.name}</strong></h4>            
          </header>
          <p className="fs-5">{product.price.toFixed(2)} {currency}</p>
          <AddBtn key={product.id} id={product.id} name={product.name} price={product.price} img={product.img} addToStorage={addToStorage} removeFromStorage={removeFromStorage} />
        </section>
        <section className='product__cart col-12'>
          <ShoppingCart key={'cp'+product.id} cart={cart} setCartItems={setCartItems} addToStorage={addToStorage} removeFromStorage={removeFromStorage} />
        </section>
        
      </main>


      
    </>
  )
}

export default Product;



{/* <div className="h-100 product__card bg-light px-3 py-4 border d-flex flex-column align-items-center text-center justify-content-center ">
<img src={img} alt="shoes_01" className="img-fluid mb-1 img-thumbnail" />
<div className="h-100 d-flex flex-column justify-content-start">
<h3 className="my-2 fs-5">{name}</h3>  
</div>
<div className="h-100 d-flex flex-column justify-self-end mt-2">
<p className="fs-5">{price.toFixed(2)} {currency}</p>
</div>
<div className="h-100 d-flex flex-column justify-self-end mt-2">
  <AddBtn key={id} {...props} 
  
   />
</div> */}
