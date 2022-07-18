import {useContext} from 'react';
import CheckoutBtn from "../CheckoutBtn/CheckoutBtn";
import OrderSummary from "../OrderSummary/OrderSummary";
import ShoppingCard from "../ShoppingCard/ShoppingCard";
import CartContext from "../../context/CartProvider";


const ShoppingCart = ({ addToStorage, removeFromStorage, totalItems, totalCost }) => {
  const { cart } = useContext(CartContext);
  const title = 'Shopping Cart';
  console.log(cart)
  


  return (
    <>
      <section className="col-3">
        <h1 className="fw-bold mb-5">{ title }</h1>        
        {cart.map((cartItem) => <ShoppingCard key={cartItem.id} id={cartItem.id} img={cartItem.img} name={cartItem.name} price={cartItem.price} sale={cartItem.sale} qty={cartItem.qty} addToStorage={addToStorage} removeFromStorage={removeFromStorage} />)}
        <OrderSummary totalItems={totalItems} totalCost={totalCost} />
        <div className="mt-5">
        <CheckoutBtn />
        </div>
      </section>
    </>
  );
}


export default ShoppingCart;