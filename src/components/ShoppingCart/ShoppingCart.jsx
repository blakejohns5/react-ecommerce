import {useContext} from 'react';
import CheckoutBtn from "../CheckoutBtn/CheckoutBtn";
import OrderTotal from "../../pages/Checkout/OrderTotal";
import ShoppingCard from "./ShoppingCard";
import CartContext from "../../context/CartProvider";


const ShoppingCart = () => {
  const { cart } = useContext(CartContext);
  const title = 'Shopping Cart';
 

  return (
    <>
      <section className="shopping-cart">
        <h1>{ title }</h1>        
        {cart.map((cartItem) => <ShoppingCard key={cartItem.id} id={cartItem.id} img={cartItem.img} name={cartItem.name} price={cartItem.price} sale={cartItem.sale} qty={cartItem.qty} />)}
        <div className="shopping-cart__summary col-12">
          <OrderTotal />
        </div>
        <footer>
          <CheckoutBtn />
        </footer>
      </section>
    </>
  );
}


export default ShoppingCart;