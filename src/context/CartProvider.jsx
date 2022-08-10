import { useState, createContext } from 'react';


const CartContext = createContext([]);


export const CartProvider = ({children}) => {
  const [cart, setCartItems] = useState([]);
  
  
  return (
    <CartContext.Provider value={{cart, setCartItems}}>
      {children}
    </CartContext.Provider>
  )
}


export default CartContext;
