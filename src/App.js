import './css/App.css';
import NavBar from './components/NavBar/NavBar';
import ProductDash from './components/ProductDash/ProductDash';
import ShoppingCart from './components/ShoppingCart/ShoppingCart';
import { useState } from 'react';

function App () {
  const [cart, setCartItems] = useState([]);
  const [count, setCount] = useState((value = 0) => {    
    return value;
  });


  return (
    <>
    <NavBar />
    <main className='d-flex mt-5'>
      <ProductDash cart={cart} setCartItems={setCartItems} count={count} setCount={setCount} />
      <ShoppingCart cart={cart} count={count} setCount={setCount}/>
      
    </main>
    </>
  )
}


export default App;




