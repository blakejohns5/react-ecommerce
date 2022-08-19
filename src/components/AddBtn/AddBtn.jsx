import { useContext } from "react";
import CartContext from "../../context/CartProvider";
import CartDialog from "../ShoppingCart/CartDialog";
import { BsFillBagPlusFill } from 'react-icons/bs'


function AddBtn(props) {
  const { id, name, price, img, sale } = props;  
  const product = { id: id, name: name, price: price, img: img, sale: sale }

  const { addToCart, totalCost, totalItems } = useContext(CartContext);

  return (
    <>
      <button className="icon-add" type="button" data-bs-toggle="modal" data-bs-target="#cartDialog" onClick={() => addToCart(product)} ><BsFillBagPlusFill /></button>
      {/* Shopping Cart Dialog  */}
      <CartDialog totalItems={totalItems} totalCost={totalCost} />
    </>
  )
}

export default AddBtn;


