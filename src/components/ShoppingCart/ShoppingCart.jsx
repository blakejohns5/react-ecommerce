import {useContext} from 'react';
import CheckoutBtn from "../CheckoutBtn/CheckoutBtn";
import OrderSummary from "../OrderSummary/OrderSummary";
import ShoppingCard from "../ShoppingCard/ShoppingCard";
import CartContext from "../../context/CartProvider";


const ShoppingCart = ({ addToStorage, removeFromStorage, totalItems, totalCost }) => {
  const { cart } = useContext(CartContext);
  const title = 'Shopping Cart';
  
  return (
    <>
      <section className="shopping-cart col-3">
        <h1>{ title }</h1>        
        {cart.map((cartItem) => <ShoppingCard key={cartItem.id} id={cartItem.id} img={cartItem.img} name={cartItem.name} price={cartItem.price} sale={cartItem.sale} qty={cartItem.qty} addToStorage={addToStorage} removeFromStorage={removeFromStorage} />)}
        <div className="shopping-cart__summary col-12">
          <OrderSummary totalItems={totalItems} totalCost={totalCost} />
        </div>
        <footer>
        <CheckoutBtn />
        </footer>
      </section>
    </>
  );
}


export default ShoppingCart;