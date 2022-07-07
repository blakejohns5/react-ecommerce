import './css/App.css';
import NavBar from './components/NavBar/NavBar';
import ProductDash from './components/ProductDash/ProductDash';
import ShoppingCart from './components/ShoppingCart/ShoppingCart';
import { useState } from 'react';

function App () {
  const [cart, setCartItems] = useState([]);


  return (
    <>
    <NavBar />
    <main className='d-flex mt-5'>
      <ProductDash cart={cart} setCartItems={setCartItems} />
      <ShoppingCart cart={cart} />
      
    </main>
    </>
  )
}


export default App;




