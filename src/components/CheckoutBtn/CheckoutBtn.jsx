import { Link } from 'react-router-dom';

function CheckoutBtn() {
  
  return (
    <>
     <Link to='/checkout' ><button className="btn-checkout" data-bs-dismiss="modal">Checkout</button></Link>
    </>    
  )
}

export default CheckoutBtn;