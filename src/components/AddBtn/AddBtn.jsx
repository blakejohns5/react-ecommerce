import { useContext } from "react";
import CartContext from "../../context/CartProvider";
import CartDialog from "../ShoppingCart/CartDialog";


function AddBtn(props) {
  const { id, name, price, img, sale } = props;  
  const product = { id: id, name: name, price: price, img: img, sale: sale }

  const { addToCart, totalCost, totalItems } = useContext(CartContext);

  return (
    <>
      <button className="btn-cart" type="button" data-bs-toggle="modal" data-bs-target="#cartDialog" onClick={() => addToCart(product)} >Add to Cart</button>
      {/* Shopping Cart Dialog  */}
      <CartDialog totalItems={totalItems} totalCost={totalCost} />
    </>
  )
}

export default AddBtn;


