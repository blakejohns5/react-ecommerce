import CheckoutBtn from "../CheckoutBtn/CheckoutBtn";
import OrderSummary from "../OrderSummary/OrderSummary";
import ShoppingCard from "../ShoppingCard/ShoppingCard";


const ShoppingCart = ({ cart, setCartItems, addToStorage, removeFromStorage, totalItems, totalCost }) => {
  const title = 'Shopping Cart';
  


  return (
    <>
      <section className="col-3">
        <h1 className="fw-bold mb-5">{ title }</h1>        
        {cart.map((cartItem) => <ShoppingCard key={cartItem.id} id={cartItem.id} img={cartItem.img} name={cartItem.name} price={cartItem.price} qty={cartItem.qty} cart={cart} setCartItems={setCartItems} addToStorage={addToStorage} removeFromStorage={removeFromStorage} />)}
        <OrderSummary totalItems={totalItems} totalCost={totalCost} />
        <div className="mt-5">
        <CheckoutBtn cart={cart} />
        </div>
      </section>
    </>
  );
}


export default ShoppingCart;