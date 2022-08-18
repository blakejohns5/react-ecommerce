import { useState, createContext } from 'react';


const CartContext = createContext([]);


export const CartProvider = ({children}) => {
  const [cart, setCartItems] = useState([]);

  const addToCart = (product) => {
    const isInCart = cart.find((item) => item.id === product.id);    
    if (isInCart) {
        setCartItems(cart.map(item => item.id === product.id ? {...isInCart, qty: isInCart.qty + 1 } : item));
    } else {
        setCartItems([...cart, {...product, qty: 1}]);
    }
    localStorage.setItem('cart',JSON.stringify(cart));
  }
  
  const removeFromCart = (product) => {
    const isInCart = cart.find((item) => item.id === product.id);
    
    if (isInCart.qty === 1) {
      setCartItems(cart.filter((item) => item.id !== product.id));
    } else {
      setCartItems(cart.map((item) => item.id === product.id ? {...isInCart, qty: isInCart.qty - 1 } : item));
    };
  };

  const [ totalItems, setTotalItems ] = useState(0);
  const [ totalCost, setTotalCost ] = useState(0);  


  
  return (
    <CartContext.Provider value={{cart, setCartItems, addToCart, removeFromCart, totalItems, totalCost, setTotalItems, setTotalCost}}>
      {children}
    </CartContext.Provider>
  )
}


export default CartContext;
