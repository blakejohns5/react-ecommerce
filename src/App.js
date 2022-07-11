import './css/App.css';
import NavBar from './components/NavBar/NavBar';
import ProductDash from './components/ProductDash/ProductDash';
import ShoppingCart from './components/ShoppingCart/ShoppingCart';
import { useState } from 'react';

function App () {
  const [cart, setCartItems] = useState([]);

  const addToStorage = (product) => {
    const isInCart = cart.find((item) => item.id === product.id);    
    if (isInCart) {
        setCartItems(cart.map(item => item.id === product.id ? {...isInCart, qty: isInCart.qty + 1 } : item));
    } else {
        setCartItems([...cart, {...product, qty: 1}]);
    }
    localStorage.setItem('cart',JSON.stringify(cart));
    
  }
  
  const removeFromStorage = (product) => {
    const isInCart = cart.find((item) => item.id === product.id);
    
    if (isInCart.qty === 1) {
      setCartItems(cart.filter((item) => item.id !== product.id));
    } else {
      setCartItems(cart.map((item) => item.id === product.id ? {...isInCart, qty: isInCart.qty - 1 } : item));
    };
  };

  return (
    <>
    <NavBar />
    <main className='d-flex mt-5'>
      <ProductDash cart={cart} setCartItems={setCartItems} addToStorage={addToStorage} />
      <ShoppingCart cart={cart} setCartItems={setCartItems} addToStorage={addToStorage} removeFromStorage={removeFromStorage} />
    </main>
    </>
  )
}

export default App;




