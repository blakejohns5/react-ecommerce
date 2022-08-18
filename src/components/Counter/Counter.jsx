import { useContext } from "react";
import CartContext from "../../context/CartProvider";

function Counter(props) {
  const { product } = props;
  const { addToCart, removeFromCart } = useContext(CartContext)
  
  return (
    <>
    <article className="counter">
      <button className="counter__add" onClick={() => addToCart(product)}>+</button>
      <span className="fw-bold mt-1">{product.qty}</span>
      <button className="counter__remove" onClick={() => removeFromCart(product)}>-</button>
    </article>
    </>
  )
}

export default Counter;