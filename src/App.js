import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import './css/App.css';
import NavBar from './components/NavBar/NavBar';

// Pages
import Home from './pages/Home/Home';
import Checkout from './pages/Checkout/Checkout';
import Login from './pages/Login/Login';
import Product from './pages/Product/Product';
import NotFound from './pages/NotFound/NotFound';


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
      <Routes>
        <Route path='/' element={<Home cart={cart} setCartItems={setCartItems} addToStorage={addToStorage} removeFromStorage={removeFromStorage} />} exact />
        <Route path='/product/:id' element={<Product cart={cart} setCartItems={setCartItems} addToStorage={addToStorage} removeFromStorage={removeFromStorage} />}  />
        <Route path='/checkout' element={<Checkout />}  />
        <Route path='/login' element={<Login />}  />
        <Route path='*' element={<NotFound />}  />
      </Routes>
      </>
  )
}

export default App;




