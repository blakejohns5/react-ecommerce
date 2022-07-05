import CheckoutBtn from "../CheckoutBtn/CheckoutBtn";
import ProductCard from "../ProductCard/ProductCard";



const ShoppingCart = () => {
  const title = 'Shopping Cart';
  
  return (
    <>
      <section className="col-3">
        <h1>{ title }</h1>        
        <article className="d-flex flex-wrap">
          <h4>Your shopping cart is empty</h4>
        </article>
        <section>
          missing shopping cart items
        </section>
        <CheckoutBtn />
      </section>
      
      
    </>
  );
}


export default ShoppingCart;