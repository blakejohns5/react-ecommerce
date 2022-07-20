import { Route, Routes } from 'react-router-dom';
import { useState, useEffect, useContext, useReducer } from 'react';
// Styles
import './css/App.css';
// Components
import NavBar from './components/NavBar/NavBar';
// Pages
import Home from './pages/Home/Home';
import Checkout from './pages/Checkout/Checkout';
import Product from './pages/Product/Product';
import User from './pages/User/User';
import NotFound from './pages/NotFound/NotFound';
// Context
import CartContext from './context/CartProvider';

// Reducer
import favReducer from './helpers/favReducer';


function App () {
  const url = 'http://localhost:5000/products';
  const [products, setProducts] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [totalCost, setTotalCost] = useState(0);  
  const [ checkoutStage, setCheckoutStage ] = useState('order');
  const { cart, setCartItems } = useContext(CartContext);


  
  const [ favState, favDispatch ] = useReducer( favReducer, [] )


  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(url);
        const data = await res.json();        
        setProducts(data);        
      }
      catch (error) {
        console.log(error)
      }
    } 
    fetchProducts();
  }, [])

  // Alternate useEffect for products array with fetcth then method
  // useEffect(() => {
  //   fetch(url)
  //     .then(res => {
  //       return res.json();
  //     })
  //     .then(data => {
  //       setProducts(data)
  //       console.log(data)
  //     })
  // }, [])

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

  const setCartQty = (cart) => {
    setTotalItems(cart.reduce(function (accumulator, currentItem) {
      return accumulator += currentItem.qty
    }, 0))
  }
 
  const setCartTotal = (cart) => {
    setTotalCost(cart.reduce(function (accumulator, currentItem) {
      return accumulator += (currentItem.price * currentItem.qty)
    }, 0))
  }

  return (
      <>
      <NavBar totalItems={totalItems} favState={favState} favDispatch={favDispatch} />
      <Routes>
        <Route path='/' element={<Home products={products} addToStorage={addToStorage} removeFromStorage={removeFromStorage} totalItems={totalItems} totalCost={totalCost} favState={favState} favDispatch={favDispatch} />} exact />
        <Route path='/product/:id' element={<Product products={products} addToStorage={addToStorage} removeFromStorage={removeFromStorage} totalCost={totalCost} totalItems={totalItems} favState={favState} favDispatch={favDispatch} />}  />
        <Route path='/checkout' element={<Checkout addToStorage={addToStorage} removeFromStorage={removeFromStorage} totalItems={totalItems} totalCost={totalCost} checkoutStage={checkoutStage} setCheckoutStage={setCheckoutStage} />}  />
        <Route path='/user/' element={<User favState={favState} favDispatch={favDispatch} />}  />
        <Route path='*' element={<NotFound />}  />
      </Routes>
      </>
  )
}

export default App;




