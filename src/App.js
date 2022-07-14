import { Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
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
  const [totalItems, setTotalItems] = useState(0);
  const [totalCost, setTotalCost] = useState(0);  

  useEffect(() => {
    setCartQty(cart);
    setCartTotal(cart);
  }, [cart])

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

  function setCartQty (cart) {
    setTotalItems(cart.reduce(function (accumulator, currentItem) {
      return accumulator += currentItem.qty
    }, 0))
  }
 
  function setCartTotal (cart) {
    setTotalCost(cart.reduce(function (accumulator, currentItem) {
      return accumulator += (currentItem.price * currentItem.qty)
    }, 0))
  }

  return (
      <>
      <NavBar totalItems={totalItems} />
      <Routes>
        <Route path='/' element={<Home cart={cart} setCartItems={setCartItems} addToStorage={addToStorage} removeFromStorage={removeFromStorage} totalItems={totalItems} totalCost={totalCost} />} exact />
        <Route path='/product/:id' element={<Product cart={cart} setCartItems={setCartItems} addToStorage={addToStorage} removeFromStorage={removeFromStorage} totalCost={totalCost} totalItems={totalItems} />}  />
        <Route path='/checkout' element={<Checkout cart={cart} addToStorage={addToStorage} removeFromStorage={removeFromStorage} totalItems={totalItems} totalCost={totalCost} />}  />
        <Route path='/login' element={<Login />}  />
        <Route path='*' element={<NotFound />}  />
      </Routes>
      </>
  )
}

export default App;




