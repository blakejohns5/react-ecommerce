import CheckoutBtn from "../CheckoutBtn/CheckoutBtn";
import Counter from "../Counter/Counter";



const ShoppingCart = () => {
  const title = 'Shopping Cart';

  return (
    <>
      <section className="col-3">
        <h1>{ title }</h1>        
        <article className="d-flex flex-wrap">
          <h4>Your shopping cart is empty</h4>
        </article>
        {/* added count options here */}
        <Counter />
        <section id="cartItems">
          missing shopping cart items
        </section>
        <div className="mt-5">
        <CheckoutBtn />
        </div>        
      </section>
      
      
    </>
  );
}


export default ShoppingCart;