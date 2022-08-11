import { useState, useEffect, useContext, useReducer } from 'react';
// Styles
// import './sass/main.scss';
// Components
import NavBar from './components/NavBar/NavBar';
import Router from './components/Router/Router';
// Context
import CartContext from './context/CartProvider';
// Helpers
import favReducer from './helpers/favReducer.js';
import { fetchData, PRODUCTS_URL } from './helpers/apis'
import { getUserWishlist } from './helpers/wishlist';
import AuthContext from './context/AuthProvider';
import { FAV_ACTIONS} from './helpers/favReducer.js'


function App () {
  
  const [ products, setProducts ] = useState([]);
  const [ totalItems, setTotalItems ] = useState(0);
  const [ totalCost, setTotalCost ] = useState(0);  
  const [ checkoutStage, setCheckoutStage ] = useState('order');
  const { cart, setCartItems } = useContext(CartContext);
  const [ searchTerms, setSearchTerms ] = useState();
  const { auth } = useContext(AuthContext)
    
  const [ wishlistInit, setWishlistInit ] = useState([]);
// IIFE to run async function from external js file
  useEffect( () => {
    (async () => {
      setProducts(await fetchData(PRODUCTS_URL))   
    })()
  }, [])

  useEffect( () => {
    (async () => {      
      setWishlistInit(await getUserWishlist(auth.email, products))    
    })()
  }, [auth.email, products])

  useEffect(() => {
    setCartQty(cart);
    setCartTotal(cart);
  }, [cart])

  

  const [ favState, favDispatch ] = useReducer(favReducer, []) 
  
  const addToStorage = (product) => {
    const isInCart = cart.find((item) => item.id === product.id);    
    if (isInCart) {
        setCartItems(cart.map(item => item.id === product.id ? {...isInCart, qty: isInCart.qty + 1 } : item));
    } else {
        setCartItems([...cart, {...product, qty: 1}]);
    }
    localStorage.setItem('cart',JSON.stringify(cart));
    console.log('adding')
  }
  
  const removeFromStorage = (product) => {
    const isInCart = cart.find((item) => item.id === product.id);
    
    if (isInCart.qty === 1) {
      setCartItems(cart.filter((item) => item.id !== product.id));
    } else {
      setCartItems(cart.map((item) => item.id === product.id ? {...isInCart, qty: isInCart.qty - 1 } : item));
    };
    console.log('removing')
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
      <NavBar searchTerms={searchTerms} setSearchTerms={setSearchTerms} products={products} totalItems={totalItems} favState={favState} favDispatch={favDispatch} />
      <Router products={products} searchTerms={searchTerms} addToStorage={addToStorage} removeFromStorage={removeFromStorage} totalItems={totalItems} totalCost={totalCost} favState={favState} favDispatch={favDispatch} checkoutStage={checkoutStage} setCheckoutStage={setCheckoutStage} wishlistInit={wishlistInit} />
      </>
  )
}

export default App;




