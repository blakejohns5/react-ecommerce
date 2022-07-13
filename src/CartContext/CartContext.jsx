
const CartContext = createContext([]);

function CartContextProvider ({children}: any) {
  return (
    <CartContext.Provider>
      {children}

    </CartContext.Provider>
  )


}




export default CartContextProvider;