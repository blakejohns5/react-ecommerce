import CheckoutBtn from "../CheckoutBtn/CheckoutBtn";
import ShoppingCard from "../ShoppingCard/ShoppingCard";


const ShoppingCart = ({ cart }) => {
  const title = 'Shopping Cart';

  return (
    <>
      <section className="col-3">
        <h1 className="fw-bold">{ title }</h1>
        {cart.map((item) => <ShoppingCard key={item.id} id={item.id} img={item.img} name={item.name} price={item.price} cart={cart} />)}
        <div className="mt-5">
        <CheckoutBtn />
        </div>
      </section>
    </>
  );
}


export default ShoppingCart;