import CheckoutBtn from "../CheckoutBtn/CheckoutBtn";
import ShoppingCard from "../ShoppingCard/ShoppingCard";


const ShoppingCart = ({ cart, setCartItems, addToStorage, removeFromStorage }) => {
  const title = 'Shopping Cart';


  return (
    <>
      <section className="col-3 mt-4">
        <h1 className="fw-bold">{ title }</h1>
        <div className="pt-4">
        {cart.map((cartItem) => <ShoppingCard key={cartItem.id} id={cartItem.id} img={cartItem.img} name={cartItem.name} price={cartItem.price} qty={cartItem.qty} cart={cart} setCartItems={setCartItems} addToStorage={addToStorage} removeFromStorage={removeFromStorage} />)}
        </div>
        <div className="mt-5">
        <CheckoutBtn />
        </div>
      </section>
    </>
  );
}


export default ShoppingCart;