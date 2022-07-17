import {useContext} from 'react';
import { Link } from 'react-router-dom';
import CartContext from '../../context/CartProvider';

function CheckoutBtn() {
  const { cart } = useContext(CartContext);
  
  return (
    <>
     <Link to='/checkout' state={cart} ><button className="btn__checkout col-12 fs-4 text-light fw-bold btn-md px-5 py-2 border fw-bold">Checkout</button></Link>
    </>    
  )
}

export default CheckoutBtn;