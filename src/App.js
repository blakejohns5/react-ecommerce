import { useState, useEffect, useContext, useReducer } from 'react';
// Styles
// import './sass/main.scss';
// Components
import NavBar from './components/NavBar/NavBar';
import Router from './components/Router/Router';
// Context
import CartContext from './context/CartProvider';
// Reducer
import favReducer from './helpers/favReducer';
// Fetch functions
import { fetchData, PRODUCTS_URL } from './helpers/apis.js'

function App () {
  
  const [ products, setProducts ] = useState([]);
  const [ totalItems, setTotalItems ] = useState(0);
  const [ totalCost, setTotalCost ] = useState(0);  
  const [ checkoutStage, setCheckoutStage ] = useState('order');
  const { cart, setCartItems } = useContext(CartContext);
  const [ searchTerms, setSearchTerms ] = useState();

  const [ favState, favDispatch ] = useReducer(favReducer, [])


// IIFE to run async function from external js file
  useEffect( () => {
    (async () => {
      setProducts(await fetchData(PRODUCTS_URL))
    })()
  }, [])
  

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
      <NavBar searchTerms={searchTerms} setSearchTerms={setSearchTerms} products={products} totalItems={totalItems} favState={favState} favDispatch={favDispatch} />
      <Router products={products} searchTerms={searchTerms} addToStorage={addToStorage} removeFromStorage={removeFromStorage} totalItems={totalItems} totalCost={totalCost} favState={favState} favDispatch={favDispatch} checkoutStage={checkoutStage} setCheckoutStage={setCheckoutStage} />
      </>
  )
}

export default App;




